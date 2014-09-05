Ext.define('KuTeFalem.model.MosqueMapStyle', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'mapTypeId', type: 'string'},
            {name: 'options', type: 'object'}
        ]
    }
});