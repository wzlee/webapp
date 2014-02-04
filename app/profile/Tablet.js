Ext.define('ksp.profile.Tablet', {
    extend: 'Ext.app.Profile',

    views: ['Main'],

    isActive: function() {
        return Ext.os.is('Tablet');
    }
});