import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: 250
  });
  canvas.setChart(chart);
  var option = {
    color: ["#FF6565"],
    legend: {
      //data: ['A', 'B', 'C', 'D'],
      top: 195,
      left: 'center',
      z: 100,
      icon: 'roundRect'
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '6%',
      containLabel: true
    },
    tooltip: { //点击图表是否显示内容
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

      splitLine: {
        show: false //控制是否显示网格
      },
      axisLabel: {
        color: '#666666',
        interval: 0,   //可以设置成 0 强制显示所有标签，也可以设置为auto
        textStyle: {
          fontSize: 13 //控制字体大小
        }
      },
      axisLine: {
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
    },
    yAxis: {
      x: 'center',
      type: 'value',
      //name: '数量/KG',
      min: 0,
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
    },
    series: [{
      name: '净值',
      type: 'bar', //柱状图为bar
      showBackground: true,
      data: [70, 90, 30, 65, 100, 50, 68, 144, 44, 68, 144, 30],
      label: {
        normal: {
          show: true,
          position: 'top',
          color: "#666666"
        }
      },
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