Ext.define('ksp.view.VideoView', {
    extend: 'Ext.NavigationView',
    xtype: 'videoview',

    config: {
    	title: '视频播放',
    	iconCls: 'play',
        useSimpleItems: true,
        variableHeights: true,
        autoDestroy: false,
        defaultBackButtonText:'返回',
	    items: [
          	{
          		xtype:'userlist'
          	}
	    ],
	    navigationBar: {
            items: [
                {
                    xtype: 'button',
                    id: 'shareVideo',
                    text: '分享',
                    ui:'action',
                    align: 'right',
                    hidden:true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]
        }
    }
});
