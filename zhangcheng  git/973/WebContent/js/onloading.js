function start(){
	   $(document).ready(function(){
		      var bheight=document.body.clientHeight;
		      $("#lay").click(function(){
		   $("#brg").css("display","block");
		   $("#showdiv").css("display","block");
		   });
		   $("#close").click(function(){
		      $("#brg").css("display","none");
		   $("#showdiv").css("display","none");
		   });
		   });
	   
	 //以下为全局变量

	         //对pushlet的初始化，触发web.xml中的servlet。
	         PL._init(); 
	         //这里的监听的主题，必须在sources.properties中配置的对象中声明这个主题。
	         //sources.properties配置着事件源（EventSources），在服务器启动时会自动激活。
	         //可以通过服务器的启动记录查看得到。可以将这个文件放到WEB-INF目录下面或者classess目录下面都可以。
	         PL.joinListen('/linjiqin/hw'); 


	         map = new BMap.Map("allmap");
	         point = new BMap.Point(118.757364,32.104793);
	         map.centerAndZoom(point, 10);

	         shuiku_icon=new BMap.Icon("images/shuiwen.jpg", new BMap.Size(30,30));
	         shipin_icon=new BMap.Icon("images/yuliang123.PNG", new BMap.Size(30,30));
	        hedao_icon=new BMap.Icon("images/hedao.jpg", new BMap.Size(30,30));
	         sx_icon=new BMap.Icon("images/shaoxing.jpg", new BMap.Size(100,30));
	         haz_icon=new BMap.Icon("images/hangzhou.jpg", new BMap.Size(100,30));
	         hz_icon=new BMap.Icon("images/huzhou.jpg", new BMap.Size(100,30));
	         wx_icon=new BMap.Icon("images/wuxi.jpg", new BMap.Size(100,30));
	         cz_icon=new BMap.Icon("images/changzhou.jpg", new BMap.Size(100,30));
	         nb_icon=new BMap.Icon("images/ningbo.jpg", new BMap.Size(100,30));

	         stringxq="";//"	<div onunload=\"onbeforeunload_handler()\"><form runat=\"server\"><div><object classid=\"clsid:04F60EAE-29E7-4617-A2BC-D0D44CCF8CF8\" codebase=\"VS_Video3.0\VS_Video.ocx\"  width=\"400\" height=\"300\" id=\"axVideo\" name=\"axVideo\"> </object><br />"+"<input type=\"button\" id=\"Link\" value=\"连接\" onclick=\"ShowVideo()\" style=\"width:auto; height:auto\" />"+"<input type=\"button\" id=\"StartVideo\" value=\"播放\" onclick=\"StartPlay(8003494,1)\" style=\"width:auto; height:auto\" />"+"<br /> </div> </form></div>";
	         stringyj="";//"	<div onunload=\"onbeforeunload_handler()\"><form runat=\"server\"><div><object classid=\"clsid:04F60EAE-29E7-4617-A2BC-D0D44CCF8CF8\" codebase=\"VS_Video3.0\VS_Video.ocx\"  width=\"400\" height=\"300\" id=\"axVideo\" name=\"axVideo\"> </object><br />"+"<input type=\"button\" id=\"Link\" value=\"连接\" onclick=\"ShowVideo()\" style=\"width:auto; height:auto\" />"+"<input type=\"button\" id=\"StartVideo\" value=\"播放\" onclick=\"StartPlay(8003525,1)\" style=\"width:auto; height:auto\" />"+"<br /> </div> </form></div>";
	         stringlyb="";//"<div onunload=\"onbeforeunload_handler()\"><form runat=\"server\"><div><object classid=\"clsid:04F60EAE-29E7-4617-A2BC-D0D44CCF8CF8\" codebase=\"VS_Video3.0\VS_Video.ocx\"  width=\"400\" height=\"300\" id=\"axVideo\" name=\"axVideo\"> </object><br />"+"<input type=\"button\" id=\"Link\" value=\"连接\" onclick=\"ShowVideo()\" style=\"width:auto; height:auto\" />"+"<input type=\"button\" id=\"StartVideo\" value=\"播放\" onclick=\"StartPlay(8003500,1)\" style=\"width:auto; height:auto\" />" +"<br /> </div> </form></div>";
	                 
	         marker2 = new BMap.Marker(new BMap.Point(118.324850,32.092050));  
	         map.addOverlay(marker2);             

	        infoWindow2 = new BMap.InfoWindow("<h2>晓桥</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 警戒水位</td><td>7.85m</td></tr><tr><td> 水位</td><td>6.07m</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>"+stringxq);
	         marker2.addEventListener("click", function(){this.openInfoWindow(infoWindow2);});

	        marker3 = new BMap.Marker(new BMap.Point(118.502400,32.202500));  
	         map.addOverlay(marker3);             

	         infoWindow3 = new BMap.InfoWindow("<h2>六合</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 警戒水位</td><td>9.50m</td></tr><tr><td> 水位</td><td>6.99m</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker3.addEventListener("click", function(){this.openInfoWindow(infoWindow3);});

	        marker4 = new BMap.Marker(new BMap.Point(118.491300,31.571000));  
	         map.addOverlay(marker4);             

	          infoWindow4 = new BMap.InfoWindow("<h2>东山</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 警戒水位</td><td>8.50m</td></tr><tr><td> 水位</td><td>7.03m</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker4.addEventListener("click", function(){this.openInfoWindow(infoWindow4);});

	        marker5 = new BMap.Marker(new BMap.Point(118.570600,31.331600));  
	         map.addOverlay(marker5);             

	         infoWindow5 = new BMap.InfoWindow("<h2>陈家桥</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 警戒水位</td><td>10.00m</td></tr><tr><td> 水位</td><td>6.06m</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker5.addEventListener("click", function(){this.openInfoWindow(infoWindow5);});

	        marker6 = new BMap.Marker(new BMap.Point(118.514200,31.191900));  
	         map.addOverlay(marker6);             

	         infoWindow6 = new BMap.InfoWindow("<h2>高淳</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 警戒水位</td><td>10.00m</td></tr><tr><td> 水位</td><td>9.7m</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker6.addEventListener("click", function(){this.openInfoWindow(infoWindow6);});


	         marker7 = new BMap.Marker(new BMap.Point(118.441600,32.152400));  
	         map.addOverlay(marker7);     
	         infoWindow7 = new BMap.InfoWindow("<h2>葛塘</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>5.03m</td><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker7.addEventListener("click", function(){this.openInfoWindow(infoWindow7);});

	         marker8 = new BMap.Marker(new BMap.Point(118.583800,31.381900));  
	         map.addOverlay(marker8);     
	         infoWindow8 = new BMap.InfoWindow("<h2>天生桥</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>27.30m</td><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker8.addEventListener("click", function(){this.openInfoWindow(infoWindow8);});

	         marker10 = new BMap.Marker(new BMap.Point(119.060700,31.183600));  
	         map.addOverlay(marker10);     
	         infoWindow10 = new BMap.InfoWindow("<h2>茅东闸</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>8.59m</td><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker10.addEventListener("click", function(){this.openInfoWindow(infoWindow10);});




	         marker11 = new BMap.Marker(new BMap.Point(119.071700,31.422900));  
	         map.addOverlay(marker11);     
	         infoWindow11 = new BMap.InfoWindow("<h2>方便水库</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>25.89m</td></tr><tr><td> 库容量</td><td>2063万方</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker11.addEventListener("click", function(){this.openInfoWindow(infoWindow11);});


	         marker12 = new BMap.Marker(new BMap.Point(119.071700,31.422900));  
	         map.addOverlay(marker12);     
	         infoWindow12 = new BMap.InfoWindow("<h2>大河桥水库</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>21.34m</td></tr><tr><td> 库容量</td><td>661万方</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker12.addEventListener("click", function(){this.openInfoWindow(infoWindow12);});

	         marker13 = new BMap.Marker(new BMap.Point(118.500600,31.323900));  
	         map.addOverlay(marker13);     
	         infoWindow13 = new BMap.InfoWindow("<h2>河王坝水库</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>34.87m</td></tr><tr><td> 库容量</td><td>1102万方</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker13.addEventListener("click", function(){this.openInfoWindow(infoWindow13);});


	        marker15 = new BMap.Marker(new BMap.Point(119.110500,31.360700));  
	         map.addOverlay(marker15);     
	         infoWindow15 = new BMap.InfoWindow("<h2>老鸦坝水库</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>34.64m</td></tr><tr><td> 库容量</td><td>515万方</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>"+stringlyb);
	         marker15.addEventListener("click", function(){this.openInfoWindow(infoWindow15);});

	         marker16 = new BMap.Marker(new BMap.Point(119.062100,31.333200));  
	         map.addOverlay(marker16);     
	         infoWindow16 = new BMap.InfoWindow("<h2>姚家水库</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>20.49m</td></tr><tr><td> 库容量</td><td>578万方</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>"+stringyj);
	         marker16.addEventListener("click", function(){this.openInfoWindow(infoWindow16);});


	          marker17 = new BMap.Marker(new BMap.Point(119.034600,31.384100));  
	         map.addOverlay(marker17);     
	         infoWindow17 = new BMap.InfoWindow("<h2>中山水库</h2> <table width=&quot240&quot border=&quot1&quot><tr><td> 水位</td><td>23.82m</td></tr><tr><td> 库容量</td><td>726万方</td></tr><tr><td> 时间</td><td>08/07 15:00</td></tr></table>");
	         marker17.addEventListener("click", function(){this.openInfoWindow(infoWindow17);});

	        haz_marker=new BMap.Marker(new BMap.Point(120.161882,30.272408));
	         haz_marker.setIcon(haz_icon);
	         map.addOverlay(haz_marker);
	         haz_marker.hide();

	          hz_marker=new BMap.Marker(new BMap.Point(120.102091,30.873375));
	         hz_marker.setIcon(hz_icon);
	         map.addOverlay(hz_marker);
	         hz_marker.hide();


	        cz_marker=new BMap.Marker(new BMap.Point(119.977909,31.808971));
	         cz_marker.setIcon(cz_icon);
	         map.addOverlay(cz_marker);
	         cz_marker.hide();

	         nb_marker=new BMap.Marker(new BMap.Point(121.560077,29.872356));
	         nb_marker.setIcon(nb_icon);
	         map.addOverlay(nb_marker);
	         nb_marker.hide();

	         wx_marker=new BMap.Marker(new BMap.Point(120.341256,31.553309));
	         wx_marker.setIcon(wx_icon);
	         map.addOverlay(wx_marker);
	         wx_marker.hide();

	         sx_marker=new BMap.Marker(new BMap.Point(120.589619,29.988539));
	         sx_marker.setIcon(sx_icon);
	         map.addOverlay(sx_marker);
	         sx_marker.hide();

	         map.addControl(new BMap.NavigationControl());
	         map.addControl(new BMap.ScaleControl());  
	         map.addControl(new BMap.OverviewMapControl({isOpen:true}));  
	         map.enableScrollWheelZoom(); 

	         marker2.setIcon(hedao_icon);
	         marker3.setIcon(hedao_icon);
	         marker4.setIcon(hedao_icon);
	         marker5.setIcon(hedao_icon);
	         marker6.setIcon(hedao_icon);
	         marker7.setIcon(hedao_icon);
	         marker8.setIcon(hedao_icon);
	         marker10.setIcon(hedao_icon);
	         marker11.setIcon(shuiku_icon);
	         marker12.setIcon(shuiku_icon);
	         marker13.setIcon(shuiku_icon);
	         marker15.setIcon(shuiku_icon);
	         marker16.setIcon(shuiku_icon);
	         marker17.setIcon(shuiku_icon);
	         $("#cli_on").click(function(){
	        	 $("#all_table").toggle(500);
	         });
	         $("#showtables").click(function(){
	        	 $("#tables").toggle(500);
	         });
	         
	         $("#right_click_on").click(function(){
	        	 $("#all_right_div").toggle(500);
	         });
	         

	         $("#right_show_time").click(function(){
	        	 $("#right_time_content").toggle(500);
	         });

	         $("#right_show_tuli").click(function(){
	        	 $("#right_tuli_content").toggle(500);
	         });
	         
	         $("#right_running").click(function(){
	        	 if(running)
	        		 {
	        		 running=false;
	        		 document.getElementById("running_text").innerHTML="运行";
	        		 }
	        	 else
	        	 {
	        		 running=true;
	        		 document.getElementById("running_text").innerHTML="暂停";
	        	 }
	         });

        	 $("#right_tuli_content").toggle();
        	 $("#right_time_content").toggle();
        	 $("#tables").toggle();
        	 $("#table").toggle();
        	 $("#all_table").toggle();
        	 $("#all_right_div").toggle();
	         
	         $("#nj").click(function(){
	        	 $("#table").toggle(500);
	         });

	         


}
