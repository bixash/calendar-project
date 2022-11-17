
//====https://www.hamropatro.com/js/newDateConverter.js?v=2.5===//

document.getElementById('heading').innerText='Nepali to English Date Converter';

var monthList={
    "nepMonth":["Baishakh","Jestha","Aashadha","Shrawan","Bhadra","Ashwin","Kartik","Mangsir","Paush","Magh","Falgun","Chaitra"],
    "engMonth":["January","February","March","April","May","June","July","August","September","October","November","December"]
};

var currentNepDate=getCurrentNepDate().split('-');

var convertType='nep_to_eng';

var currentNepYear=currentNepDate[0];

var currentNepMonth=currentNepDate[1];

var currentNepDay=currentNepDate[2];

var currentEngDate=getCurrentEngDate().split('-');

var currentEngYear=currentEngDate[0];
var currentEngMonth=currentEngDate[1];
var currentEngDay=currentEngDate[2];

$("#selectDate").html(getNepDate());

$("#convertdate").click(function(){
    let selectedYear=$("select[name='txtYear']").val();
    let selectedMonth=$("select[name='txtMonth']").val();
    let selectedDay=$("select[name='txtDay']").val();

    let datefield=selectedYear+'-'+selectedMonth+'-'+selectedDay;
    $.post('getMethod.php',{actionName:'dconverter','datefield':datefield,'convert_option':convertType,state:Math.random()},function(data){
        let result=data.split('|');
        var resultHTml='';

    if(convertType=='nep_to_eng')
    {
        resultHTml='<spam class="original-date">'+result[1]+'</spam><br/><spam class="result-date">'+result[0].split(':')[1]+'</spam>';
    }
    else
    {
        resultHTml='<spam class="original-date">'+result[0].split(':')[1]+'</spam><br/><spam class="result-date">'+result[1]+'</spam>';
    }

    $("#date_converted").html(resultHTml);
    $('#result-continer').css('display','block');
    });

});

    $("input[name='convert']").change(function(e){
        convertType=$(this).val();
        if($(this).val()=='nep_to_eng'){
            $("#selectDate").html(getNepDate());
        }else{
            $("#selectDate").html(getEngDate());
        }
    });

function getEngDate()
{
    return '<div id="nep" >\n'+
'            <select name="txtMonth" class="year" id="month" size="1">'+getEngMonth('engMonth')+'</select>'+
'            <select name="txtDay" class="month-day" id="day" size="1">'+getEngDay()+'</select>'+
'            <select name="txtYear" class="month-day" id="year" size="1">'+getEngYear()+'</select>'+
' </div id>';
}

function getNepDate(){
    return '<div id="nep" >\n'+
'            <select name="txtMonth"  class="year" id="month" size="1">'+getNepMonth('nepMonth')+'</select>'+
'            <select name="txtDay" class="month-day" id="day" size="1">'+getNepDay()+'</select>'+
'            <select name="txtYear" class="month-day" id="year" size="1">'+getNepYear()+'</select>'+
' </div id>';
}

function getNepYear(){
    let opt='';
    for(i=2000;i<=2089;i++)
    {
        if(i==currentNepYear){
            opt=opt+'<option value='+i+' selected="">'+i+'</option>';
        }
        else {
            opt=opt+'<option value='+i+'>'+i+'</option>';
        }
    }
    return opt;
}

function getEngYear(){
    let opt='';
    for(i=1944;i<=2033;i++)
    {
        if(i==currentEngYear){
            opt=opt+'<option value='+i+' selected="">'+i+'</option>';
        }
        else{
            opt=opt+'<option value='+i+'>'+i+'</option>';
        }
    }
    return opt;
}

function getNepDay(){
    let opt='';
    for(i=1;i<=32;i++){
        if(i==currentNepDay){
            opt=opt+'<option value='+i+' selected="">'+i+'</option>';
        }
        else{
            opt=opt+'<option value='+i+'>'+i+'</option>';
        }
    }
    return opt;
}

function getEngDay(){
    let opt='';
    for(i=1;i<=31;i++){
        if(i==currentEngDay){
            opt=opt+'<option value='+i+' selected="">'+i+'</option>';
        }
        else{
            opt=opt+'<option value='+i+'>'+i+'</option>';
        }
    }
    return opt;
}

function getNepMonth(type){
    let opt='';
    monthList[type].forEach(function(val,key){
        if((key+1)==currentNepMonth){
            opt=opt+'<option value='+(key+1)+' selected="">'+val+'</option>';
        }
        else{
            opt=opt+'<option value='+(key+1)+'>'+val+'</option>';
        }
    });
    return opt;
}

function getEngMonth(type){
    let opt='';
    monthList[type].forEach(function(val,key){
        if((key+1)==currentEngMonth){
            opt=opt+'<option value='+(key+1)+' selected="">'+val+'</option>';
        }
        else{
            opt=opt+'<option value='+(key+1)+'>'+val+'</option>';
        }
    });
    return opt;
}


