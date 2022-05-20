/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('My.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice, sender) {
        if (choice === 'yes') {
            
        }
    },

    onAdd: function () {
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
    }, 

    onEdit: function (grid, rowIndex, colIndex) {
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
    },

    onDelete: function (grid, rowIndex, colIndex) {
        Ext.Msg.confirm('Delete', 'Are you sure?', function (choice) {
            if (choice === 'yes') {
                var store = grid.getStore();
                var del = store.remove(grid.getStore().getAt(rowIndex));
                store.sync();            
            }
        });
    },
    

});
