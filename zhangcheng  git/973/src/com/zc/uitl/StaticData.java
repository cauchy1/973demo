package com.zc.uitl;

public final class StaticData {
	static StaticData s=new StaticData();
	private StaticData()
	{
		
	}
	public static StaticData getStaticData()
	{
		return s;
	}
	public String getTime(int index)
	{
			index=index!=0?index:31;
			String info = null;
			switch(index)
			{
				case 30:info="2012-08-08%2010:00:00";break;
				case 31:info="2012-08-08%2010:20:00";break;
				case 32:info="2012-08-08%2010:40:00";break;
				case 33:info="2012-08-08%2011:00:00";break;
				case 34:info="2012-08-08%2011:20:00";break;
				case 35:info="2012-08-08%2011:40:00";break;
				case 36:info="2012-08-08%2012:00:00";break;
				case 37:info="2012-08-08%2012:20:00";break;
				case 38:info="2012-08-08%2012:40:00";break;
				case 39:info="2012-08-08%2013:00:00";break;
				case 40:info="2012-08-08%2013:20:00";break;
				case 41:info="2012-08-08%2013:40:00";break;
				case 42:info="2012-08-08%2014:00:00";break;
				case 43:info="2012-08-08%2014:20:00";break;
				case 44:info="2012-08-08%2014:40:00";break;
				case 45:info="2012-08-08%2015:00:00";break;
				case 46:info="2012-08-08%2015:20:00";break;
				case 47:info="2012-08-08%2015:40:00";break;
				case 48:info="2012-08-08%2016:00:00";break;
				case 49:info="2012-08-08%2016:20:00";break;
				case 50:info="2012-08-08%2016:40:00";break;
				case 51:info="2012-08-08%2017:00:00";break;
				case 52:info="2012-08-08%2017:20:00";break;
				case 53:info="2012-08-08%2017:40:00";break;
				case 54:info="2012-08-08%2018:00:00";break;
				case 55:info="2012-08-08%2018:20:00";break;
				case 56:info="2012-08-08%2018:40:00";break;
				case 57:info="2012-08-08%2019:00:00";break;
				case 58:info="2012-08-08%2019:20:00";break;
				case 59:info="2012-08-08%2019:40:00";break;
				case 60:info="2012-08-08%2020:00:00";break;
				case 61:info="2012-08-08%2020:20:00";break;
				case 62:info="2012-08-08%2020:40:00";break;
				case 63:info="2012-08-08%2021:00:00";break;
				case 64:info="2012-08-08%2021:20:00";break;
				case 65:info="2012-08-08%2021:40:00";break;
				case 66:info="2012-08-08%2022:00:00";break;
				case 67:info="2012-08-08%2022:20:00";break;
				case 68:info="2012-08-08%2022:40:00";break;
				case 69:info="2012-08-08%2023:00:00";break;
				case 70:info="2012-08-08%2023:20:00";break;
				case 71:info="2012-08-08%2023:40:00";break;
				case 72:info="2012-08-09%2000:00:00";break;
				case 73:info="2012-08-09%2000:20:00";break;
			}
			return info;
		
	}

}
