Ext.define('ksp.view.UcenterForm', {
    extend: 'Ext.form.Panel',
    xtype:'ucenterform',

//    requires: [
//        'Ext.form.FieldSet',
//        'Ext.field.Number',
//        'Ext.field.Spinner',
//        'Ext.field.Password',
//        'Ext.field.Email',
//        'Ext.field.Url',
//        'Ext.field.DatePicker',
//        'Ext.field.Select',
//        'Ext.field.Hidden',
//        'Ext.field.Radio'
//    ],
    id: 'basicform',
    config: {
    	title:'用户中心',
        items: [
            {
                xtype: 'fieldset',
                id: 'fieldset1',
                title: '个人信息',
//                instructions: 'Please enter the information above.',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
                    {
                        xtype         : 'textfield',
                        name          : 'name',
                        label         : '账号',
                        placeHolder   : '登陆账号...',
                        required	  : true,
                        autoCapitalize: true,
                        required      : true,
                        clearIcon     : true
                    },
                    {
                        xtype: 'passwordfield',
                        name : 'password',
                        label: '密码',
                        required	  : true,
                        placeHolder   : '登陆密码...'
                    },
                    {
                        xtype      : 'emailfield',
                        name       : 'email',
                        label      : '邮箱',
                        required   : true,
                        placeHolder: '联系邮箱',
                        clearIcon  : true
                    },
                    {
                        xtype      : 'urlfield',
                        name       : 'url',
                        label      : '网址',
                        required   : true,
                        placeHolder: '个人网址...',
                        clearIcon  : true
                    },
                    {
                        xtype      : 'spinnerfield',
                        name       : 'spinner',
                        label      : '网点',
                        minValue   : 1,
                        maxValue   : 10,
                        stepValue  : 1,
                        cycle      : true
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'vip',
                        label: 'VIP'
                    },
                    {
                        xtype: 'datepickerfield',
                        destroyPickerOnHide: true,
                        name : 'date',
                        label: '上线日期',
                        required: true,
                        value: new Date(),
                        picker: {
                            yearFrom: 1990
                        }
                    },
                    {
                        xtype: 'selectfield',
                        name : 'rank',
                        label: '规模',
                        options: [
                            {
                                text : '大型生产基地',
                                value: 'master'
                            },
                            {
                                text : '中型工厂',
                                value: 'journeyman'
                            },
                            {
                                text : '小型加工厂',
                                value: 'apprentice'
                            }
                        ]
                    },
                    {
                        xtype: 'textareafield',
                        name : 'bio',
                        label: '简介'
                    }
                ]
            },
            {
                xtype: 'container',
                defaults: {
                    xtype: 'button',
                    style: 'margin: .5em',
                    flex : 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        text: '锁定',
                        scope: this,
                        hasDisabled: false,
                        handler: function(btn){
                            var fieldset1 = Ext.getCmp('fieldset1');

                            if (btn.hasDisabled) {
                                fieldset1.enable();
                                btn.hasDisabled = false;
                                btn.setText('锁定');
                            } else {
                                fieldset1.disable();
                                btn.hasDisabled = true;
                                btn.setText('开启');
                            }
                        }
                    },
                    {
                        text: '重置',
                        ui:'decline',
                        handler: function(){
                            Ext.getCmp('basicform').reset();
                        }
                    }
                ]
            }
        ]
    }
});
