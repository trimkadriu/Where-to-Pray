Ext.define('KuTeFalem.view.MosqueMap', {
    extend: 'Ext.Map',
    xtype: 'mosquemap',
    config: {
        width: '100%',
        height: '100%',
        centered: true,
        items: [{
            useCurrentLocation: false,
            mapOptions:{
                zoom: 18
                //center: 42.6503466, 21.1522471,
            }
        }]
    }
});