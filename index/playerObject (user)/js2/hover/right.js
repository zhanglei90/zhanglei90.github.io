define(function(require,exports,module){
	var M=require('move');
	exports.right=function(id){
		var oMove=document.getElementById(id);
        var oCt=oMove.children[0];
        var aList=oCt.getElementsByTagName('li');
        var oTab=oMove.children[1];
        var aLi=oTab.getElementsByTagName('li');
        var oPoint=oTab.children[1];
        for(var i=0;i<aLi.length;i++){
            (function(index){
                aLi[i].onmouseover=function(){
                    for(var j=0;j<aLi.length;j++){
                        M.startMove(aList[j],{opacity:0},{duration:1000})
                    }
                    aList[index].style.display='block';
                    M.startMove(aList[index],{opacity:1})
                    M.startMove(oPoint,{left:aLi[0].offsetWidth*index},{duration:300});
                }
            })(i)
        }
    }
})