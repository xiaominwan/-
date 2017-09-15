/**
 * Created by Administrator on 2017/9/15 0015.
 */
angular.module("myServiceModule", [])
    .service("myService",[ function () {
        this.myJsonp = function (url,data,callback) {
            var fnName = "myJsop_" + Math.random().toString().replace(".", "");
            window[fnName] = callback;
            var querystring = "";
            for (var attr in data) {
                querystring += attr + "=" + data[attr] + "&";
            }
            var script = document.createElement("script");
            script.src = url + "?" + querystring + "callback="+fnName;
            script.onload=function(){
                document.body.removeChild(script);

            }
        document.body.appendChild(script);
        }
    }])