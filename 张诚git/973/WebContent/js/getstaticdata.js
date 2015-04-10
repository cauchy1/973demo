//获取当前时间
function get_measuretime(index)
{
	index=index?index:31;
	var info;
	switch(index)
	{
		case 30:info="2012-08-08 10:00:00";break;
		case 31:info="2012-08-08 10:20:00";break;
		case 32:info="2012-08-08 10:40:00";break;
		case 33:info="2012-08-08 11:00:00";break;
		case 34:info="2012-08-08 11:20:00";break;
		case 35:info="2012-08-08 11:40:00";break;
		case 36:info="2012-08-08 12:00:00";break;
		case 37:info="2012-08-08 12:20:00";break;
		case 38:info="2012-08-08 12:40:00";break;
		case 39:info="2012-08-08 13:00:00";break;
		case 40:info="2012-08-08 13:20:00";break;
		case 41:info="2012-08-08 13:40:00";break;
		case 42:info="2012-08-08 14:00:00";break;
		case 43:info="2012-08-08 14:20:00";break;
		case 44:info="2012-08-08 14:40:00";break;
		case 45:info="2012-08-08 15:00:00";break;
		case 46:info="2012-08-08 15:20:00";break;
		case 47:info="2012-08-08 15:40:00";break;
		case 48:info="2012-08-08 16:00:00";break;
		case 49:info="2012-08-08 16:20:00";break;
		case 50:info="2012-08-08 16:40:00";break;
		case 51:info="2012-08-08 17:00:00";break;
		case 52:info="2012-08-08 17:20:00";break;
		case 53:info="2012-08-08 17:40:00";break;
		case 54:info="2012-08-08 18:00:00";break;
		case 55:info="2012-08-08 18:20:00";break;
		case 56:info="2012-08-08 18:40:00";break;
		case 57:info="2012-08-08 19:00:00";break;
		case 58:info="2012-08-08 19:20:00";break;
		case 59:info="2012-08-08 19:40:00";break;
		case 60:info="2012-08-08 20:00:00";break;
		case 61:info="2012-08-08 20:20:00";break;
		case 62:info="2012-08-08 20:40:00";break;
		case 63:info="2012-08-08 21:00:00";break;
		case 64:info="2012-08-08 21:20:00";break;
		case 65:info="2012-08-08 21:40:00";break;
		case 66:info="2012-08-08 22:00:00";break;
		case 67:info="2012-08-08 22:20:00";break;
		case 68:info="2012-08-08 22:40:00";break;
		case 69:info="2012-08-08 23:00:00";break;
		case 70:info="2012-08-08 23:20:00";break;
		case 71:info="2012-08-08 23:40:00";break;
		case 72:info="2012-08-09 00:00:00";break;
		case 73:info="2012-08-09 00:20:00";break;
	}
	return info;
}


function getInfo(index){
	//此处替换为数据获取代码，由于是DEMO，我使用了静态数据
	index = index?index:0;
	var info = new Array();
	
	switch(index){
	
		case 0:
			info[0] = "晓桥";
			info[1] = "62914200";
			info[2] =infoWindow2;
			info[3]= marker2;
			info[4] = "xiaoqiao";
			info[5]= 9.5;
			break;
		case 1:
			info[0] = "六合";
			info[1] = "62914800";
			info[2] =infoWindow3;
			info[4] = "liuhe";
			break;
		case 2:
			info[0] = "东山";
			info[1] = "62702350";
			info[2] =infoWindow4;
			info[4] = "dongshan";
			info[5]=8.5;
			break;
		case 3:
			info[0] = "陈家桥";
			info[1] = "60406100";
			info[4] = "chenjiaqiao";
			info[2] =infoWindow5;
			break;
		case 4:
			info[0] = "高淳";
			info[1] = "62912800";
			info[4] = "gaochun";
			info[2] =infoWindow6;
			info[5]=10;
			break;
		case 5:
			info[0] = "葛塘";
			info[1] = "62916400";
			info[4] = "getang";
			info[2] = infoWindow7;
			break;
		case 6:
			info[0] = "天生桥";
			info[1] = "62703100";
			info[4] = "tianshengqiao";
			info[2] = infoWindow8;
			info[5]=5.2
			break;
		case 7:
			info[0] = "茅东闸";
			info[1] = "63101001";
			info[4] = "maodongzha";
			info[2] = infoWindow10;
			break;
		case 8:
			info[0] = "方便";
			info[1] = "62703300";
			info[4] = "fangbian";
			info[2] = infoWindow11;
			break;
		case 9:
			info[0] = "大河桥";
			info[1] = "62916600";
			info[4] = "daheqiao";
			info[2] =infoWindow12;
			break;
		case 10:
			info[0] = "河王坝";
			info[1] = "62916700";
			info[4] = "hewangba";
			info[2] =infoWindow13;
			break;
		case 11:
			info[0] = "老鸦坝";
			info[1] = "62703070";
			info[4] = "laoyaba";
			info[2] =infoWindow15;
			info[3]=marker15;
			break;
		case 12:
			info[0] = "姚家";
			info[1] = "62703120";
			info[4] = "yaojia";
			info[2] =infoWindow16;
			info[3] =marker16;
			break;
		case 13:
			info[0] = "中山";
			info[1] = "62703261";
			info[4] = "zhongshan";
			info[2] =infoWindow17;
			break;
	}
	return info;
}

