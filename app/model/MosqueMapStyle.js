Ext.define('KuTeFalem.model.MosqueMapStyle', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'mapOptions', type: 'object'},
            {name: 'circleOptions', type: 'object'}
        ]
    }
});