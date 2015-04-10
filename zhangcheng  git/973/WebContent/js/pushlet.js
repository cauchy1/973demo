
	         //对pushlet的初始化，触发web.xml中的servlet。
	         PL._init(); 
	         //这里的监听的主题，必须在sources.properties中配置的对象中声明这个主题。
	         //sources.properties配置着事件源（EventSources），在服务器启动时会自动激活。
	         //可以通过服务器的启动记录查看得到。可以将这个文件放到WEB-INF目录下面或者classess目录下面都可以。
	         PL.joinListen('/linjiqin/hw'); 
	         function setTyphoonWorn(message,color)
	         {

	             document.getElementById("typhoon").innerHTML=message;
	             document.getElementById("typhoon").style.color=color;
	         }
	         function onData( event ) { 
	        	 if(running)
	        		 {
						 running=false;
	        		 	if(worning == 0)
	        		 	{
	        			 setTyphoonWorn("蓝色台风警报","blue");
	        			 this.showtyphoo();
	             
	        		 	}
	        		 else {
	        			 //alert( "情报更新" );
	        			 timepast();
	                 	}
						running=true;
	        		 }
	           
	         } 
