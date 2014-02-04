Ext.define('ksp.view.VideoList', {
    extend: 'Ext.List',
    xtype: 'videolist',

    config: {
        title: '视频列表',
        ui:'round',
        useSimpleItems: true,
        variableHeights: true,
        masked: {
            xtype: 'loadmask',
            message: '努力加载中...'
        },
        store: 'Video',
//        grouped: true,
//        pinHeaders: true,
//        right:'10%',
        disclosure: true,
        onItemDisclosure: Ext.emptyFn,
//		indexBar: true,
		striped: true,
        plugins: [
	        {
	            xclass: 'Ext.plugin.PullRefresh',
	            pullText: '下拉刷新数据...',
	            releaseText:'释放刷新数据...',
	            loadingText:'正在加载数据...',
	            loadedText:'加载成功!',
	            lastUpdatedDateFormat:'y-m-d H:i:s',
	            lastUpdatedText:'最后更新时间'
	        },
         	{
	            xclass: 'Ext.plugin.ListPaging',
	            loadMoreText:'加载更多视频...',
	            noMoreRecordsText:'已加载所有视频!',
	            autoPaging: true
	        }
	    ],
        emptyText: '<div style="margin-top: 20px; text-align: center">搜索结果为空!</div>',
        itemTpl: [
            '<div style="margin:10 20;">',
                '<img style="float:left;margin-right:10px;" src="{thumbnail}" width="50" height="40"/>',
                '<div>',
                    '<p>',
	                    '<b>{title}</b><br>',
	                    '{published}',
                    '</p>',
                '</div>',
            '</div>'
        ]
    }
});
