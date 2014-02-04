Ext.define('ksp.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
               xtype:'userlist'
            },
            {
                title: '视频分类',
                iconCls: 'bookmarks',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '欢迎来到宠物商城'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                xtype:'varietylist'
            },
            {
                xtype:'ucenter'
            }
        ]
    }
});
