'use strict'
function findInArr(arr,item){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==item){
			return true;
		}
	}
	return false;
}
function getByClass(obj,sClass){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}
	var aResult=[];
	var aEle=obj.getElementsByTagName('*');
	for(var i=0; i<aEle.length; i++){
		var aClass=aEle[i].className.split(' ');
		if(findInArr(aClass,sClass)){
			aResult.push(aEle[i]);
		}
	}

	return aResult;
}
window.onload=function(){
	var oNav=document.getElementById('nav');
	var oUl=oNav.children[1];
	var aLi=oUl.children;	
	var aSp=oUl.getElementsByTagName('span');
	var oContnt=document.getElementById('contnt');
	var oBd=document.getElementById('bd');
	var oWrap=document.getElementById('wrap');
	var aDiv=oContnt.children;
	function fix(id1,id2){
		var oDiv1=document.getElementById(id1);
		var oDiv2=document.getElementById(id2);
		var top=oDiv1.offsetTop;
		window.onscroll=function(){
			var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop>top){
				oDiv1.style.position='fixed';
				oDiv1.style.top=0;
				oDiv1.style.left=0;
				oDiv2.style.display='block';
			}else{
				oDiv1.style.position='static';
				oDiv2.style.display='none';
			}
		};	
	}
	fix('wrap','bd')
	//时间
	function nTime(id1,id2){
		function toDou(iNum){
			return iNum<10?'0'+iNum:''+iNum;
		}
		var oYear=document.getElementById(id1);
		var aDat=oYear.getElementsByTagName('img');
		var oTime=document.getElementById(id2);
		var aDay=oTime.getElementsByTagName('img');
		function clock(){
			var oDate=new Date();
			var Y=oDate.getFullYear();
			var M=toDou(oDate.getMonth()+1);
			var D=toDou(oDate.getDate());
			var h=toDou(oDate.getHours());
			var m=toDou(oDate.getMinutes());
			var s=toDou(oDate.getSeconds());
			var d=toDou(oDate.getDay());
			var str=Y+'y'+M+'m'+D+'D';
			var str2=h+'a'+m+'a'+s+'w';
			for(var i=0;i<aDat.length;i++){
				aDat[i].src='images/'+str.charAt(i)+'.png';
			}
			for(var i=0;i<aDay.length;i++){
				aDay[i].src='images/'+str2.charAt(i)+'.png';
				aDay[9].src='images/'+d+'.png';
			}
		}
		clock();
		setInterval(clock,1000);
	}
	nTime('Year','Time')
	//导航
	for(var i=0;i<aLi.length;i++){
		(function(index){
			aLi[i].onclick=function(){
				for(var i=0;i<aLi.length;i++){
					startMove(aSp[i],{top:50})
					var oAudio=new Audio();
					oAudio.src=oggSound['sound'+(parseInt(index)+49)];
					oAudio.play();
				}
				startMove(aSp[index],{top:0})
				scrollMoveDown(index)
			}
		})(i)
	}

	for(var i=0;i<aDiv.length;i++){
		scrollMoveDown(aDiv[i])
	}
	function scrollMoveDown(i){
		var iNow = 0;
		var timers=null;
		var T=0;  
		var num = i;
		clearInterval(timers);
		timers=setInterval(function(){
			scrollRun(num);
		},30); 
	
		function scrollRun(num){    
			T=document.documentElement.scrollTop || document.body.scrollTop; 
			//alert(iNow);
			if(T < aDiv[0].offsetHeight *num && num > iNow){ 
				T+=70;
				window.scrollTo(0,T); 
			}else if(T > aDiv[0].offsetHeight *num && num < iNow){ 
				T-=70;
				window.scrollTo(0,T);
			}else{
			window.scrollTo(0,num*aDiv[0].offsetHeight);
			iNow = num;
			clearInterval(timers); 
			} 
		}
	} 
	//按钮hover效果
	function hover(obj,iNum){
		obj[iNum].onmouseover=function(){
			obj[iNum].children[0].className='';
			obj[iNum].children[1].className='on';
		}
		obj[iNum].onmouseout=function(){
			obj[iNum].children[0].className='on';
			obj[iNum].children[1].className='';
		}
	}
	var aText=getByClass(oContnt,'text1');
	for(var i=0;i<aText.length;i++){
		(function(index){
			var aI=aText[index].getElementsByTagName('i');
			for(var j=0;j<aI.length;j++){
				(function(index){
					hover(aI,index)
				})(j)
			}
		})(i)
	}
	var aRbox=getByClass(oContnt,'r_box')
	var aConet=getByClass(oContnt,'conet')
	for(var i=0;i<aRbox.length;i++){
		(function(index){
			var oB=aRbox[index].getElementsByTagName('b')[0];
			var oP=aRbox[index].getElementsByTagName('p')[0];
			var aI=aConet[index].getElementsByTagName('i');
			oB.onmouseover=function(){
				oB.children[0].className='';
				oB.children[1].className='on';
			};
			oB.onmouseout=function(){
				oB.children[1].className='';
				oB.children[0].className='on';
			};
			oB.children[1].onclick=function(){
					doMove(aRbox[index],{width:650},{complete:function(){
						aRox.style.background='#000;	'
					}})
					startMove(aConet[index],{left:-335})
					oB.style.display='none';
					oP.style.display='block';
			};
				oP.onmouseover=function(){
					oP.children[0].className='';
					oP.children[1].className='on';
				};
				oP.onmouseout=function(){
					oP.children[1].className='';
					oP.children[0].className='on';
				};
				
				oP.children[1].onclick=function(){
					doMove(aRbox[index],{width:0})
					startMove(aConet[index],{left:0})
					oB.style.display='block';
					oP.style.display='none';	
				};	
			aI[0].onclick=function(){
				txMove(index)
			};
			aI[1].onclick=function(){
				doMove(aRbox[index],{width:640})
				startMove(aConet[index],{left:-335})
				oB.style.display='none';
				oP.style.display='block';	
			};
		})(i)
	}
	function txMove(i){	
		var timerT = null;
		var iSpeed = 0;
		clearInterval(timerT);
		timerT = setInterval(function(){
			var T=document.documentElement.scrollTop || document.body.scrollTop;					 						 
			iSpeed += (aDiv[0].offsetHeight * (i+1) - T)/4;
			iSpeed *= 0.65;				 
			if( Math.abs(aDiv[0].offsetHeight * (i+1) - T)<=1 && Math.abs(iSpeed)<=1 ){
				document.body.scrollTop = document.documentElement.scrollTop = aDiv[0].offsetHeight * (i+1);
				iSpeed = 0;
				clearInterval(timerT);
			}
			else{		
				document.body.scrollTop = document.documentElement.scrollTop = T + iSpeed ;
			}
		},30);
		
	}
	var oFot=document.getElementById('fot');
	var oFbtn=document.getElementById("fot_btn");
	var bOk=false;
	oFbtn.onclick=function(){
		if(bOk){
			doMove(oFot,{height:0})
			oFbtn.children[0].className='on';
			oFbtn.children[1].className='';
		}else{
			doMove(oFot,{height:180})
			oFbtn.children[0].className='';
			oFbtn.children[1].className='on';
		}	
		bOk=!bOk;
	};
	//作品集
	
	function getDir(obj,ev){
		 var x=obj.getBoundingClientRect().left+obj.offsetWidth/2-ev.clientX;
		 var y=obj.getBoundingClientRect().top+obj.offsetHeight/2-ev.clientY;
		 return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;	
	}
	function through(obj){
		var oS=obj.children[1];
		obj.onmouseenter=function(ev){
			var oEvent=ev || event;
			var dir=getDir(obj,oEvent);
			switch(dir){
				case 0:
					oS.style.left=200+'px';
					oS.style.top=0;
					break;
				case 1:
					oS.style.left=0;
					oS.style.top=200+'px';
					break;
				case 2:
					oS.style.left=-200+'px';
					oS.style.top=0;
					break;
				case 3:
					oS.style.left=0;
					oS.style.top=-200+'px';
					break;
			}
			startMove(oS,{left:0,top:0})
		}
		obj.onmouseleave=function(ev){
			var oEvent=ev || event;
			var dir=getDir(obj,oEvent);
			switch(dir){
				case 0:
					startMove(oS,{left:200,top:0});
					break;
				case 1:
					startMove(oS,{left:0,top:200});
					break;
				case 2:
					startMove(oS,{left:-200,top:0});
					break;
				case 3:
					startMove(oS,{left:0,top:-200});
					break;
			}
		}
	};
	var oCh=document.getElementById('choose');
	var aList=oCh.getElementsByTagName('li');
	for(var i=0;i<aList.length;i++){
		(function(index){

		})(i)
		through(aList[i])
	}
	//回顶部
	function scroll(){
		var oBtn=document.getElementById('btn');
		var bIn=false;
		document.onscroll=function(){
			for(var i=0; i<aRbox.length; i++){ 
				if(aRbox[i].offsetWidth != 0){
					startMove(aRbox[i],{width:0});
					startMove(aConet[i],{left:0})
				}
			}
			var oBox=document.getElementById('box5');
			var bjCor=getByClass(oNav,'sp');
			var scrollY=document.documentElement.scrollTop || document.body.scrollTop;
			for(var i=0; i<bjCor.length-1; i++){         
				if(scrollY >=aDiv[0].offsetHeight*i && scrollY <= aDiv[0].offsetHeight*(i+1)){
					bjCor[i].style.top =(scrollY - aDiv[0].offsetHeight * i )*(aLi[0].offsetHeight/aDiv[0].offsetHeight) +'px';
					bjCor[i].style.left = (scrollY - aDiv[0].offsetHeight * i )*(10/aDiv[0].offsetHeight) + 'px';
					bjCor[i+1].style.top =( aDiv[0].offsetHeight * (i+1) - scrollY)*(aLi[0].offsetHeight/aDiv[0].offsetHeight) + 'px';
					bjCor[i+1].style.left =( aDiv[0].offsetHeight * (i+1) - scrollY)*(10/aDiv[0].offsetHeight) + 'px';
				}else if(scrollY <aDiv[0].offsetHeight*i){
					bjCor[i+1].style.top = aDiv[0].offsetHeight * (i+1) + 'px';
				}else if(scrollY > aDiv[0].offsetHeight*(i+1)){
					bjCor[i].style.top = aDiv[0].offsetHeight * (i+1) + 'px';
				}
			}
			if(scrollY>=700){
				oBtn.style.display='block';
			}else{
				oBtn.style.display='none';
			}
			if(bIn){

				clearInterval(oBtn.timer)
			}
			bIn=true;
			oBtn.onclick=function(){
				var start=document.documentElement.scrollTop || document.body.scrollTop;
				var iTarget=0;
				var dis=iTarget-start;
				var count=Math.floor(1000/30);
				var n=0;
				clearInterval(oBtn.timer);
				oBtn.timer=setInterval(function(){
					n++;
					bIn=false;
					var cur=start+dis/count*n;
					document.documentElement.scrollTop=document.body.scrollTop=cur;
					if(n==cur){
						clearInterval(oBtn.timer)
					}
				},36)
			};
		};
	}
	scroll();
	function kMove(id1,id2){
		var oBox=document.getElementById(id1);
		var oUl=oBox.children[0];
		var aLi=oUl.children;
		var oBtn=document.getElementById(id2);
		var time=null;
		var aPos=[];
		function rnd(n,m){
					return Math.floor(Math.random()*(m-n)+n)
				}
		for(var i=0;i<aLi.length;i++){
			aPos[i]={left:aLi[i].offsetLeft,top:aLi[i].offsetTop};
		}
		for(var i=0;i<aLi.length;i++){
			if(i%3==0){
				aLi[i].style.position='absolute';
				aLi[i].style.left=(0,1200)+'px';
				aLi[i].style.top=rnd(-1200,1200)+'px';
				aLi[i].style.margin=0;
			}else{
				aLi[i].style.position='absolute';
				aLi[i].style.left=rnd(0,1200)+'px';
				aLi[i].style.top=rnd(-1200,1200)+'px';
				aLi[i].style.margin=0;
			}
			
		}
		oBtn.onclick=function(){
			var i=0;
			time=setInterval(function(){ 	
			(function(index){
					startMove(aLi[i],{left:aPos[i].left,top:aPos[i].top,opacity:1});
					i++;
					if(i==aLi.length){
						clearInterval(time);
					}
					})(i)
				},150)
			startMove(oBtn,{opacity:0},{complete:function(){
				oBtn.style.display='none';
			}})	
		};	
	}
	kMove('choose','bt')
	
	var oLink=document.getElementById('link');
	var oTb=document.getElementById('tb');
	oLink.onmouseover=function(){
		doMove(oTb,{left:0})
	}

	function mouseH(id1,id2){
		var oPic=document.getElementById(id1);
		var oTmd=document.getElementById(id2);
		var timer=null;
		var bIn=false;
		oPic.onmouseover=function(){
			clearTimeout(timer)
			oPic.style.width=50+'px';
			oPic.style.height=50+'px';
			oPic.style.marginLeft=-25+'px';
			oPic.style.marginTop=-25+'px';
			oTmd.style.display='block'
			startMove(oTmd,{opacity:1})	
		}
		oTmd.onmouseover=function(){
			clearInterval(timer)
		}
		oPic.onmouseout=oTmd.onmouseout=function(){
			oPic.style.width=30+'px';
			oPic.style.height=30+'px';
			oPic.style.marginLeft=-15+'px';
			oPic.style.marginTop=-15+'px';
			timer=setTimeout(function(){
				startMove(oTmd,{opacity:0})
				oTmd.style.display='none';
			},200)
		}
	};
	mouseH('qq','qtd')
	mouseH('wx','tdm')

}



