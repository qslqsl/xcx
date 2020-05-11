import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();

var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';


// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
  ['14:45', 2320.26, 2320.26, 2287.3, 2362.94],
  ['15:45', 2300, 2291.3, 2288.26, 2308.38],
  ['16:45', 2295.35, 2346.5, 2295.35, 2346.92],
  ['17:45', 2347.22, 2358.98, 2337.35, 2363.8],
  ['18:45', 2360.75, 2382.48, 2347.89, 2383.76],
  ['14:45', 2383.43, 2385.42, 2371.23, 2391.82],
  ['15:45', 2377.41, 2419.02, 2369.57, 2421.15],
  ['16:45', 2425.92, 2428.15, 2417.58, 2440.38],
  ['17:45', 2411, 2433.13, 2403.3, 2437.42],
  ['18:45', 2432.68, 2434.48, 2427.7, 2441.73],
  ['14:45', 2430.69, 2418.53, 2394.22, 2433.89],
  ['15:45', 2416.62, 2432.4, 2414.4, 2443.03],
  ['16:45', 2441.91, 2421.56, 2415.43, 2444.8],
  ['17:45', 2420.26, 2382.91, 2373.53, 2427.07],
  ['18:45', 2383.49, 2397.18, 2370.61, 2397.94],
  ['14:45', 2378.82, 2325.95, 2309.17, 2378.82],
  ['15:45', 2322.94, 2314.16, 2308.76, 2330.88],
  ['16:45', 2320.62, 2325.82, 2315.01, 2338.78],
  ['17:45', 2313.74, 2293.34, 2289.89, 2340.71],
  ['18:45', 2297.77, 2313.22, 2292.03, 2324.63],
  ['14:45', 2322.32, 2365.59, 2308.92, 2366.16],
  ['15:45', 2364.54, 2359.51, 2330.86, 2369.65],
  ['16:45', 2332.08, 2273.4, 2259.25, 2333.54],
  ['17:45', 2274.81, 2326.31, 2270.1, 2328.14],
  ['18:45', 2333.61, 2347.18, 2321.6, 2351.44],
  ['14:45', 2340.44, 2324.29, 2304.27, 2352.02],
  ['15:45', 2326.42, 2318.61, 2314.59, 2333.67],
  ['16:45', 2314.68, 2310.59, 2296.58, 2320.96],
  ['17:45', 2309.16, 2286.6, 2264.83, 2333.29],
]);
function splitData(rawData) {
  var categoryData = [];
  var values = []
  for (var i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i])
  }
  return {
    categoryData: categoryData,
    values: values
  };
}

function calculateMA(dayCount) {
  var result = [];
  for (var i = 0, len = data0.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += data0.values[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}


function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: 375,
    height: 250
  });
  canvas.setChart(chart);
  var option = {
    tooltip: {
      show: false,
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      
    },
    grid: {
      left: '12%',
      right: '5%',
      top: '6%'
    },
    xAxis: {
      type: 'category',
      data: data0.categoryData,
      scale: true,
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax',
      splitLine: {
        show: false     //控制是否显示网格
      },
      axisLabel: {
        color: '#666666',
        textStyle: {
          fontSize: 12    //控制字体大小
        }
      },
      axisLine: {
        show: true,    //是否显示x轴
        lineStyle: {
          opacity: '0.3',
        },
        onZero: true,
      },
      axisTick: {        //是否显示坐标刻度
        show: false
      },
    },
    yAxis: {
      scale: true,
      splitArea: {
        show: true
      },
      splitLine: {
        show: false     //控制是否显示网格
      },
      axisLabel: {
        formatter: '{value}',
        color: '#666666'
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
    dataZoom: [
      {
        type: 'inside',
        start: 30,
        end: 100
      },
      {
        show: true,
        type: 'slider',
        top: '100%',
        start: 100,
        end: 100
      }
    ],
    series: [
      {
        //name: '日K',
        type: 'candlestick',
        data: data0.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor
        },
        markLine: {
          symbol: ['none', 'none'],
          data: [
            {
              name: 'min line on close',
              type: 'min',
              valueDim: 'close'
            },
            {
              name: 'max line on close',
              type: 'max',
              valueDim: 'close'
            }
          ]
        }
      },
      {
        type: 'line',
        data: calculateMA(5),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        type: 'line',
        data: calculateMA(10),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        type: 'line',
        data: calculateMA(20),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        type: 'line',
        data: calculateMA(30),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },

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