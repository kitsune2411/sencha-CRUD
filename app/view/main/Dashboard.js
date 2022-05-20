Ext.define('My.view.main.Dashboard',{
    extend  : 'Ext.Container',
    xtype   : 'dashboard',

    requires : [
        'Ext.layout.container.Table',
        'My.view.main.MainModel',
    ],

    cls: 'panels-container',

    items: [
        {
        xtype: 'panel',
        title: 'LoremIpsum',
        width: 800,

        tools: [
            { iconCls: 'x-fa fa-wrench' },
        ],

            bind: {
                html: '{loremIpsum}'
            }


        },{
            
        }
    ]



})