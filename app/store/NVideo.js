Ext.define('ksp.store.NVideo', {
    extend: 'Ext.data.Store',
    
//    proxy: {
//        type: 'jsonp',
//        api:{  
//		    read:'https://openapi.com/v2/videos/by_user.json',  
//		    create:'video/add',  
//		    destroy:'video/delete',  
//		    update:'video/update'  
//      		},  
//        limitParam:'count',
//		reader:{  
//      		type: 'json',
//			root: 'videos',
//        	messageProperty:"message"  
//      		}, 
//		writer:{  
//		    type:"json",  
//		    encode:true,  
//		    root:"videos",  
//		    allowSingle:false  
//		}
//    },
     config: {
        model: 'ksp.model.Video',
        autoLoad: true,
        sorters: [{property: 'published', direction: 'DESC'}],
        proxy: {
            type: 'jsonp',
        	url:'http://localhost/youku/videos',
        	extraParams:{orderby:'published'},
	        reader:{  
	      		type: 'json',
	      		rootProperty: "content",
	        	messageProperty:"message",
	        	totalProperty:'totalElements'
	  		}
        }
    }
});
