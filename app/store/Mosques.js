Ext.define('KuTeFalem.store.Mosques', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model: 'KuTeFalem.model.Mosque',
        proxy: {
            type: 'ajax',
            url: AppConfig.host + 'get/mosques.json',
            reader: {
                type: 'json'
            }
        }
    }
});