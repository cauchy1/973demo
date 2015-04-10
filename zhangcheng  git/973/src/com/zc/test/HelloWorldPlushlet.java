package com.zc.test;

import nl.justobjects.pushlet.core.Event;
import nl.justobjects.pushlet.core.EventPullSource;

public class HelloWorldPlushlet extends EventPullSource {
//if you have any problem, you can connect me by e-mail:cifer.zc@gmail.com
    /**
     * 璁剧疆浼戠湢鏃堕棿
     */
    @Override
    protected long getSleepTime() {
        return 2000;
    }

    /**
     * 鍒涘缓浜嬩欢
     * 
     * 涓氬姟閮ㄥ垎鍐欏湪pullEvent()鏂规硶涓紝杩欎釜鏂规硶浼氳瀹氭椂璋冪敤銆�
     */
    @Override
    protected Event pullEvent() {
    	//System.out.println("typhoon Info sent");
        Event event = Event.createDataEvent("/linjiqin/hw");
        event.setField("hw", "timepast");
        return event;
    }

}