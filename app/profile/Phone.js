Ext.define('ksp.profile.Phone', {
    extend: 'Ext.app.Profile',

    views: ['Main'],

    isActive: function() {
        return Ext.os.is('Phone');
    }
});