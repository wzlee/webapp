Ext.define('ksp.model.Pet', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'nickName',
            'parentName',
            'petshot',
            'description',
            'variety',
            'age',
            'sex',
            'city',
            'state',
            'country'
        ]
    }
});
