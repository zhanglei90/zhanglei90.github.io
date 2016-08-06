seajs.config({
	alias:{
		's':'hover',
		'h':'right',
		'r':'scroll_r',
		'l':'scroll_l',
		'C':'choose'
	}
});
seajs.use(['s','h','r','l','C'],function(mod,mod1,mod3,mod4,mod5){
	mod.hover('content'),
	mod1.right('playerIndexFocus'),
	mod3.scroll('rollBox2','content'),
	mod4.scr('rollBox','side'),
	mod5.choose('side')
})