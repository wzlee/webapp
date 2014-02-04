Ext.define('ksp.model.VData', {
	extend: 'Ext.data.Model',
	
	config:{
		fields:[
			'id',
			'date',
			{name:'view_count',mapping:'video.view_count'},
			{name:'favorite_count',mapping:'video.favorite_count'},
			{name:'comment_count',mapping:'video.comment_count'},
			{name:'up_count',mapping:'video.up_count'},
			{name:'down_count',mapping:'video.down_count'}
		]
	}
});