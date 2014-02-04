Ext.define('ksp.view.IndexView', {
    extend: 'Ext.Container',
	xtype:'indexview',
    
    requires: [
        'Ext.carousel.Carousel'
    ],

    config: {
    	title:'首页',
    	iconCls: 'home',
        useSimpleItems: true,
        variableHeights: true,
        cls: 'cards',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            flex: 1
        },
        items: [
			{
	            xtype: 'carousel',
	            flex:1,
	            maxHeight:130,
	            items: [{
	                html: '<div style="text-align:center"><img style="margin:10px auto;" src="resources/images/0100641F4652E833EEBE6107915E8ECCC222C6-0B09-9982-3966-9AD6A951BEBB.jpg"></div>',
	                cls: 'card'
	            },
	            {
	                html: '<div style="text-align:center"><img style="margin:10px auto;" src="resources/images/0100641F4652E50EB2CDD205874A6227249EC4-0D10-F4D0-1CA8-04D7B1540EEC.jpg"></div>',
	                cls: 'card'
	            },
	            {
	                html: '<div style="text-align:center"><img style="margin:10px auto;" src="resources/images/0100641F4652DFD326F3CB058B92026D9CEBC6-235A-E213-2519-507DA024AAD6.jpg"></div>',
	                cls: 'card'
	            },
	            {
	                html: '<div style="text-align:center"><img style="margin:10px auto;" src="resources/images/0100641F4652DFD326F3CB058B92026D9CEBC6-235A-E213-2519-507DA024AAD6.jpg"></div>',
	                cls: 'card'
	            },
	            {
	                html: '<div style="text-align:center"><img style="margin:10px auto;" src="resources/images/0100641F4652DFD326F3CB058B92026D9CEBC6-235A-E213-2519-507DA024AAD6.jpg"></div>',
	                cls: 'card'
	            }]
	        }, 
	    	{
	            xtype: 'indextab',
	            flex:3
	        }
        ]
    }
});