function resetConvert(){
    $("#date_converted").html('');
    $('#result-continer').css('display','none');
    if(convertType=='nep_to_eng'){
        $('#month').val(currentNepMonth);
        $('#day').val(currentNepDate);
        $('#year').val(currentNepYear);
    }
    else{
        $('#month').val(currentEngMonth);
        $('#day').val(currentEngDay);
        $('#year').val(currentEngYear);
    }
}




//=== this is index page ===//


var currenttime = "October 29, 2022 22:38:25";
var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
var numbers = Array("&#2406;", "&#2407;", "&#2408;", "&#2409;", "&#2410;", "&#2411;", "&#2412;", "&#2413;", "&#2414;", "&#2415;");
var serverdate = new Date(currenttime);
function padlength(what) {
  var output = (what.toString().length == 1) ? "0" + what : what
  return output
}
displaytime();

function displaytime() {
serverdate.setSeconds(serverdate.getSeconds() + 1)
  var datestring = montharray[serverdate.getMonth()] + " " + padlength(serverdate.getDate()) + ", " + serverdate.getFullYear()
  var timestring = padlength(serverdate.getHours()) + ":" + padlength(serverdate.getMinutes()) + ":" + padlength(serverdate.getSeconds())
  if (timestring == "23:59:59") {
      window.location.reload()
  } else {
      document.getElementById("time_check").innerHTML = " " + timestring;
  }
   setInterval('displaytime()',1000);
}


//== https://www.hamropatro.com/  after home script ==//

    function getTodaysDate() {
        var eyear="2022";
        var emonth="10";
        var eday="29";
        var todayDate=eyear+'-'+emonth+'-'+eday;
        var todaySplit=todayDate.split('-');
        var today=new Date(todaySplit[0], parseInt(todaySplit[1], 10) - 1, parseInt(todaySplit[2]));
        return today;
    }

    function getTodayDateNepali() {
        var eyear="2079";
        var emonth="7";
        var eday="12";
        var todayDate=eyear+'-'+emonth+'-'+eday;
        var todaySplit=todayDate.split('-');
        return todaySplit;
    }
    function getAppId() {
        return 'hamropatro';
    }
    function getBackEndUrl() {
        return 'https://everestbackend-api.hamropatro.com';
    }
    function getPageName() {
        return 'home'

    }


    //https://www.hamropatro.com/js/script.js//

    $(document).ready(function(){$("#convert").click(function(){
        var datefield=$("#datefield").val();
        var convert_option=$("select#convert_option").val();

        if(datefield==''){
            $("#result_display").html("Please enter date");
            return false;
        }
        $.post('getMethod.php',
            {actionName:'dconverter',
                'datefield':datefield,
                'convert_option':convert_option,
                state:Math.random()
            },
            function(data){
                $("#result_display").html(data);
            }
        );
    });

});

//===https://www.bolpatra.gov.np/egp/resources/js/dateconverter.js==//

function convertToNepali(formId) {

	$.ajax({
		type : 'post',
		async : true,
		global:false,
		url : 'convertToNep',
		data : $('#' + formId).serialize(),
		success : function(data) {
			$("#resultDateDiv").html(data);
		}
	});

}

function convertToEnglish(formId) {

	$.ajax({
		type : 'post',
		async : true,
		global:false,
		url : 'convertToEng',
		data : $('#' + formId).serialize(),
		success : function(data) {
			$("#resultDateDiv").html(data);
		}
	});

}

function getNepaliDateByLabel(elementObj) {
	var x = elementObj.innerHTML;

	if (x.length > 4) {
		var dateChunks = x.split('-');
		var monthStr = dateChunks[0];
		var dateStr = dateChunks[1];
		var yearStr = dateChunks[2];

		if (yearStr.length == 2) {
			yearStr = '20' + yearStr;
		}

		$.ajax({
			type : 'post',
			async : true,
			global:false,
			url : 'nepToEngDate',
			data : 'year=' + yearStr + '&month=' + monthStr + '&date='
					+ dateStr,
			success : function(data) {
				elementObj.setAttribute("title", "Converted Nepali Date :: "
						+ data);
			}
		});

	}

}

