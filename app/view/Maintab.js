Ext.define('ksp.view.MainTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'maintab',

    config: {
        tabBarPosition: 'bottom',
		flex:1,
        items: [
        	{
        		xtype:'indexview'
        	},
            {
               	xtype:'videoview'
            },
            {
            	xtype:'videocache'
            },
            {
            	xtype:'videochart'
            },
            {
                xtype:'ucenterview'
            }
        ]
    }
});
