define(function(require,exports,module){
	var F=require('findInArray');
	exports.getByClass=function(obj,sClass){
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
})
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