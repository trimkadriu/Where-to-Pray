Ext.define('KuTeFalem.store.LocalizationText', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        storeId: 'localizationText',
        model: 'KuTeFalem.model.LocalizationText',
        proxy: {
            type: 'ajax',
            url: 'localization/localization_en.json',
            reader: {
                type: 'json'
            }
        },

        listeners: {
            beforeload: function(self, operation, opts) {
                console.log(operation);
            }
        }
    }
});