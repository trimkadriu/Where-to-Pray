Ext.define('KuTeFalem.config.Config', {
    singleton: true,

    config: {
        // USER SETTINGS
        // ========================
        language: 'sq',
        mapType: 'roadmap'
    },

    LANGUAGE: {
        // Language ENUMS
        // ========================
        EN: 'en',
        SQ: 'sq'
    },

    // MapTypes ENUMS
    // ========================
    MAPTYPE: google.maps.MapTypeId,

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
        var dataArray = Ext.application['locale_' + this.getLanguage()];
        for(var i = 0; i < dataArray.length; i++) {
            if(dataArray[i][key] != undefined) {
                return dataArray[i][key];
            }
        }
        return null;
    },

    getTextByLang: function(key, language) {
        if(language != this.LANGUAGE.EN && language != this.LANGUAGE.SQ) return null;
        var dataArray = Ext.application['locale_' + language];
        for(var i = 0; i < dataArray.length; i++) {
            if(dataArray[i][key] != undefined) {
                return dataArray[i][key];
            }
        }
        return null;
    },

    setDefaultLanguage: function(language) {
        if(language != this.LANGUAGE.EN && language != this.LANGUAGE.SQ) return;
        localStorage.setItem('language', language);
        this.setLanguage = language;
    },

    setDefaultMapType: function(mapType) {
        if(mapType != this.MAPTYPE.HYBRID && mapType != this.MAPTYPE.ROADMAP
            && mapType != this.MAPTYPE.SATELLITE && mapType != this.MAPTYPE.TERRAIN) return;
        localStorage.setItem('mapType', mapType);
        this.setMapType = mapType;
    }
});