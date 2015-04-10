package com.zc.action;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.zc.uitl.Base64;

/**
 * Servlet implementation class CityRainFallProxy
 */
public class CityRainFallProxy extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CityRainFallProxy() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		System.out.println("get");

		response.setContentType("text/xml; charset=UTF-8");
		  //以下两句为取消在本地的缓存
		  response.setHeader("Cache-Control", "no-cache");
		   response.setHeader("Pragma", "no-cache");
		  PrintWriter out = response.getWriter();
		  String cityname=request.getParameter("name");
		  String citytime=request.getParameter("time");

		  String p=Base64.base64.getBASE64("[\""+cityname+"\",\""+citytime+"\"]");
		  String sWUrl="http://localhost:8090/HydrologyIntergrationComponent/IgCityRainfallService?method=getCityRf&params="+p+"&id=1";
				  URL url = new URL(sWUrl);
		  InputStream in = url.openConnection().getInputStream();
		  BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in));  
		  String sCurrentLine = "";  
          String sTotalString = "";  
          while ((sCurrentLine = bufferedReader.readLine()) != null) {  
              sTotalString += sCurrentLine;  
          }
		  try
		    {
		        //sb.append("<type_name>"+action+"</type_name>");
		       
		        out.write(sTotalString);//注意这里向jsp输出的流，在script中的截获方法
		        out.close();
		    }
		    catch(Exception ex)
		    {
		         
		    }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
