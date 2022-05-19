Ext.define('My.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    storeId: "personnel",

    model: 'My.model.Personnel',

    autoSync: true,
    autoLoad: true,

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: '081245124512' },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: '085451245123' },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: '082524612532' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: '0894512526546' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
