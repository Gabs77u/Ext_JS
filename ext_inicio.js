Ext.onReady(function(){
	var meuDiv = Ext.get('DivElemento');
	
	Ext.get('mb1').on('click',function(e){
		meuDiv.addClass('red');
	});
	
	Ext.get('mb2').on('click',function(e){
		meuDiv.highlight();
	});
	
	Ext.get('mb3').on('click',function(e){
		meuDiv.center();
	});
	
	Ext.get('mb4').on('click',function(e){
		meuDiv.clearPositioning('auto');
	});
	
	Ext.get('mb5').on('click',function(e){
		meuDiv.setOpacity(.25);
	});
	
	Ext.get('mb6').on('click',function(e){
		meuDiv.clearOpacity();
	});
	
	Ext.get('mb7').on('click',function(e){
		meuDiv.toogle();
	});
	
	Ext.get('mb8').on('click',function(e){
		meuDiv.hide();
	});
	
	Ext.get('mb9').on('click',function(e){
		meuDiv.show();
	});
	
	Ext.get('mb10').on('click',function(e){
		meuDiv.fadeIn({endOpacity;.75,Duration:3}).frame('00ff00',2).ghost('tl);
	});
	
	Ext.get('mb11').on('click',function(e){
		meuDiv.setSize(500,100,true);
	});
	
	Ext.get('mb12').on('click',function(e){
		meuDiv.moveTo(220,450,true);
	});

});