/**
 * This view is an example list of people.
 */
Ext.define('My.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'My.store.Personnel'
    ],

    title: 'Personnel',
    reference: 'personelGrid',

    header:{
         items:[{
            xtype:'button',
            width: 100,
            text: '<span class="x-fa fa-plus" style="color:black;font-size:15px"></span>&nbsp;<b style="color:black;">Add</b>',
            cls: 'addBtn',
            style: {
                'background-color': 'white',
            },
            handler: function () {
                var myForm = new Ext.form.Panel({
                    xtype: 'form-xml',
                    width: 400,
                    height: 290,
                    
                    title: 'Add',
                    floating: true,
                    closable : true,
                    fullscreen: true,
                    modal: true,
                    items: [{
                        xtype: 'fieldset',
                        title: 'Contact Information',
                        defaultType: 'textfield',
                        margin: '0 10 10 10',
                        items: [ {
                            fieldLabel: 'Name',
                            emptyText: 'Name',
                            width: 340,
                            name: 'name',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Email',
                            emptyText: 'email@mail.com',
                            width: 340,
                            name: 'email',
                            vtype: 'email',
                            allowBlank: false
                        }, 
                        {
                            fieldLabel: 'Phone number',
                            emptyText: 'xxx-xxx-xxxx',
                            width: 340,
                            name: 'phone',
                            xtype: 'numberfield',
                            hideTrigger: true,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false,
                            allowBlank: false
                        }]
                    
                    }],
                    buttons: [{
                        text: 'Add',
                        disabled: true,
                        formBind: true,
                        handler: function () {
                            var values = myForm.getValues();
                            var store =  Ext.getStore('personnel');
                            var add = store.insert(0, {
                                name : values.name,
                                email: values.email,
                                phone: values.phone,
                            });
                            myForm.destroy();
                            store.sync();
                        }
                    }]
                        
                }).show();
            }
             
         }]    
     },

    store: {
        type: 'personnel'
    },

    autoSync: true,
    autoLoad: true,
    columnLines: true,
    bodyPadding: true,

    columns: [
        { xtype: 'rownumberer' },
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        {
            text: "Actions",
            xtype:'actioncolumn',
            bodyPadding: 5,
            width:100,
            flex:1,
            items: [{
                iconCls: 'x-fa fa-pen',  
                tooltip: 'Edit',
                handler: function (grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex)
                    var myForm = new Ext.form.Panel({
                        xtype: 'form-xml',
                        width: 400,
                        moveable: true,
                        height: 290,
                        title: 'Edit',
                        floating: true,
                        closable : true,
                        modal: true,
                        items: [{
                            xtype: 'fieldset',
                            title: 'Contact Information',
                            defaultType: 'textfield',
                            margin: '0 10 10 10',
                            items: [ {
                                fieldLabel: 'Name',
                                emptyText: 'Name',
                                width: 340,
                                bind: rec.get('name'),
                                name: 'name',
                                allowBlank: false
                            },
                            {
                                fieldLabel: 'Email',
                                emptyText: 'email@mail.com',
                                width: 340,
                                name: 'email',
                                bind: rec.get('email'),
                                vtype: 'email',
                                allowBlank: false
                            }, 
                            {
                                fieldLabel: 'Phone number',
                                bind: rec.get('phone'),
                                width: 340,
                                xtype: 'numberfield',
                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,
                                name: 'phone',
                                allowBlank: false
                            }]
                        
                            
                        }],
                        buttons: [{
                            text: 'Edit',
                            disabled: true,
                            formBind: true,
                            handler: function () {
                                var values = myForm.getValues();
                                var edit = rec.set({
                                    name : values.name,
                                    email: values.email,
                                    phone: values.phone,
                                });
                                myForm.destroy();
                                store.sync();
                            }
                        }]
                            
                    }).show();
                }
                
            },{
                disabled: true
            },{
                iconCls: 'x-fa fa-trash',
                tooltip: 'Delete',
                handler: function (grid, rowIndex, colIndex) {
                    Ext.Msg.confirm('Delete', 'Are you sure?', function (choice) {
                        if (choice === 'yes') {
                            var store = grid.getStore();
                            var del = store.remove(grid.getStore().getAt(rowIndex));
                            store.sync();            
                        }
                    });
                },
                
            }],
        }
    ],

    // listeners: {
    //     select: 'onItemSelected'
    // }
});