function getNepaliDateByTD(elementObj) {
	var x = elementObj.innerHTML;

	if (x.length > 4) {
		var dateChunks = x.split('-');
		var dateStr = dateChunks[0];
		var monthStr = dateChunks[1];
		var yearStr = dateChunks[2];

		if (yearStr.length == 2) {
			yearStr = '20' + yearStr;
		}

		$.ajax({
			type : 'post',
			async : true,
			global:false,
			url : 'nepToEngDate',
			data : 'year=' + yearStr + '&month=' + monthStr + '&date='
					+ dateStr,
			success : function(data) {
				elementObj.setAttribute("title", "Converted Nepali Date :: "
						+ data);
			}
		});

	}

}
function getNepaliDate(elementObj, eleLabel) {
	var x = elementObj.value;

	if (x.length > 4) {
		var dateChunks = '';
		var dateStr = '';
		var monthStr = '';
		var yearStr = '';
		if(x.indexOf("/") > 0){
			dateChunks = x.split('/');
			dateStr = dateChunks[0];
			monthStr = dateChunks[1];
			yearStr = dateChunks[2];
		}else{
			dateChunks = x.split('-');
			dateStr = dateChunks[0];
			monthStr = dateChunks[1];
			yearStr = dateChunks[2];
		}
		

		$.ajax({
			type : 'post',
			async : true,
			global:false,
			url : 'nepToEngDate',
			data : 'year=' + yearStr + '&month=' + monthStr + '&date='
					+ dateStr,
			success : function(data) {
				elementObj.setAttribute("title", "Converted Nepali Date :: "
						+ data);
			}
		});

	}
}
function getNepaliConvertedDate(elementObj, eleLabel) {
	var x = elementObj.value;

	if (x.length > 4) {
		var dateChunks = x.split('-');
		var dateStr = dateChunks[0];
		var monthStr = dateChunks[1];
		var yearStr = dateChunks[2];

		$.ajax({
			type : 'post',
			async : true,
			global:false,
			url : 'nepToEngDate',
			data : 'year=' + yearStr + '&month=' + monthStr + '&date='
					+ dateStr,
			success : function(data) {
				elementObj.setAttribute("title", "Converted Nepali Date :: "
						+ data);
			}
		});

	}
}
function getNepaliDateTime(elementObj, eleLabel) {
	
	var dateTime = elementObj.value;
	var dateTimeChunks = dateTime.split(" ");
if (dateTimeChunks.length > 1) {
	var dateStr = dateTimeChunks[0];
	var timeStr = dateTimeChunks[1];
	if (dateStr.length > 4) {
		var dateChunks = dateStr.split('-');
		var dateStr = dateChunks[0];
		var monthStr = dateChunks[1];
		var yearStr = dateChunks[2];

		$.ajax({
			type : 'post',
			async : true,
			global:false,
			url : 'nepToEngDate',
			data : 'year=' + yearStr + '&month=' + monthStr + '&date='
					+ dateStr,
			success : function(data) {
				elementObj.setAttribute("title", "Converted Nepali Date :: "
						+ data +" "+timeStr);
			}
		});

	}else{
		elementObj.setAttribute("title", "");
	}
}else{
	elementObj.setAttribute("title", "");
}
}



//https://www.ashesh.com.np/nepali-date/dcf.js?v=1234//

