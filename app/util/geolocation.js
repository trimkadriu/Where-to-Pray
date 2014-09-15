Ext.define('KuTeFalem.util.Geolocation', {
    singleton: true,

    constructor: function(config) {
        this.initConfig(config);
        return this;
    },

    getCurrentPosition: function(successCallBack, failedCallBack) {
        var failFunction = this.getPositionFailed;
        if(failedCallBack != undefined)
            failFunction = failedCallBack;
        Ext.device.Geolocation.getCurrentPosition({
            success: successCallBack,
            failure: failFunction
        })
    },

    getPositionFailed: function() {
        Ext.device.Notification.show({
            title: AppConfig.getText('error'),
            message: AppConfig.getText('geoLocationIsNotAvailable'),
            buttons: [AppConfig.getText('ok')],
            callback: Ext.emptyFn()
        });
    },

    watchPosition: function(frequency, successCallBack, failureCallBack) {
        Ext.device.GeolocationwatchPosition({
            frequency: frequency,
            callback: successCallBack,
            failure: failureCallBack
        });
    }
});