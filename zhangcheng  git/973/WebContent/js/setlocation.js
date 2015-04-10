function set_location(x,y,z,marker,info)
{
	var my_baidumap=this;
	var point = new BMap.Point(x,y);
	my_baidumap.map.centerAndZoom(point, z); 
	if(info)
		marker.openInfoWindow(info);
}