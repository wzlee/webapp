Ext.define('ksp.model.Variety', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'varietyName',
            'picture',
            'introduction',
            'tips',
            'category'
        ]
    }
});
