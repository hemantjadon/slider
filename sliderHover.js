//Hover Arrows
var mouseOnButtons=false;
var hover=function(){
	var buttons=$("div.sliderViewPort div.sliderButton");
	var flag1=0;
	var time=0;
	var interval;
	var timer={
		startTimer:function(t){
			if(flag1===0)
			{
				for(i=0;i<buttons.length;i++)
				{
					buttons.eq(i).css({"opacity":"0.7"});
				}
				time=t;
				flag1=1;
				interval=setInterval(function(){
					if(time<=0 && !mouseOnButtons)
					{
						flag1=0;
						for(i=0;i<buttons.length;i++)
						{
							buttons.eq(i).css({"transition":"opacity 0.7s ease"});
							buttons.eq(i).css({"opacity":"0.3"});
						}
						clearInterval(interval);
					}
					time=time-1000;
				},200)
			}
			else if(flag1===1)
			{
				time=t;
				clearInterval(interval);
				flag1=0;
				timer.startTimer(t);
			}
		}
	}
	$("div.sliderViewPort").mousemove(function(){
		timer.startTimer(3000);
	});
}

$(document).ready(function(){
	hover();
	var buttons=$("div.sliderViewPort div.sliderButton");
	for(i=0;i<buttons.length;i++)
	{
		buttons.eq(i).mouseenter(function(){mouseOnButtons=true;});
		buttons.eq(i).mouseleave(function(){mouseOnButtons=false;});
	}
});