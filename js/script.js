var app = new Vue({
    el: "#app",
    data: {
        // 获取数据
        // lists: data,
        // 获取JSON数据
        lists: '',
        //网页缩略服务接口
        imgapi: 'https://blinky.nemui.org/shot/200x120?'
    },
    created: function () {
        this.getJSON();
    },
    methods: {
        getJSON() {
            this.$http.get("json/data.json").then((response) => {
                //响应成功回调
                response = response.body;
                //需要这样获取到数组
                //console.log(response.data);
                //把值赋给Vue实例data对象的lists
                this.lists = response.data;
            }, (response) => {
                // 响应错误回调
                console.log("获取不到数据");
            });
        }
    }
});

//滚动监听 scrollspy.js
$('body').scrollspy({ target: '#navbar-example' });
//滚动滚动条执行
window.onscroll = function () {
    //“钉”住某个元素 jQuery.Pin
    $(".pinned").pin({
        containerSelector: ".container",
        minWidth: 668
    });
};

//https://getbootstrap.com/docs/4.3/components/tooltips/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
