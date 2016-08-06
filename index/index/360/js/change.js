/*
function tab(){
	var oChse=document.getElementById('chse'div_1);
	var aLi=oChse.getElementsByTagName('li');
	var oBan=document.getElementById('ban');
	var aA=oBan.getElementsByTagName('a');
	var oCnt=document.getElementById('cnt');
	var aA1=oCnt.getElementsByTagName('a');
	var oPacity=document.getElementById('opaty');
	var aI=oPacity.getElementsByTagName('i');
	 for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
				aA[i].className='noplay';
				aA1[i].className='c_cont noplay';
				aI[i].className='noplay';
			}
			this.className='list';
			aA[this.index].className='display';
			aA1[this.index].className='c_cont display';
			aI[this.index].className='display';
		};
	}
};

*/



function tab(id_1,id_2,id_3,name_1,name_2){
	var oChse=document.getElementById('chse');
	var aLi=oChse.getElementsByTagName('li');
	var oBan=document.getElementById(id_1);
	var aA=oBan.getElementsByTagName('a');
	var oCnt=document.getElementById(id_2);
	var aA1=oCnt.getElementsByTagName('a');
	var oPacity=document.getElementById(id_3);
	var aI=oPacity.getElementsByTagName('i');
	 for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
				aA[i].className='noplay';
				aA1[i].className='c_cont noplay';
				aI[i].className='noplay';
			}
			this.className='list';
			aA[this.index].className='display';
			aA1[this.index].className='c_cont display';
			aI[this.index].className='display';
		};
	}
};
function nav(id_4,id_5,name1,name2){
	var oTban=document.getElementById(id_4);
	var aLit=oTban.getElementsByTagName('li');
	var oCban=document.getElementById(id_5);
	var aUl=oCban.getElementsByTagName('ul');
	for(var i=0;i<aLit.length;i++){
		aLit[i].index=i;
		aLit[i].onmouseover=function(){
			for(var i=0;i<aLit.length;i++){
				aLit[i].className=name1;
				aUl[i].className='noplay';

			}
			this.className=name2;
			aUl[this.index].className='display';
		};
	}
}
function mba(){
	var oMin=document.getElementById('man');
	var aLi=oMin.getElementsByTagName('li');
	var aB=oMin.getElementsByTagName('b');
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			aB[this.index].className='display';
		};
	}
}



	
window.onload=function(){
	tab('ban','cnt','opaty')
	nav('tban','cban','','pub')
	nav('bth','note','','lit' )
	nav('tit','mn','','spt')
	nav('tle','cmn','','spt')
}; 

