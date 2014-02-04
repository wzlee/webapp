Ext.define('ksp.controller.MainController',{
	extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainTab:'maintab',
            showRegister:'#showRegister',
            showLogin:'#showLogin',
            loginPanel: 'loginform',
            registerPanel: 'registerform',
            doRegister:'#doRegister',
            doLogin:'#doLogin',
            userList:'userlist',
            shareVideo:'#shareVideo',
            videoList:'videolist',
            playVideo:'playvideo',
            videoView:'videoview',
            nearlist:'nearlist',
            ucenterForm:'ucenterform',
            ucenterView:'ucenterview'
        },

        control: {
            mainTab:{
                activeitemchange:'onActiveItemChange'
            },
            userList: {
                itemtap: 'onUserSelect'
            },
            videoList: {
                itemtap: 'onVideoSelect'
            },
            videoView: {
                back:'onVideoBack'
            },
            showRegister:{	
            	tap:'onShowRegister'
            },
            showLogin:{
				tap:'onShowLogin'            
            },
            doRegister:{	
            	tap:'onSubmitRegister'
            },
            doLogin:{
				tap:'onSubmitLogin'            
            },
            ucenterView: {
            	push:'onUcenterPush',
                pop: 'onUcenterPop'
//                back:'onUcenterBack'
            }
        }
    },
    onUserSelect:function(me, index, target, record, e) {
    	var videoList = this.getVideoList();
        var store = me.getStore(),
            record  = store.getAt(index);
        if(!videoList){
        	videoList = Ext.create('ksp.view.VideoList',{
        		title:record.data.name
        	});
        }else{
        	videoList.setTitle(record.data.name);
        }
        videoList.getStore().getProxy().setExtraParam('user_id',record.data.id);
        videoList.getStore().load();
        this.getVideoView().push(videoList);
    },
    onVideoSelect:function(me, index, target, record, e) {
    	var playVideo = this.getPlayVideo();
        var store = me.getStore(),
            record  = store.getAt(index);
//            detailCard = me.getDetailCard();
        if(!playVideo){
        	playVideo = Ext.create('ksp.view.PlayVideo',{
//        		url:'http://player.opengg.me/loader.swf?VideoIDS='+record.data.id+'&isAutoPlay=false&isShowRelatedVideo=false&embedid=-&showAd=0'
        	});
        }
//        playVideo.setUrl('http://player.opengg.me/loader.swf?VideoIDS='+record.data.id+'&isAutoPlay=false&isShowRelatedVideo=false&embedid=-&showAd=0');
        playVideo.setRecord(record);
        this.getShareVideo().show();
        this.getVideoView().push(playVideo);

    },
    onVideoBack:function(view){
    	this.getShareVideo().hide();
    },
    onActiveItemChange:function(tab,value){
//        console.log("["+value.title+"] activated...");
    },
//    onLoadProfile:function(list){
//    	this.getProfilelist().getStore().load({
//		    callback: function(records, operation, success) {
//		        if(success){
//			        this.getGoRegister().hide();
//		        	this.getGoLogin().hide();
//		        }else{
//		        	this.getGoRegister().hide();
//		        	this.getGoLogin().show();
//		        }
//		    },
//		    scope: this
//		});
//    },
    onShowRegister:function(){
    	var registerpanel = this.getRegisterPanel();
    	if (!registerpanel) {
            registerpanel = Ext.widget('registerform');
        }
//        this.getShowLogin().show();
    	this.getUcenterView().push(registerpanel);
    },
    onShowLogin:function(){
    	var loginPanel = this.getLoginPanel();
    	if (!loginPanel) {
            loginPanel = Ext.widget('loginform');
        }
        this.getShowLogin().hide();
    	this.getUcenterView().push(loginPanel);
    },
    onSubmitRegister:function(){
    	this.getRegisertpanel().submit({
    		method :'GET',
    		url:'http://localhost:8080/public/register',
    		waitMsg:'登录验证中...',
    		success:function(form,result){
    			console.log(result);
    		},
    		failure :function(form,result){
    			console.log(result);
    		}
    	});
    },
    onSubmitLogin:function(){
    	this.getLoginPanel().submit({
    		method :'GET',
    		url:'http://localhost:8080/public/login',
//    		waitMsg:'登录验证中...',
    		success:function(form,result){
    			console.log(result);
    		},
    		failure :function(form,result){
    			console.log(result);
    		}
    	});
    },
    onUcenterPush: function(view, item) {
    	var showRegister = this.getShowRegister();
    	var showLogin = this.getShowLogin();
        if(item.xtype == "loginform"){
            showLogin.hide();
            showRegister.show();
        }else if(item.xtype == "registerform") {
        	showRegister.hide();
            showLogin.show();
        }else{
        	showRegister.hide();
        	showLogin.hide();
        }
    },
    onUcenterPop: function(view, item) {
    	var showRegister = this.getShowRegister();
    	var showLogin = this.getShowLogin();
        if(item.xtype == "loginform"){
        	showLogin.show();
            showRegister.hide();
        }else if(item.xtype == "registerform") {
            showLogin.hide();
            showRegister.show();
        }else{
        	showRegister.hide();
        	showLogin.hide();
        }
    }
});