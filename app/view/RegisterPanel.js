Ext.define('ksp.view.RegisterPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'registerform',

    config: {
    	title:'用户注册',
        margin:10,
        items: [
            {
                xtype: 'fieldset',
                title: '',
        		instructions: '请填写真实信息!',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'userName',
                        label: '账号:',
                        labelWrap:true,
                        placeHolder:'请输入账号...',
                        required:true
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name: 'password',
                        label: '密码:',
                        labelWrap:true,
                        placeHolder:'请输入密码...',
                        required:true
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name: 'password',
                        label: '确认密码:',
                        labelWrap:true,
                        placeHolder:'请再次输入密码...',
                        required:true
                    }
                ]
            },
            {
            	xtype:'button',
            	id:'doRegister',
            	text:'提交'
            }
        ]
    }
});
