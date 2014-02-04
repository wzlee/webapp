Ext.define('ksp.store.RUser', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'ksp.model.User',
        autoLoad: true,
        sorters: [{property: 'vv_count', direction: 'DESC'}],
//        grouper: {
//            groupFn: function(record) {
//                switch(record.get('category')){
//                    case "dog":
//                        return "**汪星人**";
//                    case "cat":
//                        return "**喵星人**";
//                    default:
//                        return "其他宠物";               
//                }
//            }
//        },
        proxy: {
            type: 'jsonp',
        	url:'http://localhost/youku/users',
        	extraParams:{type:'jsondata'},
	        reader: {
	            type: "json",
	            rootProperty: "data"
	        }
        }
    }
});