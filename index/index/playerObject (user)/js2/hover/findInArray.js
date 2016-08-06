define(function(require,exports,module){
	exports.findInArray=function(arr,item){
		for(var i=0; i<arr.length; i++){
			if(arr[i]==item){
				return true;
			}
		}
		return false;
	}
})
