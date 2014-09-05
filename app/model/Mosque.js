Ext.define('KuTeFalem.model.Mosque', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'mosqueName', type: 'string' },
            { name: 'address', type: 'string' },
            { name: 'imamName', type: 'string' },
            { name: 'mosqueInfo', type: 'string' },
            { name: 'latitude', type: 'float' },
            { name: 'longitude', type: 'float' },
        ]
    }
});