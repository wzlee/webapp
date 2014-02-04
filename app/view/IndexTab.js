Ext.define('ksp.view.IndexTab', {
    extend: 'Ext.tab.Panel',
    xtype:'indextab',

    config: {
        ui: 'dark',
        tabBar: {
            ui: 'dark',
            layout: {
                pack: Ext.filterPlatform('ie10') ? 'start' : 'center'
            }
        },
        activeTab: 1,
        defaults: {
            scrollable: true
        },
        items: [
            {
        		xtype:'list',
    		 	title: '最新视频',
    		 	emptyText: '<div style="margin-top: 20px; text-align: center">最新视频数据加载失败!</div>',
        		itemTpl: [
		            '<div style="margin:10 20;">',
		                '<img style="float:left;margin-right:10px;" src="{thumbnail}" width="50" height="100%"/>',
		                '<div>',
		                    '<p>',
			                    '<b>{title}</b><br>',
			                    '更新时间:{published}',
		                    '</p>',
		                '</div>',
		            '</div>'
		        ],
        		store:'NVideo'
            },
            {
                title: '视频排行',
                xtype:'list',
                emptyText: '<div style="margin-top: 20px; text-align: center">视频排行加载失败!</div>',
        		itemTpl: [
		            '<div style="margin:10 20;">',
//		                '<img style="float:left;margin-right:10px;" src="{thumbnail}" width="50" height="40"/>',
		            	'<div style="float:left;text-align:center;margin-right:10px;width:50px;height:40px;">{[xindex]}</div>',
		                '<div>',
		                    '<p>',
			                    '<b>{title}</b><br>',
			                    '总播放数:<tpl>this.formatNumber(view_count)</tpl>',
		                    '</p>',
		                '</div>',
		            '</div>',
	            	{
		            	formatNumber:function(number){
		            		return Ext.Number.toFixed(Number,precision);
		            	}
		            }
		        ],
        		store:'RVideo'
            },
            {
                title: '用户排行',
                xtype:'list',
                emptyText: '<div style="margin-top: 20px; text-align: center">用户排行加载失败!</div>',
                itemTpl: [
		            '<div style="margin:10 20;">',
		                '<div style="float:left;text-align:center;margin-right:10px;width:50px;height:40px;">{[xindex]}</div>',
		                '<div>',
		                    '<p>',
			                    '<b>{name}</b><br>',
			                    '播放指数:{vv_count/10000000}',
		                    '</p>',
		                '</div>',
		            '</div>'
		        ],
        		store:'RUser'
            }
        ]
    }
});