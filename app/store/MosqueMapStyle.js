Ext.define('KuTeFalem.store.MosqueMapStyle', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model: 'KuTeFalem.model.MosqueMapStyle',
        proxy: {
            type: 'ajax',
            url: 'app/data/MosqueMapStyle.json',
            reader: {
                type: 'json'
            }
        }
    }
});