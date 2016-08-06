seajs.config({
	alias:{
		's':'right'
	}
});
seajs.use('s',function(mod){
	mod.right('playerIndexFocus')
})