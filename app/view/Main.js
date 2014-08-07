Ext.define('KuTeFalem.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    id: 'mainPanel',

    requires: [
        'Ext.TitleBar', 'KuTeFalem.view.MosqueMap'
    ],

    config: {
        hideAnimation: 'slide',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        align: 'left',
                        xtype: 'image',
                        width: 218,
                        height: 44,
                        src: 'http://dummyimage.com/218x44/ffffff/00065c.png&text=LOGO'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'search',
                        align: 'right',
                        handler: function(e, eOpts) {
                            Ext.getCmp('mainPanel').hide();
                            Ext.Viewport.add(Ext.create('KuTeFalem.view.Search'))
                            Ext.getCmp('searchList').show();
                        }
                    }
                ]
            },
            {
                xtype: 'mosquemap'
            },
            {
                xtype: 'button',
                iconCls: 'locate',
                ui: 'action',
                bottom: 20,
                left: -5
            }
        ]
    }
});