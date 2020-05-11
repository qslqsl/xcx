import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: 250
  });
  canvas.setChart(chart);
  var option = {
    color: ["#FCA128", "#3598A5"],
    legend: {
      //data: ['A', 'B'],
      top: 195,
      left: 'center',
      z: 100,
      icon: 'circle'
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '6%',
      containLabel: true
    },
    tooltip: {    //点击图表是否显示内容
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],

      splitLine: {
        show: false     //控制是否显示网格
      },
      axisLabel: {
        color: '#666666',
        textStyle: {
          fontSize: 13    //控制字体大小
        }
      },
      axisLine: {
        show: true,    //是否显示x轴
        lineStyle: {
          opacity: '0.3',
        },
        onZero: true,
        //symbol: ['arrow', 'arrow'],    //x轴是否箭头显示
        //symbolSize: [5, 15]           //控制箭头大小
      },
      axisTick: {        //是否显示坐标刻度
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
        show: false     //控制是否显示网格
      },
      axisLabel: {
        formatter: '{value} 元',
        color: '#666666',
        textStyle: {
          fontSize: 13    //控制字体大小
        }
      },
      axisLine: {        //是否显示y轴
        show: true,
        lineStyle: {
          opacity: '0.3',
        }
      },
      axisTick: {        //是否显示坐标刻度
        show: false,
      },
    },
    series: [{
      name: '已平仓收益',
      type: 'line',      //柱状图为bar
      smooth: true,  //控制折现和曲线
      data: [78, 86, 150, 112, 128, 138, 150]
    }, {
      name: '当日收益',
      type: 'line',
      smooth: true,
      data: [44, 55, 88, 50, 65, 78, 82]
    }
      // {
      //     name: 'C',
      //     type: 'line',
      //     smooth: true,
      //     data: [20, 45, 26, 68, 37, 63, 28]
      // }
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