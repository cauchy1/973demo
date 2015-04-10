package com.zc.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class SendMessageProxy
 */
public class SendMessageProxy extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SendMessageProxy() {
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
		  //浠ヤ笅涓ゅ彞涓哄彇娑堝湪鏈湴鐨勭紦瀛�
		  response.setHeader("Cache-Control", "no-cache");
		   response.setHeader("Pragma", "no-cache");
		  PrintWriter out = response.getWriter();
		  String content=request.getParameter("content");
		  
		  String sWUrl="http://localhost:8099/HydrologyProcessComponent/SendWeibo/sendText?content="+content;
		  URL url = new URL(sWUrl);
		  url.openConnection().getInputStream();
          
		  try
		    {
		       
		        out.write("ok");//娉ㄦ剰杩欓噷鍚慾sp杈撳嚭鐨勬祦锛屽湪script涓殑鎴幏鏂规硶
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