eval(function(p,a,c,k,e,d){
    e=function(c){return c};
    if(!''.replace(/^/,String)){
        while(c--){
            d[c]=k[c]||c
        }
        k=[function(e){return d[e]}];
        e=function(){
            return'\\w+'
    };
    c=1
};
    while(c--){
        if(k[c]){
            p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])
        }
    }
    return p
}
    (
        '16 17,15,18,26;67 165(){15=23.21("15");15=15.66[15.64].65;18=23.21("18");18=18.66[18.64].65;26=23.21("26");26=26.66[26.64].65;14(18=="188"){17=31;16 24=[40,27,39,38,42,43,35,34,59,61,58,,63,57,97,54,186];89(15,24)}14(18=="193"){17=31;16 44=[98,40,72,27,87,92,137,85,99,52,100,46,69,39,86,38,84,83,88,140,45,105,48,90,42,82,43,75,35,76,81,123,77,106,49,111,50,79,34,80,74,68,163,70,112,51,110,59,47,61,63,57,54,78,93];121(15,44)}14(18=="198"){17=32;16 25=[98,40,72,27,87,95,92,96,137,85,146,99,52,153,100,46,69,39,86,38,84,56,83,107,194,88,103,140,45,142,105,48,127,90,42,82,43,75,35,76,104,81,102,123,77,141,106,49,138,111,50,79,34,80,36,74,62,68,101,163,70,156,112,51,168,110,59,47,61,63,57,54,78,93];91(15,25)}14(18=="171"){17=32;16 25=[148,149,147,143,144,145,152,160,161,162,159,158,154,155,157,126,128,129,150,125,124,122,130,131,139,136,151,132,133,134,135,164,169,114,109,73,71,108,119,37,113];91(15,25)}14(18=="184"){17=31;16 44=[149,150,151];16 24=[47,58,93];89(15,24);121(15,44)}14(18=="179"){17=30;16 25=[148,147,180,27,143,95,144,96,145,146,152,153,160,161,162,159,158,56,154,107,155,103,157,142,126,127,128,129,125,35,124,104,122,102,130,141,131,138,139,136,132,36,133,62,134,101,135,156,164,168,169,47,73,58,71,119,37,113,93];91(15,25)}14(18=="191"){17=30;16 33=[27,95,96,56,107,103,35,104,102,36,62,101,37];118(15,33)}14(18=="189"){17=29;16 24=[98,40,72,27,87,95,92,96,85,99,52,100,46,69,39,86,38,84,56,83,107,88,103,45,105,48,90,42,82,43,75,35,76,104,81,102,77,106,49,111,50,79,34,80,36,74,62,68,101,70,112,51,110,120,59,114,109,47,61,73,58,63,57,71,97,54,108,78,37];89(15,24)}14(18=="199"){17=30;16 33=[98,40,72,27,87,92,85,99,52,100,46,69,39,86,38,84,83,88,45,105,48,90,42,82,43,75,76,81,77,106,49,111,50,79,34,80,36,74,68,70,112,51,110,120,59,114,109,47,61,73,58,63,57,71,97,54,108,78,37,113];118(15,33)}14(18=="185"){17=29;16 24=[40,27,52,46,39,38,45,48,42,43,49,50,34,36,51,120,59,114,109,47,61,73,58,63,57,71,97,54,108,119,78,37,113];89(15,24)}14(18=="181"){17=30;16 33=[40,27,52,46,39,38,56,45,48,42,43,35,49,50,34,36,62,51,37];118(15,33)}14(18=="178"){17=30;16 25=[40,72,27,87,92,85,52,46,69,39,86,38,84,56,83,88,45,48,90,42,82,43,75,35,76,81,77,49,50,79,34,80,36,74,62,68,70,51,37];91(15,25)}67 118(15,33){55(16 19=0;19<33.117;19++){14(33[19]==15){17=29;115;116}}}67 89(15,24){55(16 19=0;19<24.117;19++){14(24[19]==15){17=30;115;116}}}67 91(15,25){55(16 19=0;19<25.117;19++){14(25[19]==15){17=31;115;116}}}67 121(15,44){55(16 19=0;19<44.117;19++){14(44[19]==15){17=32;115;116}}}23.21("26").60="";55(16 22=1;22<=17;22++){14(22==26){23.21("26").60+="<41 94=\'94\'>"+22+"</41>"}20{23.21("26").60+="<41>"+22+"</41>"}}}165();16 53,13,28;67 167(){53=23.21("53");53=53.66[53.64].65;13=23.21("13");13=13.66[13.64].65;28=23.21("28");28=28.66[28.64].65;14(13=="176"){13=1}20 14(13=="174"){13=2}20 14(13=="172"){13=3}20 14(13=="192"){13=4}20 14(13=="190"){13=5}20 14(13=="187"){13=6}20 14(13=="197"){13=7}20 14(13=="195"){13=8}20 14(13=="175"){13=9}20 14(13=="182"){13=10}20 14(13=="183"){13=11}20 14(13=="177"){13=12}16 166=173 196(53,13,0).170();23.21("28").60="";55(16 22=1;22<=166;22++){14(22==28){23.21("28").60+="<41 94=\'94\'>"+22+"</41>"}20{23.21("28").60+="<41>"+22+"</41>"}}}167();',10,200,'|||||||||||||emonth|if|year|var|td|month|n|else|getElementById|i|document|years30|years31|day|1977|eday|||||years29|2058|2035|2062|2098|2004|2000|1973|option|2027|2031|years32|2019|1996|2085|2023|2050|2054|2077|1992|yeare|2093|for|2008|2090|2088|2082|innerHTML|2086|2066|2089|selectedIndex|text|options|function|2069|1999|2073|2091|1976|2087|2065|2034|2038|2046|2097|2057|2061|2042|2030|2011|2007|1988|2003|1980|2015|fn_years30|2026|fn_years31|1984|2100|selected|1981|1985|2092|1972|1991|1995|2070|2043|2016|2039|2022|2049|2012|2094|2084|2080|2053|2076|2099|2083|break|return|length|fn_years29|2095|2081|fn_years32|2040|2045|2036|2032|2021|2024|2025|2028|2044|2048|2059|2063|2067|2071|2055|1987|2051|2052|2018|2047|2020|1978|1982|1986|1989|1974|1970|1971|2029|2056|1990|1993|2009|2013|2074|2017|2005|2001|1994|1997|1998|2072|2075|myFunction|tde|myFunctionEng|2078|2079|getDate|Shrawan|March|new|February|September|January|December|Chaitra|Ashwin|19755|Falgun|October|November|Bhadra|Magh|2096|June|Baishakh|Mangsir|May|Kartik|April|Jestha|2014|August|Date|July|Ashadh|Poush'.split('|'),0,{}
    )
)





