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

import com.zc.uitl.StaticData;

public class DataProxy  extends HttpServlet{
    public DataProxy() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("get");

		response.setContentType("text/xml; charset=UTF-8");
		  //以下两句为取消在本地的缓存
		  response.setHeader("Cache-Control", "no-cache");
		  response.setHeader("Pragma", "no-cache");
		  PrintWriter out = response.getWriter();
		  String index=request.getParameter("index");
		  
		  StaticData s=StaticData.getStaticData();
		  Long timeStart=System.currentTimeMillis();
		  for(int i=0;i<14;i++)
		  {
			  
		  String sWUrl="http://localhost:8090/HydrologyIntergrationComponent/IgPondageService/getPondage?name=xiaoqiao&time="+s.getTime(Integer.parseInt(index));//"http://114.212.81.149:8090/HydrologyIntergrationComponent/IgPondageService/getPondage?name=xiaoqiao&time=2";
		  URL url = new URL(sWUrl);
		  InputStream in = url.openConnection().getInputStream();
		  BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in));  
		  String sCurrentLine = "";
          String sTotalString = "";
          while ((sCurrentLine = bufferedReader.readLine()) != null) {  
              sTotalString += sCurrentLine;  
          }  
          //System.out.println(sTotalString);
		  }
		  
		  Long timeEnd=System.currentTimeMillis();
		  System.out.println(timeEnd-timeStart);
		  
         	  try
		    {
		      StringBuffer sb = new StringBuffer();
		       Object sTotalString = null;
			sb.append(sTotalString);//添加信息
		        //sb.append("<type_name>"+action+"</type_name>");
		        out.write(sb.toString());//注意这里向jsp输出的流，在script中的截获方法
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

		System.out.println("post");
		response.setContentType("text/xml; charset=UTF-8");
		  //以下两句为取消在本地的缓存
		  response.setHeader("Cache-Control", "no-cache");
		  response.setHeader("Pragma", "no-cache");
		  PrintWriter out = response.getWriter();
		  String action = request.getParameter("action");
		  try
		    {
		      StringBuffer sb = new StringBuffer();
		        //sb.append("<type_name>"+action+"</type_name>");
		        out.write(sb.toString());//注意这里向jsp输出的流，在script中的截获方法
		        out.close();
		    }
		    catch(Exception ex)
		    {
		         
		    }
		  
		 }
	}

