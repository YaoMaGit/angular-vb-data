import { Component, OnInit, Input, Output } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bar-echart',
  templateUrl: './barEchart.component.html',
  styleUrls: ['./barEchart.component.scss']
})
export class BarEchart implements OnInit {
  @Input() type = 'A'; // A 渐变折线图 B 线性函数点状图
  @Input() title; // 大标题
  @Input() colorKg = ['#0167E8', '#13ACE8'];
  @Input() colorPer = 'rgba(248,81,99';
  @Input() transKgData; //运输量
  @Input() transPerData;
  @Input() overKgData; //周转量
  @Input() overPerData;
  @Input() barWidth = 25;
  // 1-9月份省直辖市、直管县公路运输量图定义
  @Input() MonthOrArea = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月'
  ]; // 默认月份
  tabActive: Number = 1;
  constructor() {}
  valuePer: any;
  valueKg: any;
  options: any;
  ngOnInit() {
    let that = this;
    that.tab(1);
    // setTimeout(function(){
    //   setInterval(function() {
    //     if (that.tabActive === 1) {
    //       that.tab(2);
    //     } else if (that.tabActive === 2) {
    //       that.tab(1);
    //     }
    //   }, 4000);
    // },Math.floor(Math.random() * 10 + 1)/2*1000)
    this.options = this.optionFn();
  }
  optionFn() {
    let options = {
      grid: {
        top: '8%',
        left: '3%',
        right: '3%',
        bottom: '38%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        show: this.overKgData && this.overPerData ? true : false,
        data: ['增速', '绝对量'],
        textStyle: {
          color: '#ffffff'
        }
      },
      xAxis: {
        data: this.MonthOrArea,
        axisLine: {
          show: false //隐藏X轴轴线
        },
        axisTick: {
          show: false //隐藏X轴刻度
        },
        axisLabel: {
          show: true,
          formatter: '{value}',
          textStyle: {
            color: '#ebf8ac' //X轴文字颜色
          }
        }
      },
      yAxis: [
        {
          type: 'value',
          // 亿吨，万吨，亿吨公里，万吨公里
          name:
            this.overKgData && this.overPerData
              ? '万吨'
              : this.title === '1-9月份省直辖市、直管县公路运输量（增速）'
              ? '%'
              : this.tabActive === 1
              ? '亿吨'
              : '亿吨公里',
          nameTextStyle: {
            color: '#ebf8ac'
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ebf8ac'
            }
          },
          splitArea: {
            show: false
          }
        },
        {
          show: this.overKgData && this.overPerData ? true : false,
          type: 'value',
          name: '%',
          nameTextStyle: {
            color: '#ebf8ac'
          },
          position: 'right',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            formatter: '{value}', // 右侧Y轴文字显示
            textStyle: {
              color: '#ebf8ac'
            }
          },
          splitArea: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '增速',
          type: 'line',
          yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          smooth: true, //平滑曲线显示
          lineStyle: {
            color: this.colorPer + ', 1)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: this.colorPer + ', 0.8)'
                },
                {
                  offset: 0.8,
                  color: this.colorPer + ', 0.1)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
          data: this.valuePer
        },
        {
          name: '绝对量',
          type: 'bar',
          barWidth: this.barWidth,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: this.colorKg[0]
                },
                {
                  offset: 1,
                  color: this.colorKg[1]
                }
              ])
            }
          },
          data: this.valueKg
        }
      ]
    };
    return options;
  }

  tab(val: any) {
    console.log(val);
    this.tabActive = val;
    if (val === 1) {
      this.valuePer = this.transPerData;
      this.valueKg = this.transKgData;
    } else if (val === 2) {
      this.valuePer = this.overPerData;
      this.valueKg = this.overKgData;
    }
    this.options = this.optionFn();
  }
}
