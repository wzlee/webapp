Ext.define('ksp.store.VData', {
    extend: 'Ext.data.Store',
    
     config: {
        model: 'ksp.model.VData',
        autoLoad:true,
        proxy: {
            type: 'jsonp',
        	url:'http://localhost/youku/vdata/chart',
        	extraParams:{video_id:'XNjYzNTY3NDcy',filter:'hour',orderby:'date'},
	        reader:{  
	      		type: 'json',
	      		rootProperty: "content",
	        	messageProperty:"message",
	        	totalProperty:'totalElements'
	  		}
        }
    }
});
