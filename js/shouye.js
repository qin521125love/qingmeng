window.onload=function()
{
		
	var oBox=document.getElementById('tell');
	
	oBox.onmouseover=function()
	{
		sport(oBox,0);	
		
	};
	oBox.onmouseout=function()
	{
		sport(oBox,-140);	
	};
};
var timer=null;
function sport(obj,endpoint)
{
	clearInterval(timer);
	
	timer=setInterval(function(){
		var speed;
	if(endpoint-obj.offsetLeft>0)
	{
		speed=10;
	}
	else
	{
		speed=-10;	
	}
		if(obj.offsetLeft==endpoint)
		{
			clearInterval(timer);
		}
		else
		{
			obj.style.left=obj.offsetLeft+speed+'px';	
		}
		
	},30);
	
}
