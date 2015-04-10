function getAllData(index){
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
  var websrc="http://localhost:8080/973/DataProxy?time="+m;
xmlhttp.open("GET",websrc,false);
xmlhttp.send();
if(xmlhttp.responseText)
   return xmlhttp.responseText;
   else return 0;
	
}