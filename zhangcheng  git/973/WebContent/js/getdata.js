function upDateAllInfo(index){
var m=get_measuretime(index);
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var websrc="/973/DataProxy?index="+index;
xmlhttp.open("GET",websrc,true);
xmlhttp.send();
if(xmlhttp.responseText)
   return xmlhttp.responseText;
   else return 0;
	
}
//浠ヤ笅鏄幏鍙栨按浣嶆暟鎹�
function getAllInfo(id)
{

	var obj=eval('('+allInfo+')');
	obj=obj.Info;
	for(var o in obj)
		{
		if(obj[o].id==id)
			return obj[o];
		}
	return null;
}
function getLastAllInfo(id)
{

	var obj=eval('('+lastAllInfo+')');
	if(obj)
	{
	obj=obj.Info;
	for(var o in obj)
		{
		if(obj[o].id==id)
			return obj[o];
		}
	}
	return null;
}

function getSW(id,index){
var m=get_measuretime(index);
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var websrc="/973/PantageProxy?name="+id+"&time="+m;
xmlhttp.open("GET",websrc,false);
xmlhttp.send();
if(xmlhttp.responseText){
	var obj=eval('(' + xmlhttp.responseText + ')');
	return obj.result;}
   else return 0;
	
}
	//浠ヤ笅鏄幏鍙栭洦閲忔暟鎹�
function getYL(id,index){
var m=get_measuretime(index);
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  var websrc="/973/RainFallProxy?name="+id+"&time="+m;
xmlhttp.open("GET",websrc,false);
xmlhttp.send();
if(xmlhttp.responseText)
	{
var obj=eval('(' + xmlhttp.responseText + ')');
return obj.result;
	}
   else return 0;
}

	//浠ヤ笅鏄幏鍙栧煄甯傞洦閲忔暟鎹�
function getcityly(cityname,citytime)
{
	var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
var url="/973/CityRainFallProxy?name="+cityname+"&time="+citytime;//"http://localhost:8090/HydrologyIntergrationComponent/IgCityRainfallService/getCityRf?name="+cityname+"&time="+citytime
xmlhttp.open("GET",url,false);
xmlhttp.send();
var obj=eval('(' + xmlhttp.responseText + ')');
return obj.result;
}

function get_Typhoo(index)
{
	var xmlhttp;

	
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
var url="/973/TyphoonProxy?flag="+index;//"http://localhost:8062/WeatherIntergrationComponent/TyphoonService/getTyphoon?flag="+index
xmlhttp.open("GET",url,false);
xmlhttp.send();
var strs= new Array();
var obj=eval('(' + xmlhttp.responseText + ')');
strs=obj.result.split("#");
return strs;
}

function getWeatherReport(time)
{
	var xmlhttp;

	
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
var str="/973/WeatherReportProxy?name=nanjing&time="+time;//"http://localhost:8062/WeatherIntergrationComponent/WeatherService/getWeather?name=nanjing&time="+time;
xmlhttp.open("GET",str,false);
xmlhttp.send();
var strs= new Array();
var obj=eval('(' + xmlhttp.responseText + ')');
strs=obj.result.split("#");
return strs;
}

function get_Station_Info(id,flag)
{
	var xmlhttp;

	
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","/973/StationInfoProxy?name="+id+"&time="+flag,false);
xmlhttp.send();
var strs= new Array();

var obj=eval('(' + xmlhttp.responseText + ')');
strs=obj.result.split("#");
return strs;
}

function get_controller(flag)
{
	var xmlhttp;

	
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
var url="/973/ControllerProxy?flag="+flag;//"http://localhost:8099/HydrologyProcessComponent/GetReport/getReport?flag="+flag;
xmlhttp.open("GET",url,false);
xmlhttp.send();
var obj=eval('(' + xmlhttp.responseText + ')');
return obj.result;
}
function settestdiv(flag)
{
	var text=get_controller(flag);
	var buttonHTML=" <input id=\"text\"  type=\"text\"  class=\"txt\" ></input><button onclick=\"sendmessage()\">发送微博</button>";
		var lianjie=" <a href=\"http://weibo.com/p/1005051910206355/weibo?from=page_100505&mod=TAB#place\">微博地址</a>";
	document.getElementById("testdiv").innerHTML=text+buttonHTML+lianjie;
}
function sendmessage()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	var url="/973/SendMessageProxy?content="+encodeURI(document.getElementById("text").value,"UTF-8");//"http://localhost:8099/HydrologyProcessComponent/SendWeibo/sendText?content="+encodeURI(document.getElementById("text").value,"UTF-8")
	xmlhttp.open("GET",url,false);
	xmlhttp.send();
}
