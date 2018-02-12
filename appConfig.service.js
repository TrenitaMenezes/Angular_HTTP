(function () {
    var app = angular.module("contactApp");
    function AppConfig(AppNameService) {
        this.name = AppNameService;
        this.author = "Trenita";
        this.builtDate = new Date().toDateString();
    }
    app.service("AppService", AppConfig);// new AppConfig()
})();
