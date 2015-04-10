
function timepast()//todo
{if(worning != 0){
	
	var my_baidumap=this;
	if(minute >= 31&&minute < 72){
		//alert(minute);			
		//lastAllInfo=upDateAllInfo(minute-1);
		//allInfo=upDateAllInfo(minute);
		for(var i = 0;i < 14;i++){
			var info1 = my_baidumap.getInfo(i);
			//var allStationInfo=this.getAllInfo(info1[4]);
			//var allLastStationInfo=this.getLastAllInfo(info1[4]);
			var info2,info22,info3,info33;
			//if(allStationInfo==null)
				info2=0;
			//else 
				info2 = my_baidumap.getSW(info1[4],minute);//allStationInfo.pondage;
			//if(allLastStationInfo==null)
				info22=0;
			//else 
				//info22 = allLastStationInfo.pondage-info2;
				info22 = my_baidumap.getSW(info1[4],minute-1)-info2;
			
			//if(allStationInfo==null)
				info3=0;
			//else 
				//info3 = allStationInfo.stationRf;
				info3 =my_baidumap.getYL(info1[4],minute);
			
			//if(allLastStationInfo==null)
				info33=0;
			//else 
				//info33 = allLastStationInfo.stationRf;
				info33=my_baidumap.getYL(info1[4],minute-1)-info3;
			var sinfo=new Array();
			//if(allStationInfo)
			//sinfo=allStationInfo.stationInfo.split("#");
			sinfo=my_baidumap.getstationinfo(info1[1],minute);
			
			//new
			
			//new
			var jingjieshuiwei;
			if(info1[5])
			jingjieshuiwei = info1[5];
			else jingjieshuiwei = 9999;
			document.getElementById("time1").innerHTML=get_measuretime(minute);
			if(info2 !=0 &&info22 > 0)
			{
				document.getElementById((info1[1]+"sw")).innerHTML=info2+"m<img src="+'"'+"images/down.jpg"+'"'+">";
			}
			else if(info2!=0&&info22<0)
			{				
				document.getElementById((info1[1]+"sw")).innerHTML=info2+"m<img src="+'"'+"images/up.jpg"+'"'+">";
			}
			else if(info2!=0)
			{
						document.getElementById((info1[1]+"sw")).innerHTML=info2+"m";

			}			
			if(info3!=0&&info33>0)
			{
				document.getElementById((info1[1]+"yl")).innerHTML=info3+"mm<img src="+'"'+"images/down.jpg"+'"'+">";
			}
			else if(info3!=0&&info33<0)
			{				
				document.getElementById((info1[1]+"yl")).innerHTML=info3+"mm<img src="+'"'+"images/up.jpg"+'"'+">";
			}
			else if(info3!=0)
			{
						document.getElementById((info1[1]+"yl")).innerHTML=info3+"mm";

			}
			if(info2!=0&&info3!=0)
			{
				if(!sinfo[1])
				info1[2].setContent("<h2>"+info1[0]+"</h2> <table width=&quot240&quot border=&quot1&quot><tr><td>水位</td><td>"+info2+"m</td></tr><tr><td>雨量</td><td>"+info3+"mm</td></tr></table>"+sinfo[0]);
				else 		
					{
					info1[2].setContent("<h2>"+info1[0]+"</h2> <table width=&quot240&quot border=&quot1&quot><tr><td>水位</td><td>"+info2+"m</td></tr><tr><td>雨量</td><td>"+info3+"mm</td></tr></table>"+sinfo[1]+sinfo[0]);
					info1[3].setIcon(shipin_icon);
					}
				info1[2].redraw();
			}
				document.getElementById(info1[1]+"yl").className="changecolor"+6;
			if(info3>100)
				document.getElementById(info1[1]+"yl").className="changecolor"+0;
				document.getElementById(info1[1]+"sw").className="changecolor"+6;
			if(info2>jingjieshuiwei)
				document.getElementById(info1[1]+"sw").className="changecolor"+0;
			
		}
		minute++;
		if(minute == 70){		
			time = 17;
			flag = 1;
			miniute=0;
		}
		
	}
	else{
		if (time < 20)
		{
			polygon.hide();
			var info=my_baidumap.getTyphoo(time);
			var point = new BMap.Point(info[1],info[2]);
			if(time<11||time>17)
			{
				my_baidumap.map.panTo(point);
				my_baidumap.drawsector(time);
			}
			var wr=get_weather_report(info[0]);
			set_weather_report(wr[0]);
            setTyphoonWorn(info[5],info[4]);
    		my_baidumap.settestdiv(time);
            var pointtype=1;
            switch(info[4])
            {  
            case "red":pointtype=1;break;
            case "blue":pointtype=2;break;
            case "yellow":pointtype=3;break;
            
            }
			my_baidumap.insertMarker(point,pointtype,info[0],info[3]);
			document.getElementById("time1").innerHTML=info[0];
			check_city(time);
			if(time < 9)
			time=time+0.5;
			else time=time+1;
			if(time == 20)
			{
				time=0;
			}
		
		}
		if(time >= 10&&time <= 17)
		{
			document.getElementById("nj").className="changecolor"+0;
			if(flag == 0&&time == 11){
				minute =31;
			}
		}
	
		if(time == 10)
		{	
			var point = new BMap.Point(118.757364,32.104793);
			circle = new BMap.Circle(point,130000);
			circle.setFillOpacity(0.3);
			my_baidumap.map.addOverlay(circle);
			circle.show();
		}
		if(time == 11){
		var point = new BMap.Point(118.857364,31.904793);
		my_baidumap.map.centerAndZoom(point, 10); 
			polygon.hide();
		}
		if(time == 19){
			circle.hide();
		}
	}
	
	}
}

function set_weather_report(wr)
{
	document.getElementById("weather_report").innerHTML="南京:  "+wr;
}