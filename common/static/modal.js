/**
 * Created by pc on 2016/10/21.
 */
$.extend({
    modal: {
        alert: function (message, type, callback) {
            if (type == undefined) {
                type = 0;
            }
            layer.alert(message, {icon: type, title:"提示"}, function (index) {
                layer.close(index)
                if (callback) {
                    callback();
                }
            });
        },
        info: function (message) {
            this.alert(message, 0);
        },
        success: function (message) {
            this.alert(message, 1);
        },
        error: function (message) {
            this.alert(message, 2);
        },
        confirm: function (message, ok, cancel) {
            layer.confirm(message, {icon: 3, title:'提示'}, function(index){
                ok();
                layer.close(index);
            });
        },
        tips: function (message) {
            layer.msg(message);
        },
        loading:function () {
            return layer.load();
        },
        load: function (url, message, data) {
            var loading = this.loading();
            $.ajax({
                url: url,
                data:data,
                type: data ? 'post' : 'get',
                success: function (str) {
                    layer.close(loading);
                    index = layer.open({
                        type: 1,
                        title:message,
                        area:['900px'],
                        content: '<div class="container-fluid">' + str + '</div>',
                    });
                }
            });
        },
        login: function() {
            this.load(LOGIN_URL, '登录');
        },
        close: function (index) {
            if (index != undefined) {
                layer.close(index);
            } else {
                layer.closeAll();
            }
        }
    }
});
window.alert = $.modal.alert;