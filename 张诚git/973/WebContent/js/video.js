
function ShowVideo(iDevId,iChId)
{
    document.getElementById("axVideo").IsReadConfigFiles=false;
    document.getElementById("axVideo").GroupID="administrators";
    document.getElementById("axVideo").LoginUser="admin";
    document.getElementById("axVideo").LoginPasswd="1234";
    document.getElementById("axVideo").ServerIP="218.94.18.3";
    document.getElementById("axVideo").ServerPort=9900;
    document.getElementById("axVideo").SaveFilePath="C:\\VS_Video\\";
    document.getElementById("axVideo").Init();
    document.getElementById("axVideo").SetVideoWndNum(1);
    StartPlay(iDevId,iChId)
}

function FreeVideo()
{
		document.getElementById("axVideo").StopPlay(iDevId,iChId);
    document.getElementById("axVideo").SetVideoWndNum(1);
		document.getElementById("axVideo").Final();
}

function SetViewNum(iNum)
{
    document.getElementById("axVideo").SetVideoWndNum(iNum);
}

function StartPlay(iDevId,iChId)
{
	document.getElementById("axVideo").StartPlay(iDevId,iChId);
}



function onbeforeunload_handler()
{
    document.getElementById("axVideo").Final();
}