Ext.define('KuTeFalem.view.Menu', {
    extend: 'Ext.Menu',
    xtype: 'menu',
    requires: [
        'Ext.SegmentedButton', 'Ext.Label'
    ],

    config: {
        items: [
            {
                // Only to start the menu lower
                xtype: 'titlebar',
                docked: 'top',
                style: 'visibility:hidden'
            },
            {
                xtype: 'label',
                html: '<span style="color:white">' + getText('language') + '</span>'
            },
            {
                xtype: 'segmentedbutton',
                items: [
                    {
                        text: 'SQ',
                        style: 'margin: 0;',
                        iconCls: 'flag_sq',
                        iconMask: true
                    },
                    {
                        text: 'EN',
                        pressed: true,
                        style: 'margin: 0;',
                        iconCls: 'flag_en',
                        iconMask: true
                    }
                ]
            },
            {
                xtype: 'label',
                html: '<span style="color:white">' + getText('mapType') + '</span>'
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'left'
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                width: 84,
                                height: 48,
                                paddingRight: '3px',
                                src: 'resources/images/map_type_roadmap.png',
                                listeners: {
                                    tap: function(button, e, eOpts) {

                                    }
                                }
                            },
                            {
                                xtype: 'panel',
                                html: '<span style="color:white">' + getText('ROADMAP') + '</span>'
                            }
                        ]

                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                width: 84,
                                height: 48,
                                src: 'resources/images/map_type_earth.png',
                                listeners: {
                                    tap: function(button, e, eOpts) {

                                    }
                                }
                            },
                            {
                                xtype: 'panel',
                                html: '<span style="color:white">' + getText('EARTH') + '</span>'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});