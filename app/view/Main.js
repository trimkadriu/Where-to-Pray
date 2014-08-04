Ext.define('KuTeFalem.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar', 'KuTeFalem.view.MosqueMap'
    ],
    config: {
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
                        src: 'http://dummyimage.com/218x44/ffffff/00065c.png&text=Ku+te+falem+?'
                    },
                    {
                        iconCls: 'search',
                        align: 'right'
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