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
                id: 'sbtnChooseLanguage',
                items: [
                    {
                        text: 'SQ',
                        style: 'margin: 0;',
                        iconCls: 'flag_sq',
                        iconMask: true,
                        listeners: {
                            tap: function(button, e, eOpts) {
                                AppConfig.setDefaultLanguage('sq');
                            }
                        }
                    },
                    {
                        text: 'EN',
                        pressed: true,
                        style: 'margin: 0;',
                        iconCls: 'flag_en',
                        iconMask: true,
                        listeners: {
                            tap: function(button, e, eOpts) {
                                AppConfig.setDefaultLanguage('en');
                            }
                        }
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
                                        AppConfig.setDefaultMapType('roadmap');
                                    }
                                }
                            },
                            {
                                xtype: 'panel',
                                id: 'btnMapTypeRoadmap',
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
                                        AppConfig.setDefaultMapType('hybrid');
                                    }
                                }
                            },
                            {
                                xtype: 'panel',
                                id: 'btnMapTypeHybrid',
                                html: '<span style="color:white">' + getText('HYBRID') + '</span>'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        // Focus default language & map type
        var sbtnChooseLanguage = Ext.getCmp('sbtnChooseLanguage');
        if (AppConfig.getLanguage() === 'sq') {
            sbtnChooseLanguage.setPressedButtons(0);
        }
        else if (AppConfig.getLanguage() === 'en') {
            sbtnChooseLanguage.setPressedButtons(1);
        }

        // Focus default map type
        var btnMapTypeHybrid = Ext.getCmp('btnMapTypeHybrid');
        var btnMapTypeRoadmap = Ext.getCmp('btnMapTypeRoadmap');
        if (AppConfig.getMapType() === 'roadmap') {
            btnMapTypeRoadmap.addCls('selectedMap');
            btnMapTypeHybrid.removeCls('selectedMap');
            btnMapTypeRoadmap.setStyle('text-decoration: underline; color: red;');
            btnMapTypeHybrid.setStyle('text-decoration: none; color: white;');
        }
        else if (AppConfig.getMapType() === 'hybrid') {
            btnMapTypeRoadmap.removeCls('selectedMap');
            btnMapTypeHybrid.addCls('selectedMap');
            btnMapTypeRoadmap.setStyle('text-decoration: none; color: white;');
            btnMapTypeHybrid.setStyle('text-decoration: underline; color: red;');
        }
    }
});