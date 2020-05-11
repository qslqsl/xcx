import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: 250
  });
  canvas.setChart(chart);
  var option = {
    color: ["#FCA128", "#298E15", "#3598A5", "#F04864"],
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
      data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],

      splitLine: {
        show: false //控制是否显示网格
      },
      axisLabel: {
        color: '#666666',
        textStyle: {
          fontSize: 13    //控制字体大小
        }
      },
      axisLine: {
        show: true, //是否显示x轴
        lineStyle: {
          opacity: '0.3',
        },
        onZero: true,
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
      max: 200,
      splitLine: {
        show: false //控制是否显示网格
      },
      axisLabel: {
        formatter: '{value} 元',
        color: '#666666',
        textStyle: {
          fontSize: 13    //控制字体大小
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
      type: 'line', //柱状图为bar
      smooth: false, //控制折现和曲线
      data: [90, 80, 86, 140, 124, 130, 190]
    },
    {
      name: '余额',
      type: 'line',
      smooth: false, //控制折现和曲线
      data: [92, 100, 25, 40, 55, 10, 25]
    },
    {
      name: '出金',
      type: 'line',
      smooth: false, //控制折现和曲线
      data: [78, 40, 70, 95, 48, 55, 130]
    },
    {
      name: '入金',
      type: 'line',
      smooth: false, //控制折现和曲线
      data: [20, 40, 86, 115, 65, 72, 88]
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