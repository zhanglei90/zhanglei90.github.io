define(function(require,exports,module){
	var N=require('getByClass');
	exports.hover=function(id){
		var oCont=document.getElementById(id);
        var aUl=N.getByClass(oCont,'playerMaskVideo_js');
        for(var i=0;i<aUl.length;i++){
            (function(index){
                var aA=aUl[index].getElementsByTagName('a');
                for(var j=0;j<aA.length;j++){
                    (function(index){
                        aA[j].onmouseover=function(){
                            aA[index].children[1].style.display='block';
                        };
                        aA[j].onmouseout=function(){
                            aA[index].children[1].style.display='none';
                        };
                    })(j)
                }
            })(i)
        }
    }
})
