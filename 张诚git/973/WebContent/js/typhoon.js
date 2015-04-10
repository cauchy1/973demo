
function getNowtime(index){
		var hour = 10+((index-31)-((index-31)%3))/3;
		var m = (index-1)%3*2;
		var time = "2012-08-08 "+hour+":"+m+"0";
		return time;
	}
	
function drawsector(index){
	var my_baidumap = this;
	var info = my_baidumap.getTyphoo(index);
	var info1;	
	if(index<9&&index>0) info1 = my_baidumap.getTyphoo(index-0.5);
	else info1 = my_baidumap.getTyphoo(index-1);
	var distance=Math.sqrt((info[1]-info1[1])*(info[1]-info1[1])+(info[2]-info1[2])*(info[2]-info1[2]));
	var polyline = new BMap.Polyline([
	  new BMap.Point(info1[1], info1[2]),
	  new BMap.Point(info[1], info[2])
	], {strokeColor:"red", strokeWeight:2, strokeOpacity:0.5});
	map.addOverlay(polyline);
	polygon = new BMap.Circle(
	new BMap.Point(info[1],info[2]),200000, {strokeColor:"red", strokeWeight:4, strokeOpacity:0.3});
	polygon.setFillOpacity(0.001);
	my_baidumap.map.addOverlay(polygon);

}

