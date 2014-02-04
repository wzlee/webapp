Ext.define('ksp.util.Config', {
    singleton : true,

    config : {
        client:null,
        location:null,
        token:null,
        data:[
    		{
        		lable:'账号',
        		value:'wzlee',
        		disclosure:true
    		},
    		{
        		lable:'我的宠物',
        		value:'收养:1,关注:10',
        		disclosure:true
    		},
    		{
        		lable:'邮箱绑定',
        		value:'未绑定',
        		disclosure:true
    		},
    		{
        		lable:'微博绑定',
        		value:'已绑定',
        		disclosure:true
    		},
    		{
        		lable:'版本信息',
        		value:'V 1.0',
        		disclosure:false
    		}
    	]
    },
    constructor : function(config) {
        this.initConfig(config);
    }
});