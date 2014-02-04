Ext.define('ksp.store.Profile', {
    extend: 'Ext.data.Store',
	
    config: {
        model: 'ksp.model.Profile',
//        autoLoad: true,
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/public/profile'
        }
    }
});
