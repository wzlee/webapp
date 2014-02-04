Ext.define('ksp.view.VarietyList', {
    extend: 'Ext.List',
    xtype: 'varietylist',

    config: {
        title: '宠物百科',
        iconCls: 'favorites',
        useSimpleItems: true,
        variableHeights: true,
        masked: {
            xtype: 'loadmask',
            message: '努力加载中...'
        },
        store: 'Variety',
        grouped: true,
        pinHeaders: true,
        emptyText: '<div style="margin-top: 20px; text-align: center">搜索结果为空!</div>',
        itemTpl: [
            '<div style="margin:10 20;">',
                '<img style="float:left;margin-right:10px;" src="{picture}" width="50" height="40"/>',
                '<div>',
                    '<p><b>{varietyName}</b><br>',
                    '{introduction}',
                    '</p>',
                '</div>',
            '</div>'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',

                items: [
                    { xtype: 'spacer' },
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Search...',
                        listeners: {
                            scope: this
                            // clearicontap: this.onSearchClearIconTap,
                            // keyup: this.onSearchKeyUp
                        }
                    },
                    { xtype: 'spacer' }
                ]
            }
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
                        didMatch = search.test(record.get('varietyName') + ' ' + record.get('varietyName'));

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
