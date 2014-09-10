Ext.define('KuTeFalem.config.Config', {
    singleton: true,

    config: {
        // USER SETTINGS
        // ========================
        language: 'sq',
        mapType: 'roadmap'
    },

    constructor: function(config) {
        this.initConfig(config);
        var language = localStorage.getItem('language');
        if(language != null) {
            this.setLanguage(language);
        }
        var mapType = localStorage.getItem('mapType');
        if(mapType != null) {
            this.setMapType(mapType);
        }
        return this;
    },

    getText: function(key) {
        var localeStore = Ext.getStore('localizationText');
        var text = null;
        var dataArray = localeStore.getData().items[0].data.texts;
        for(var i = 0; i < dataArray.length; i++) {
            if(dataArray[i][key] != undefined) {
                text = dataArray[i][key];
                break;
            }
        }
        return text;
    },

    getTextByLang: function(key, language) {
        var localeStore = Ext.getStore('localizationText');
        var text = null;
        var dataArray = localeStore.getData().items[0].data.texts;
        for(var i = 0; i < dataArray.length; i++) {
            if(dataArray[i][key] != undefined) {
                text = dataArray[i][key];
                break;
            }
        }
        return text;
    },

    setDefaultLanguage: function(language) {
        localStorage.setItem('language', language);
        this.config.language = language;
    },

    setDefaultMapType: function(mapType) {
        localStorage.setItem('mapType', mapType);
        this.config.mapType = mapType;
    }
});