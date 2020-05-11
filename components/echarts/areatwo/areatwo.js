import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: 250
  });
  canvas.setChart(chart);
  var option = {
    //color: ["#10AB81", "#FF6565"],
    legend: {
      //data: ['A', 'B', 'C', 'D'],
      top: 195,
      left: 'center',
      z: 100,
      icon: 'triangle',
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
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
      splitLine: {
        show: false //控制是否显示网格
      },
      axisLabel: {
        color: '#666666',
        interval: 'auto',   //可以设置成 0 强制显示所有标签，也可以设置为auto
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

      },
      axisTick: { //是否显示坐标刻度
        show: false
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'solid',
        },
      },
      min: -60,
      max: 80,
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
      axisPointer: {
        snap: true
      }
    },
    series: [
      {
        name: '盈利',
        type: 'line',
        areaStyle: {},
        smooth: true,
        itemStyle: {
          normal: {
            color: '#10AB81', //改变折线点的颜色
            lineStyle: {
              color: '#10AB81' //改变折线颜色
            }
          }
        },
        areaStyle: {
          normal: {
            color: '#D5F0E9',
            origin: 'start'
          } //改变区域颜色
        },
        data: [50, 45, 35, 45, 55, 56, 50, 45, 64, 50, 55, 66, 44, 54, 67, 60, 66, 55, 45, 60],
      },
      {
        name: '亏损',
        type: 'line',
        smooth: true,
        data: [-30, -35, -55, -35, -55, -35, -30, -40, -20, -35, -40, -35, -45, -35, -40, -50, -45, -40, -55, -35],
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