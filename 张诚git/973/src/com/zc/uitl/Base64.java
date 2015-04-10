package com.zc.uitl;
public class Base64 {
	public static Base64 base64=new Base64();
	public static String getBASE64(String s) { 
		if (s == null) return null; 
		return (new sun.misc.BASE64Encoder()).encode( s.getBytes() ); 
		} 
	}  