function setFlag(i){
	flag = i;
}
function showtyphoo(){	

	if(worning == 0)
	{
		var my_baidumap = this;
		my_baidumap.settestdiv(0);
		my_baidumap.map.setZoom(8);
		var info= new Array();
		info = getTyphoo(0);
		var point = new BMap.Point(info[1],info[2]);
		my_baidumap.insertMarker(point,2,info[0],info[3]);
		my_baidumap.map.panTo(point); 
		my_baidumap.drawsector(0);
		worning=1;
		//my_baidumap.insertWindow(info[0],info[3],point);
	
	}
}		
function get_distance(x1,x2,y1,y2){
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
function check_city(index){
	haz_marker.hide();
	document.getElementById("haz").className="changecolor"+6;
	hz_marker.hide();
	document.getElementById("hz").className="changecolor"+6;
	cz_marker.hide();
	document.getElementById("cz").className="changecolor"+6;
	nb_marker.hide();
	document.getElementById("nb").className="changecolor"+6;
	wx_marker.hide();
	document.getElementById("wx").className="changecolor"+6;
	sx_marker.hide();
	document.getElementById("sx").className="changecolor"+6;
	document.getElementById("nj").className="changecolor"+6;
	var my_baidumap = this;
	var infomation = my_baidumap.getTyphoo(index);
	var di=get_distance(infomation[1],120.161882,infomation[2],30.272408);
	if(di<2){
		haz_marker.show();
		if(di<1)
			document.getElementById("haz").className="changecolor"+0;
			else if(di<1.5)
				document.getElementById("haz").className="changecolor"+1;
			else if(di<2)
				document.getElementById("haz").className="changecolor"+2;
		var ctime=infomation[0];
		var yl=getcityly("hangzhou",ctime);
		var haz_infoWindow = new BMap.InfoWindow("<h2>当前雨量:  "+yl+"</h2>");
		haz_marker.addEventListener("click", function(){this.openInfoWindow(haz_infoWindow);});
	}
	
	di=get_distance(infomation[1],120.102091,infomation[2],30.873375);
	if(di<2){
		hz_marker.show();
		if(di<1)
			document.getElementById("hz").className="changecolor"+0;
			else if(di<1.5)
				document.getElementById("hz").className="changecolor"+1;
			else if(di<2)
				document.getElementById("hz").className="changecolor"+2;
		var ctime=infomation[0];
		var yl=getcityly("huzhou",ctime);
		var hz_infoWindow = new BMap.InfoWindow("<h2>当前雨量:  "+yl+"</h2>");
		hz_marker.addEventListener("click", function(){this.openInfoWindow(hz_infoWindow);});
	}
	
	di=get_distance(infomation[1],119.977909,infomation[2],31.808971);
	if(di<2){
		cz_marker.show();
		if(di<1)
			document.getElementById("cz").className="changecolor"+0;
			else if(di<1.5)
				document.getElementById("cz").className="changecolor"+1;
			else if(di<2)
				document.getElementById("cz").className="changecolor"+2;
		var yl=getcityly("changzhou",infomation[0]);
		var ctime=infomation[0];
		var cz_infoWindow = new BMap.InfoWindow("<h2>当前雨量:  "+yl+"</h2>");
		cz_marker.addEventListener("click", function(){this.openInfoWindow(cz_infoWindow);});
	}

	di=get_distance(infomation[1],121.560077,infomation[2],29.872356);
	if(di<2){
		nb_marker.show();
		if(di<1)
			{document.getElementById("nb").className="changecolor"+0;}
			else if(di<1.5)
				{document.getElementById("nb").className="changecolor"+1;}
			else if(di<2)
				{document.getElementById("nb").className="changecolor"+2;}
		var ctime=infomation[0];
		var yl=getcityly("ningbo",ctime);
		var nb_infoWindow = new BMap.InfoWindow("<h2>当前雨量:  "+yl+"</h2>");
		nb_marker.addEventListener("click", function(){this.openInfoWindow(nb_infoWindow);});
	}
	
	di=get_distance(infomation[1],120.341256,infomation[2],31.553309);
	if(di<2){
		wx_marker.show();
		if(di<1)
			document.getElementById("wx").className="changecolor"+0;
			else if(di<1.5)
				document.getElementById("wx").className="changecolor"+1;
			else if(di<2)
				document.getElementById("wx").className="changecolor"+2;
		var ctime=infomation[0];
		var yl=getcityly("wuxi",ctime);
		var wx_infoWindow = new BMap.InfoWindow("<h2>当前雨量:  "+yl+"</h2>");
		wx_marker.addEventListener("click", function(){this.openInfoWindow(wx_infoWindow);});
	}
		
	di=get_distance(infomation[1],120.589619,infomation[2],29.988539);
	if(di<2){
		sx_marker.show();
		if(di<1)
		document.getElementById("sx").className="changecolor"+0;
		else if(di<1.5)
			document.getElementById("sx").className="changecolor"+1;
		else if(di<2)
			document.getElementById("sx").className="changecolor"+2;
		var ctime=infomation[0];
		var yl=getcityly("shaoxing",ctime);
		var sx_infoWindow = new BMap.InfoWindow("<h2>当前雨量:  "+yl+"</h2>");
		sx_marker.addEventListener("click", function(){this.openInfoWindow(sx_infoWindow);});
		
	}

}

function insertMarker(point) {
	var my_baidumap = this;
	var marker;
	var type = arguments[1]? arguments[1]:0;
	switch(type){
		case 0:
			marker = new BMap.Marker(point);    
			break;
		case 1:
			var myIcon = new BMap.Icon("images/redpoint.jpg", new BMap.Size(15,15));
			marker = new BMap.Marker(point,{icon:myIcon});
			break;
		case 2:
			var myIcon = new BMap.Icon("images/bluepoint.jpg", new BMap.Size(15,15));
			marker = new BMap.Marker(point,{icon:myIcon});
			break;
		case 3:
			var myIcon = new BMap.Icon("images/yellowpoint.jpg", new BMap.Size(15,15));
			marker = new BMap.Marker(point,{icon:myIcon});
			break;
	}
	 my_baidumap.map.addOverlay(marker); 

	var mes = arguments[2]? 1:0;

	if(mes == 1){
		var infoWindow2 = my_baidumap.generateWindow(arguments[2],arguments[3]);
		marker.addEventListener("click", function(){this.openInfoWindow(infoWindow2);});
		//alert("2");
		marker.openInfoWindow(infoWindow2);

	}
}
function generateWindow(title,mes){
	var my_baidumap = this;
	var opts = {
	  width : 250,     // 信息窗口宽度
	  height: 120,     // 信息窗口高度
	  title : title,  // 信息窗口标题
	}
	var infoWindow = new BMap.InfoWindow(mes, opts);  // 创建信息窗口对象
	
	return infoWindow;
}
