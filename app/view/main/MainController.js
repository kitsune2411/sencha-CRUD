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

    // onDelete: function (sender, record) {
    //     Ext.Msg.confirm('Delete', 'Are you sure?', function (choice) {
    //         if (choice === 'yes') {
    //             console.log(record)
    //             record.
    //         }
    //     });
    // },
    

});
