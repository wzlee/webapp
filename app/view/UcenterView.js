Ext.define('ksp.view.UcenterView', {
	extend : 'Ext.NavigationView',
	xtype : 'ucenterview',

	config : {
		title : '用户中心',
        iconCls: 'user',

        defaultBackButtonText:'返回',
        autoDestroy: false,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    id: 'showRegister',
                    text: '注册',
                    ui:'action',
                    align: 'right',
                    hidden:true
//                    hideAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeOut',
//                        duration: 200
//                    },
//                    showAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeIn',
//                        duration: 200
//                    }
                },
                {
                    xtype: 'button',
                    id: 'showLogin',
                    text: '登录',
                    ui:'action',
                    align: 'right'
//                    hidden:true,
//                    hideAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeOut',
//                        duration: 200
//                    },
//                    showAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeIn',
//                        duration: 200
//                    }
                }
            ]
        },
		items: [
			{
				xtype: 'ucenterform'
			}
		]
	},

	initialize : function() {
		this.callParent();
	}
});
