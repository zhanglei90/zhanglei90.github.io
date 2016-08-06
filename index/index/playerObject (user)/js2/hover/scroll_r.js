define(function(require,exports,module){
	exports.scroll=function(id1,id2){
		var oBox=document.getElementById(id1);
		var oRoll=oBox.children[0];
		var oUp=oBox.children[1];
		var oDown=oBox.children[2];
		var oCont=document.getElementById(id2);
		var oMain=oCont.children[1];
		oRoll.onmousedown=function(ev){
		    var oEvent=ev || event;
		    var disY=oEvent.clientY-oRoll.offsetTop;
		    document.onmousemove=function(ev){
		        var oEvent=ev || event;
		        var m=oEvent.clientY-disY;
		        scroll(m);
		    };
		    document.onmouseup=function(){
		        document.onmousemove=document.onmouseup=null;
		        oRoll.releaseCapture&&oRoll.releaseCapture();
		    }
		    oRoll.setCapture&&oRoll.setCapture()
		    return false;
		}
		function scroll(m){
		  if(m<=0){
		      m=0;
		  };
		  if(m>=oBox.offsetHeight-oRoll.offsetHeight){
		      m=oBox.offsetHeight-oRoll.offsetHeight;
		  }
		  var scrla=(m)/(oBox.offsetHeight-oRoll.offsetHeight);
		  var n=scrla*(oMain.offsetHeight-oCont.offsetHeight);
		  oRoll.style.top=m+'px';
		  oMain.style.top=-n+'px';
		}
		function addEvent(obj,sEv,fn){
		  if(obj.addEventListener){
		    obj.addEventListener(sEv,fn,false);
		  }else{
		    obj.attachEvent('on'+sEv,fn);
		  }
		}
		function addwheel(obj,fn){
		  if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		    obj.addEventListener('DOMMouseScroll',wheel,false);
		  }else{
		    /*obj.onmousewheel=wheel;*/
		    addEvent(obj,'mousewheel',wheel);//调用兼容；
		  }
		  function wheel(ev){
		    var oEvent=ev || event;
		    var bdown=oEvent.wheelDelta?bdown=oEvent.wheelDelta<0:bdown=oEvent.detail>0;
		    fn && fn(bdown);//判断fn是否存在，如存在走(bdown);
		    oEvent.preventDefault && oEvent.preventDefault();//阻止默认事件
		  } 
		}
		addwheel(oCont,function(tdown){
		  var t=oRoll.offsetTop;
		  if(tdown){
		   t+=10;
		   scroll(t);
		  }else{
		    t-=10;
		    scroll(t);
		  }
		})
		oUp.onclick=function(){
		  t=oRoll.offsetTop-10;
		  scroll(t);
		}
		oDown.onclick=function(){
		  t=oRoll.offsetTop+10;
		  scroll(t);
		}
	}
})