Ext.define('KuTeFalem.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    id: 'mainPanel',

    requires: [
        'Ext.TitleBar', 'Ext.Img', 'KuTeFalem.view.MosqueMap', 'KuTeFalem.view.Menu'
    ],

    config: {
        hideAnimation: 'slide',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                zIndex: 100,
                items: [
                    {
                        align: 'left',
                        xtype: 'image',
                        width: 218,
                        height: 44,
                        src: 'resources/images/logo.png',
                        listeners: {
                            tap: function(button, e, eOpts) {
                                Ext.Viewport.toggleMenu('left');
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        iconCls: 'search',
                        align: 'right',
                        listeners: {
                            tap: function (button, e, eOpts) {
                                Ext.Viewport.hideMenu('left');
                                Ext.getCmp('mainPanel').hide();
                                Ext.Viewport.add(Ext.create('KuTeFalem.view.Search'))
                                Ext.getCmp('searchList').show();
                            }
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
                right: 20,
                listeners: {
                    tap: function (button, e, eOpts) {
                        console.log("IMPLEMENT LOCATE BUTTON");
                    }
                }
            }
        ],

        listeners: {
            initialize: function() {
                var menu = Ext.create('KuTeFalem.view.Menu');
                Ext.Viewport.setMenu(menu, {
                    side: 'left',
                    reveal: false
                });
            }
        }
    }
});