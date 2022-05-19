/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'My.Application',

    name: 'My',

    requires: [
        // This will automatically load all classes in the My namespace
        // so that application classes do not need to require each other.
        'My.*'
    ],

    // The name of the initial view to create.
    mainView: 'My.view.main.Main'
});
