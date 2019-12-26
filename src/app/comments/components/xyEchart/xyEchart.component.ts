import { Component, AfterViewChecked, Input, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-xy-echart',
  templateUrl: './xyEchart.component.html',
  styleUrls: ['./xyEchart.component.scss']
})
export class XyEchart implements OnInit {
  @Input() ElementsByID;
  @Input() type = 'A'; // A 渐变折线图 B 线性函数点状图
  @Input() title; // 大标题
  @Input() color = 'rgba(23, 255, 243'; // 折线图主题色
  @Input() value =
    '[45, 32, 3, 34, 5, 36, 17, 28, 59, 51, 31, 92, 53, 54, 65, 26, 27, 38, 19, 50]';
  constructor() {}

  options: any;
  ngOnInit () {

    this.options = this.optionFn();
    // let that=this
    // setTimeout(function(){
    //   that.optionFn();
    // },1000)
  }
  optionFn() {
    // console.log(this.ElementsByID)
    // const myChart = echarts.init(document.getElementById(this.ElementsByID));

    let charts = {
      unit: ['(月)', '(%)'],
      name: '',
      lineX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      value: this.value
    };
    let color = this.color;
    let lineY = [];
    let data = {
      name: '',
      type: 'line',
      color: color + ')',
      smooth: true,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: color + ', 0.8)'
              },
              {
                offset: 0.8,
                color: color + ', 0.1)'
              }
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      symbol: 'emptyCircle',
      symbolSize: 5,
      emphasis: {
        show: true,
        checkpointStyle: {
          color: '#cccccc'
        }
      },
      markLine: {
        symbolSize:1,
        lineStyle:{
          color:'#ffffff',
          type:'solid',
        },
        data: [
          {
            name: '水平线',
            yAxis: 50
        },
        ]
    },
      data: charts.value
    };
    lineY.push(data);

    let options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: '40px',
        left: '2%',
        right: '36px',
        bottom: '10px',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: charts.unit[0],
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
          textStyle: {
            color: 'rgb(0,253,255,0.6)'
          },
          formatter: function(params) {
            return params.split(' ')[0];
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgb(0,253,255,0.6)'
          }
        }
      },
      yAxis: {
        name: charts.unit[1],
        type: 'value',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: 'rgb(0,253,255,0.6)'
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgb(23,255,243,0.3)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgb(0,253,255,0.6)'
          }
        }
      },

      series: lineY
    };
    // myChart.setOption(options);
    // var currentIndex = -1;
    // setInterval(function() {
    //   var dataLen = options.series[0].data.length;
    //   // 取消之前高亮的图形
    //   myChart.dispatchAction({
    //     type: 'downplay',
    //     seriesIndex: 0, //表示series中的第几个data数据循环展示
    //     dataIndex: currentIndex
    //   });
    //   currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
    //   // 高亮当前图形
    //   myChart.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: 0,
    //     dataIndex: currentIndex
    //   });
    //   // 显示 tooltip
    //   myChart.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex: currentIndex
    //   });
    // }, 1000);
    return options;
  }
}
