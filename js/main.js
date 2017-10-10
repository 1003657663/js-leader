require(['init'], function (init) {
    var _config = {
        'useDefaultStyle': true,
        'texts': [],
        'nextButtonCallBack': function (e) {

        },
        preButtonCallBack: function (e) {

        },
        endButtonCallBack: function (e) {

        },
        everyAnimationCallBack: function () {

        }
    };

    //把外部的Leader保存下来，解决冲突
    var _leader;
    if (window.Leader) {
        _leader = window.Leader;
    }
    var Leader = {
        setConfig: function (config) {
            if (typeof config == "object") {
                _config = config;
            }
        },
        setTexts: function (Texts) {
            if (Array.isArray(Texts)) {
                _config.texts = Texts;
            }
        },
        show: function () {
            init(_config).firstShow(_config);//返回初始化之后的控制接口
        },
        noConflict: function () {
            window.Leader = _leader;
            return Leader;
        }
    };
    window.Leader = Leader;
});