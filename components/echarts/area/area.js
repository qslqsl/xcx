import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: 250
  });
  canvas.setChart(chart);
  var option = {
    //color: ["#F04864","#3598A5"],
    legend: {
      //data: ['A', 'B', 'C', 'D'],
      top: 195,
      left: 'center',
      z: 100,
      icon: 'triangle'
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '6%',
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis',
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      splitLine: {
        show: false //控制是否显示网格
      },
      axisLabel: {
        color: '#666666',
        interval: 0, //可以设置成 0 强制显示所有标签，也可以设置为auto
        textStyle: {
          fontSize: 13 //控制字体大小
        }
      },
      axisLine: {
        onZero: false,
        show: true, //是否显示x轴
        lineStyle: {
          opacity: '0.3',
        },
        //onZero: true,
        //symbol: ['arrow', 'arrow'],    //x轴是否箭头显示
        //symbolSize: [5, 15]           //控制箭头大小
      },
      axisTick: { //是否显示坐标刻度
        show: false
      },
    }],
    yAxis: [{
      x: 'center',
      type: 'value',
      //name: '数量/KG',
      min: -30,
      max: 180,
      splitLine: {
        show: false //控制是否显示网格
      },
      axisLabel: {
        formatter: '{value} 元',
        color: '#666666',
        textStyle: {
          fontSize: 13 //控制字体大小
        }
      },
      axisLine: { //是否显示y轴
        show: true,
        lineStyle: {
          opacity: '0.3',
        }
      },
      axisTick: { //是否显示坐标刻度
        show: false,
      },
    }],
    series: [{
      name: '亏损',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#F04864', //改变折线点的颜色
          lineStyle: {
            color: '#F04864' //改变折线颜色
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#DCC9D1',
          origin :'start'
        } //改变区域颜色
      },
      smooth: true, //是否为曲线
      data: [-15, -20, -10, -15, 5, -25, -10, -25, -10, -15, 5, -25]
    },
    {
      name: '收益',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#3598A5', //改变折线点的颜色
          lineStyle: {
            color: '#3598A5' //改变折线颜色
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#D7EAED',
          origin: 'start'
        } //改变区域颜色
      },
      smooth: true,
      data: [40, 50, 35, 40, 55, 40, 35, 45, 55, 50, 35, 50]
    }
    ]
  };

  chart.setOption(option);
  return chart
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  }
});