Ext.define('ksp.store.Video', {
    extend: 'Ext.data.Store',
    
    config:{
        model:'ksp.model.Video',
	    proxy: {
	        type: 'jsonp',
		    url:'https://openapi.youku.com/v2/videos/by_user.json',
		    extraParams:{client_id:'b937ab15de9ea7c5'},
	        limitParam:'count',
			reader:{  
	      		type: 'json',
				rootProperty: 'videos',
	        	messageProperty:"message"  
	  		}
	    }
    }
});
