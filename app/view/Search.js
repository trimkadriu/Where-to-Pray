Ext.define('KuTeFalem.view.Search', {
    extend: 'Ext.Panel',
    xtype: 'searchlist',
    id: 'searchList',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        hideAnimation: 'slide',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'searchfield',
                        flex: 3,
                        placeHolder: 'Kerko...',
                        name: 'search'
                    }
                ]
            },
            {
                xtype: 'list',
                fullscreen: true,
                itemTpl: '{title}',
                data: [
                    { title: 'Item 1' },
                    { title: 'Item 2' },
                    { title: 'Item 3' },
                    { title: 'Item 4' }
                ]
            }
        ]
    }
});