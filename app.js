/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'ksp',

    requires: [
    	'Ext.device.Connection',
    	'ksp.util.Config',
        'Ext.MessageBox',
        'Ext.TitleBar',
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
        'Ext.Video',
    	'Ext.carousel.Carousel',
        'Ext.Map',
        'Ext.data.proxy.JsonP',
        'Ext.form.FieldSet',
        'Ext.field.Search',
        'Ext.field.Checkbox',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.Spinner',
        'Ext.field.DatePicker',
        'Ext.List',
        'Ext.Toolbar',
        'Ext.Panel',
        'Ext.device.Geolocation',
        'Ext.data.proxy.LocalStorage',
        'Ext.chart.interactions.PanZoom'
    ],
	profiles: ['Phone', 'Tablet'],
    models: ['Local','User','Video','VData'],
    stores: ['Local','User','RUser','Video','NVideo','RVideo','VData'],
    views: ['MainTab','IndexTab','IndexView','UserList','VideoList','PlayVideo','VideoView','LoginPanel','RegisterPanel','UcenterForm','UcenterView','Overlays','VideoCache','VideoChart'],
    controllers:['MainController'],
    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
//        if (Ext.device.Connection.isOnline()) {
//		    Ext.Msg.alert('You are currently connected<br> via ' + Ext.device.Connection.getType());
//		} else {
//		    Ext.Msg.alert('You are not currently connected');
//		}
//		Ext.device.Notification.show({
//		    title: 'One Button',
//		    message: 'This is a simple notification with one button.'
//		});
//        Ext.device.Push.register({
//		    type: Ext.device.Push.ALERT|Ext.device.Push.BADGE|Ext.device.Push.SOUND,
//		    success: function(token) {
//		        console.log('# Push notification registration successful:');
//		        console.log('    token: ' + token);
//		    },
//		    failure: function(error) {
//		        console.log('# Push notification registration unsuccessful:');
//		        console.log('     error: ' + error);
//		    },
//		    received: function(notifications) {
//		        console.log('# Push notification received:');
//		        console.log('    ' + JSON.stringify(notifications));
//		    }
//		});
        Ext.Viewport.add(Ext.create('ksp.view.MainTab'));
//        var local = Ext.data.StoreManager.lookup('local');
//        if(local == undefined){
//            local = Ext.create('ksp.store.Local',{
//                storeId:'local',
//                data:[{id:'location',key:'location',value:null}]
//            });
//        }
//        var token = local.findRecord('key','token');
//        var location = local.findRecord('key','location');
//        var geo = Ext.create('Ext.util.Geolocation', {
//            autoUpdate: false,
//            listeners: {
//                locationupdate: function(geo) {
//                    location.set('location',[geo.getLongitude(),geo.getLatitude()]);
//                },
//                locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
//                    if(bTimeout){
//                        alert('Timeout occurred.');
//                    } else {
//                        alert('Error occurred.');
//                    }
//                }
//            }
//        });
//        geo.updateLocation();
//        ksp.util.Config.location = location;
//        ksp.util.Config.token = token;
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
