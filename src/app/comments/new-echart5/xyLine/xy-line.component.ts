import { Component, OnInit, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-xy-line',
  templateUrl: './xy-line.component.html',
  styleUrls: ['./xy-line.component.scss']
})
export class XyLineComponent implements OnInit {
  @Input() type = 'A'; // A 折线图 B 柱状图 S 散点圆球图
  @Input() title; // 大标题
  @Input() dw; // 单位
  @Input() legend = true; // 是否显示右上角按钮
  @Input() color = 'rgba(255, 255, 255'; // 折线图主题色
  @Input() color1 = 'rgba(255, 255, 255'; // 折线图主题色
  @Input() barWidth=25;
  @Input() xValue = [1, 2, 3, 4, 5, 6];
  @Input() yValue = [10, 10, 10, 10, 10, 10];
  @Input() yValue1 = [2, 2, 3, 2, 5, 2];
  constructor() {}

  options: any;
  ngOnInit() {
    this.options = this.optionFn();
  }
  optionFn() {
    let lineY = [];
    if (this.type === 'A') {
      let data = {
        name: '',
        type: 'line',
        color: this.color + ')',
        smooth: false, // 折线弧度
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
                  color: this.color + ', 0.8)'
                },
                {
                  offset: 0.8,
                  color: this.color + ', 0.1)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        // symbol: 'circle',
        // symbolSize: 5,
        data: this.yValue
      };
      lineY.push(data);
    } else if (this.type === 'B') {
      let data = {
        name: '',
        type: 'bar',
        barWidth: this.barWidth,
        // tooltip: {
        //   trigger: 'item',
        //   // formatter: '{a} <br/>{b} : {c} ({d}%)'
        // },
        label: {
          normal: {
            position: 'top',
            show: false
          }
        },
        itemStyle: {
          normal: {
            // color: this.color + ',1)'
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: this.color + ', 1)'
              },
              {
                offset: 1,
                color: this.color + ', 0.2)'
              }
            ])
          }
        },
        data: this.yValue
      };
      lineY.push(data);
    } else if (this.type === 'S') {
      let data = {
        name: '可出租面积',
        type: 'bar',
        data: this.yValue,
        barWidth: this.barWidth,
        itemStyle: {
          normal: {
            // color: this.color + ',1)'
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: this.color + ', 1)'
              },
              {
                offset: 1,
                color: this.color + ', 0.2)'
              }
            ])
          }
        },
      };
      let data2 = {
        name: '总面积',
        type: 'bar',
        data: this.yValue1,
        barWidth:  this.barWidth,
        itemStyle: {
          normal: {
            // color: this.color + ',1)'
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: this.color1 + ', 1)'
              },
              {
                offset: 1,
                color: this.color1 + ', 0.2)'
              }
            ])
          }
        },
      };
      lineY.push(data);
      lineY.push(data2);
    }

    let options = {
      legend: {
        show: this.legend,
        top: 0,
        left: 10,
        textStyle: {
          color: '#ffffff'
        },
        type: 'scroll',
        data: ['可出租面积', '总面积']
      },
       tooltip: {
          trigger: 'item',
          // formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: {
      //     type: 'shadow'
      //   }
      //   // formatter: (params, ticket, callback) => {
      //   //   return params[0].value;
      //   // }
      // },
      grid: {
        top: '40px',
        left: '2%',
        right: '20px',
        bottom: '36%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: this.xValue,
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
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
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgb(0,253,255,0.6)'
          }
        }
      },
      series: lineY
    };
    return options;
  }
}
