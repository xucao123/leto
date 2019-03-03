// 实现表格：
$(function(){
   
    var echarts_left= echarts.init(document.getElementById('echarts_left'));

    // 指定图表的配置项和数据
    var option1 = {
        // 大标题
        title: {
            text: '2019年注册人数'
        },
        // 提示框组件
        tooltip: {},
        // 图例:图例需要哦和数据项中的name一一对应
        legend: {
            data:['销量' ,'人数']
        },
        // x轴的刻度
        xAxis: {
            data: ["一月","二月","三月","四月",'五月',"六月"]
        },
        // y轴的刻度：是根据数据自己动态生成的
        yAxis: {},
        // 数据项列表:其中的type用来配置图的类型
        // bar柱状图 line折线图 
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        },
        {
            name:'人数',
            type:'bar',//bar代表柱状图，line代表折线图
            data:[200,300,150,470,800,1000]
        }
    ]
    };


    // 使用刚指定的配置项和数据显示图表。
    echarts_left.setOption(option1);

    var echarts_right= echarts.init(document.getElementById('echarts_right'));
    var option2 = {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    echarts_right.setOption(option2);


})