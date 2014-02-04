Ext.define('ksp.view.LoginPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

    config: {
    	title:'用户登陆',
     	margin:10,
        items: [
            {
             	xtype: 'fieldset',
                title: '',
        		instructions: '忘记密码请联系管理员!',
                defaults: {
                    labelWidth: '35%'
                },
                items:[
                    {
                        xtype: 'textfield',
                        name: 'userName',
                        label: '账号:',
                        labelWrap:true,
                        placeHolder:'请输入登录账号...',
                        required:true
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name: 'password',
                        label: '密码:',
                        labelWrap:true,
                        placeHolder:'请输入登录密码...',
                        required:true
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'keepLogin',
                        label: '保持登录',
                        checked: true
                    }
                ]
            },
            {
            	xtype:'button',
            	ui:'normal',
            	id:'doLogin',
            	text:'登录'
            }
        ]
    }
});
