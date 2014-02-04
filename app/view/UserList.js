Ext.define('ksp.view.UserList', {
    extend: 'Ext.List',
    xtype: 'userlist',

    config: {
        title: '解说列表',
        iconCls: 'team',
        useSimpleItems: true,
        variableHeights: true,
        striped:true,
        masked: {
            xtype: 'loadmask',
            message: '努力加载中...'
        },
        onItemDisclosure: Ext.emptyFn,
        store: 'User',
//        grouped: true,
//        pinHeaders: true,
        emptyText: '<div style="margin-top: 20px; text-align: center">搜索结果为空!</div>',
        itemTpl: [
            '<div style="margin:10 20;">',
                '<img style="float:left;margin-right:10px;" src="{avatar}" width="50" height="40"/>',
                '<div>',
                    '<p>',
	                    '<b>{name}</b>',
	                    	'<tpl switch="gender">',
					            '<tpl case="m">',
					                '[男]',
					            '<tpl case="f">',
					                '[女]',
					            '<tpl default>',
					                '[未知性别]',
					        '</tpl>',
	                    '<br>',
	                    '<tpl if="hasUpdate == true">',
				            '<p style="color:green">有视频更新</p>',
			            '<tpl else>',
			            	'<p style="color:gray">暂无视频更新</p>',
				        '</tpl>',
                    '</p>',
                '</div>',
            '</div>'
        ]
    },
    /**
     * Called when the search field has a keyup event.
     *
     * This will filter the store based on the fields content.
     */
    onSearchKeyUp: function(field) {
        //get the store and the value of the field
        var value = field.getValue(),
            store = this.getStore();
            console.log(value);
        //first clear any current filters on the store. If there is a new value, then suppress the refresh event
        store.clearFilter(!!value);

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(','),
                regexps = [],
                i, regex;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                regex = searches[i].trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = search.test(record.get('id') + ' ' + record.get('name'));

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
    },

    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function() {
        //call the clearFilter method on the store instance
        this.getStore().clearFilter();
    }
});
