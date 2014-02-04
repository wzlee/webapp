Ext.define('ksp.view.ProfileList', {
    extend: 'Ext.List',
    xtype: 'profilelist',

    config: {
        masked: {
            xtype: 'loadmask',
            message: '信息加载中...'
        },
        store: 'Profile',
        emptyText:'<img src="resources/icons/pet.png"/><br>请先登录!',
        itemTpl: [
            '<div style="margin:10 20;">',
                '<span>{label}</span><span style="float:right">{text}</span>',
            '</div>'
        ]
    }
});
