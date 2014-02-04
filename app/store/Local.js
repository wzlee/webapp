Ext.define('ksp.store.Local', {
    extend: 'Ext.data.Store',

    config: {
        model:'ksp.model.Local',
        autoLoad:true,
        autoSync:true
    }
});
