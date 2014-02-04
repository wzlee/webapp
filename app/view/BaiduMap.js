Ext.define('ksp.view.BaiduMap', {
    extend: 'Ext.Panel',
    xtype: 'baidumap',

    config: {
        title: '附近宠物',
        cls: 'x-baidumap',
        variableHeights: true,
        html:'<div id="baidumap"></div>'
    }
});
