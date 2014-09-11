/*
    KU TE FALEM v1.0

    @Author: Trim Kadriu
    @Email: trim.kadriu@gmail.com
    ============================================
*/
Ext.require(['Ext.device.Geolocation', 'Ext.device.Connection', 'Ext.device.Notification']);

Ext.application({
    name: 'KuTeFalem',

    requires: [
        'Ext.MessageBox', 'KuTeFalem.util.Geolocation', 'KuTeFalem.config.Config'
    ],

    views: [
        'Main', 'MosqueMap', 'Search'
    ],

    models: [
        'MosqueMapStyle'
    ],

    stores: [
        'MosqueMapStyle'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Load application config
        AppConfig = KuTeFalem.config.Config;

        // Load GeoLocation object with application initialization
        GeoLocation = KuTeFalem.util.Geolocation;

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('KuTeFalem.view.Main'));
    },

    restartApplication: function() {
        window.location.reload();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});