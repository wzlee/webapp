Ext.define('ksp.store.Variety', {
    extend: 'Ext.data.Store',

    config: {
        model: 'ksp.model.Variety',
        autoLoad: true,
        sorters: 'category',
        grouper: {
            groupFn: function(record) {
                switch(record.get('category')){
                    case "dog":
                        return "**汪星人**";
                    case "cat":
                        return "**喵星人**";
                    default:
                        return "其他宠物";               
                }
            }
        },
        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/public/variety'
        }
    }
});
