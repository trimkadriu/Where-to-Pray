Ext.define('KuTeFalem.model.MosqueMapStyle', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'mapTypeId', type: 'string'},
            {name: 'style', type: 'object'}
        ]
    }
});