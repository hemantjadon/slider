var interval;
var inFocusDiv=0;
var endDiv=0;
var isSliding=false;
slider={
	slide:function(slideDirection,slidingDivs,slideSpeed,click,clickDirection){
		if(!click)
		{
			if(slideDirection==='left')
			{
				isSliding=true;
				var sliderViewPort=$("div.sliderViewPort");
				var viewWidth=sliderViewPort[0].offsetWidth;
				var slideTime=slideSpeed/1000;
				for(i=0;i<slidingDivs.length;i++)
				{
					viewWidth=sliderViewPort[0].offsetWidth;
					var offSet=slidingDivs.eq(i)[0].offsetLeft;
					var setPos;
					if((offSet/viewWidth)%1===0)
					{
						setPos=(offSet/viewWidth)*100-100;
					}
					else if(((offSet+1)/viewWidth)%1===0)
					{
						setPos=((offSet+1)/viewWidth)*100-100;
					}
					else if(((offSet-1)/viewWidth)%1===0)
					{
						setPos=((offSet-1)/viewWidth)*100-100;
					}
					var setPos=setPos+"%";
					slidingDivs.eq(i).css({"left":setPos,"transition":"left "+slideTime+"s ease"});
				}
				if(inFocusDiv===slidingDivs.length-1)
				{
					inFocusDiv=0;
				}
				else
				{
					inFocusDiv++;
				}
				if(endDiv===slidingDivs.length-1)
				{
					endDiv=0;
				}
				else
				{
					endDiv++;
				}
				
				setTimeout(function(){
					isSliding=false;
					var x=inFocusDiv;
					x--;
					if(x===-1)
					{
						x=slidingDivs.length-1;
					}
					slidingDivs.eq(x).css({"transition":""});
					var newPos=(slidingDivs.length-1)*100;
					newPos=newPos+"%";
					slidingDivs.eq(x).css({"left":newPos});
				},slideSpeed)
			}
			
			else if(slideDirection==='right')
			{
				isSliding=true;
				slidingDivs.eq(endDiv).css({"transition":""})
				slidingDivs.eq(endDiv).css({"left":"-100%"});
				if(endDiv===0)
				{
					endDiv=slidingDivs.length-1;
				}
				else
				{
					endDiv--;
				}
				
				if(inFocusDiv===0)
				{
					inFocusDiv=slidingDivs.length-1;
				}
				else
				{
					inFocusDiv--;
				}
				var sliderViewPort=$("div.sliderViewPort");
				var viewWidth=sliderViewPort[0].offsetWidth;
				var slideTime=slideSpeed/1000;
				for(i=0;i<slidingDivs.length;i++)
				{
					viewWidth=sliderViewPort[0].offsetWidth;
					var offSet=slidingDivs.eq(i)[0].offsetLeft;
					var setPos;
					if((offSet/viewWidth)%1===0)
					{
						setPos=(offSet/viewWidth)*100+100;
					}
					else if(((offSet+1)/viewWidth)%1===0)
					{
						setPos=((offSet+1)/viewWidth)*100+100;
					}
					else if(((offSet-1)/viewWidth)%1===0)
					{
						setPos=((offSet-1)/viewWidth)*100+100;
					}
					var setPos=setPos+"%";
					slidingDivs.eq(i).css({"left":setPos,"transition":"left "+slideTime+"s ease"});
				}
				setTimeout(function(){isSliding=false},slideSpeed)
			}
		}
		else
		{
			if(clickDirection==='left')
			{
				var sliderViewPort=$("div.sliderViewPort");
				var viewWidth=sliderViewPort[0].offsetWidth;
				var slideTime=slideSpeed/1000;
				for(i=0;i<slidingDivs.length;i++)
				{
					viewWidth=sliderViewPort[0].offsetWidth;
					var offSet=slidingDivs.eq(i)[0].offsetLeft;
					var setPos;
					if((offSet/viewWidth)%1===0)
					{
						setPos=(offSet/viewWidth)*100-100;
					}
					else if(((offSet+1)/viewWidth)%1===0)
					{
						setPos=((offSet+1)/viewWidth)*100-100;
					}
					else if(((offSet-1)/viewWidth)%1===0)
					{
						setPos=((offSet-1)/viewWidth)*100-100;
					}
					console.log(setPos);
					setPos=setPos+"%";
					slidingDivs.eq(i).css({"left":setPos,"transition":"left "+slideTime+"s ease"});
				}
				if(inFocusDiv===slidingDivs.length-1)
				{
					inFocusDiv=0;
				}
				else
				{
					inFocusDiv++;
				}
				if(endDiv===slidingDivs.length-1)
				{
					endDiv=0;
				}
				else
				{
					endDiv++;
				}
				setTimeout(function(){
					var x=inFocusDiv;
					x--;
					if(x===-1)
					{
						x=slidingDivs.length-1;
					}
					slidingDivs.eq(x).css({"transition":""});
					var newPos=(slidingDivs.length-1)*100;
					newPos=newPos+"%";
					slidingDivs.eq(x).css({"left":newPos});
				},slideSpeed)
			}
			
			else if(clickDirection==='right')
			{
				slidingDivs.eq(endDiv).css({"transition":""})
				slidingDivs.eq(endDiv).css({"left":"-100%"});
				if(endDiv===0)
				{
					endDiv=slidingDivs.length-1;
				}
				else
				{
					endDiv--;
				}
				
				if(inFocusDiv===0)
				{
					inFocusDiv=slidingDivs.length-1;
				}
				else
				{
					inFocusDiv--;
				}
				var sliderViewPort=$("div.sliderViewPort");
				var viewWidth=sliderViewPort[0].offsetWidth;
				var slideTime=slideSpeed/1000;
				for(i=0;i<slidingDivs.length;i++)
				{
					viewWidth=sliderViewPort[0].offsetWidth;
					var offSet=slidingDivs.eq(i)[0].offsetLeft;
					var setPos;
					if((offSet/viewWidth)%1===0)
					{
						setPos=(offSet/viewWidth)*100+100;
					}
					else if(((offSet+1)/viewWidth)%1===0)
					{
						setPos=((offSet+1)/viewWidth)*100+100;
					}
					else if(((offSet-1)/viewWidth)%1===0)
					{
						setPos=((offSet-1)/viewWidth)*100+100;
					}
					var setPos=setPos+"%";
					slidingDivs.eq(i).css({"left":setPos,"transition":"left "+slideTime+"s ease"});
				}
			}
		}
	},
	init:function(slideDirection,slidingDivs,stayTime,slideSpeed,click,clickDirection){
		if(!click)
		{
			interval=setInterval(function(){
				slider.slide(slideDirection,slidingDivs,slideSpeed,false,null);
			},stayTime);
		}
		else
		{
			clearInterval(interval);
			slider.slide(slideDirection,slidingDivs,slideSpeed,true,clickDirection);
			slider.init(slideDirection,slidingDivs,stayTime,slideSpeed,false,null);
		}
	},
}


//Slider
$(document).ready(function(){
	var sliderViewPort=$("div.sliderViewPort");  //getting viewport div
	
	var stayTime=parseInt(sliderViewPort.eq(0).attr("data-stayTime")); //getting stay time of one slide
	var slideSpeed=parseInt(sliderViewPort.eq(0).attr("data-slideSpeed")); //getting slide speed
	var slideDirection=sliderViewPort.eq(0).attr("data-slideDirection");  //getting slide direction
	
	var slidingDivs=$("div.sliderViewPort div.slider"); //getting sliding divs
	
	endDiv=slidingDivs.length-1;
	slider.init(slideDirection,slidingDivs,stayTime,slideSpeed,false,null);
	
	
	//button slider
	var buttons=$("div.sliderViewPort div.sliderButton");
	for(i=0;i<buttons.length;i++)
	{
		var wait=false;
		buttons.eq(i).on("click",function(){
			if(!wait && !isSliding)
			{
				wait=true;
				var ClickDirection=this.getAttribute("data-clickDirection");
				slider.init(slideDirection,slidingDivs,stayTime,slideSpeed,true,ClickDirection);
				setTimeout(function(){wait=false},slideSpeed);
			}
		})
	}
});