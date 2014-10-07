Ext.define('KuTeFalem.view.Menu', {
    extend: 'Ext.Menu',
    xtype: 'menu',

    config: {
        citems: [
            {
                text: 'Settings',
                iconCls: 'settings'
            },
            {
                text: 'New Item',
                iconCls: 'compose'
            },
            {
                text: 'Star',
                iconCls: 'star'
            }
        ]
    }
});