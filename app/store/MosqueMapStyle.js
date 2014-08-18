Ext.define('KuTeFalem.store.MosqueMapStyle', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model: 'KuTeFalem.model.MosqueMapStyle',
        proxy: {
            type: 'ajax',
            url: 'data/mosque.map-style.json',
            reader: {
                type: 'json'
            }
        }
    }
});