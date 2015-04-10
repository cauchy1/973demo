function get_weather_report(time)
{
	var info=new Array();
	var temp= new Array();
	temp=getWeatherReport(time);
	info[0]=temp[2]+"  "+temp[3]+"度  "+temp[4];
	return info;
}
function getstationinfo(id,flag)
{
	var info=new Array();
	var temp= new Array();
	temp=get_Station_Info(id,flag);
	info[0]="所属河流:"+temp[0]+" , "+temp[1];
	if(temp[3])
		{
		info[1]=temp[3];
		}
	return info;
}

function getTyphoo(index){
	var info= new Array();
	var temp= new Array();
	temp=get_Typhoo(index);
	temp[1]=temp[1].substring(0,19);
	info[0]=temp[1];
	info[1]=temp[2];
	info[2]=temp[3];
	info[3]="气压:"+temp[4]+"<br />最大风速："+temp[5]+"<br />七级风半径："+temp[6]+"<br />十级风半径："+temp[7];
	info[4]=temp[8];
	switch(temp[8])
	{
	case "blue":info[5]="蓝色台风警报";break;
	case "red" :info[5]="红色台风警报";break;
	case "yellow":info[5]="黄色台风警报";break;
	}
	return info;
}
