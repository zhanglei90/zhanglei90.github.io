define(function(require,exports,module){
	var G=require('getByClass');
	exports.choose=function(id){
		var oSide=document.getElementById(id);
		var aMsg=G.getByClass(oSide,'movie_moreMsg');
		var timer=null;
		var iNum=0;
		  for(var i=0;i<aMsg.length;i++){
		    (function(index){
		      var oTitle=aMsg[index].children[0];
		      var oDiv=aMsg[index].children[1];
		      var aLi=oTitle.getElementsByTagName('li');
		      var aUl=oDiv.children;
		      function tab(){
		        for(var j=0;j<aLi.length;j++){
		          aLi[j].className='';
		          aUl[j].style.display='none';
		        }
		        aLi[iNum].className='active';
		        aUl[iNum].style.display='block';
		      }
		      for(var j=0;j<aLi.length;j++){
		        aLi[j].index=j;
		        aLi[j].onmouseover=function(){
		          clearInterval(timer)
		          iNum=this.index;
		          tab();
		          function nav(){
		            iNum++;
		            if(iNum>aLi.length-1){
		              iNum=0;
		            }
		            tab();
		          }
		          timer=setInterval(function(){
		            nav()
		          },300)
		        }
		      } 
		    })(i) 
		  }
	}
})