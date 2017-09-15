/**
 * Created by Administrator on 2017/9/15 0015.
 */
angular.module("searchModule",[])
    .controller("searchCtrl",['$scope',"$http","myService","$routeParams","$location",function($scope,$http,myService,$routeParams,$location){

        var page=$routeParams.page
        //每页显示的条数
        var count=10;
        //其实条数
        var start=(page-1)*count
        var totalPage=0;
//获取关键字
        var keyword=$routeParams.keyword;


        myService.myJsonp('https://api.douban.com/v2/movie/search',{
            start:start,
            count:count,
            q:keyword
        },function(res){
            $scope.result=res;
            console.log(res);
            totalPage=Math.ceil(res.total/count)
            $scope.$apply()
        })
        $scope.changePage=function(type){
            if(type=="prev"){
                //上一页
                page--;
                page= page<1?1:page


            }else{
                //下一页
                page++;
                page=page>totalPage?totalPage:page


            }
            $location.path("/search/"+page);
        }

    }])