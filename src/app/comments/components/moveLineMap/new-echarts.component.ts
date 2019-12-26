import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
@Component({
  selector: 'app-new-echarts',
  templateUrl: './new-echarts.component.html',
  styleUrls: ['./new-echarts.component.scss']
})
export class MoveLineMap implements OnInit {
  registerMap: any;
  optionsMap: any;
  status: any = true;
  public that: any = this;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public moveLine: any = {
    normal1: [],
    normal2: [],
    warning: [
      {
        fromName: '郑州市',
        toName: '濮阳市',
        lineName: '济郑渝物流通道',
        coords: [
          [113.665412, 34.757975], // 郑州
          [113.97, 35.05], // 原阳
          [115.041299, 35.768234], // 濮阳
          [115.55, 36.0] // 濮阳东北方向
        ]
      },
      {
        fromName: '焦作市',
        toName: '周口市',
        lineName: '太郑合物流通道',
        coords: [
          [112.65, 36.27], // 太原方向
          [113.25, 35.22], // 焦作
          [113.665412, 34.757975], // 郑州
          [113.946063, 34.122956], // 许昌东北附近
          [114.649653, 33.620357], // 周口
          [115.82, 32.9] // 阜阳
        ]
      },
      {
        fromName: '周口市',
        toName: '焦作市',
        lineName: '太郑合物流通道',
        coords: [
          [115.82, 32.9], // 阜阳
          [114.649653, 33.620357], // 周口
          [113.946063, 34.122956], // 许昌东北附近
          [113.665412, 34.757975], // 郑州
          [113.25, 35.22], // 焦作
          [112.65, 36.27] // 太原方向
        ]
      },
      {
        fromName: '焦作市',
        toName: '信阳市',
        lineName: '京港澳物流通道',
        coords: [
          [112.83, 35.5], // 晋城
          [113.25, 35.22], // 焦作
          [113.665412, 34.757975], // 郑州
          [113.826063, 34.022956], // 许昌
          [114.026405, 33.575855], // 漯河
          [114.024736, 32.980169], // 驻马店
          [114.075031, 32.123274], // 信阳
          [114.075, 31.423] // 信阳正南
        ]
      },
      {
        fromName: '信阳市',
        toName: '焦作市',
        lineName: '京港澳物流通道',
        coords: [
          [114.075, 31.423], // 信阳正南
          [114.075031, 32.123274], // 信阳
          [114.024736, 32.980169], // 驻马店
          [114.026405, 33.575855], // 漯河
          [113.826063, 34.022956], // 许昌
          [113.665412, 34.757975], // 郑州
          [113.25, 35.22], // 焦作
          [112.83, 35.5] // 晋城
        ]
      },
      {
        fromName: '南阳市',
        toName: '信阳市',
        lineName: '沪陕物流通道',
        coords: [
          [110.540918, 33.599082],
          [112.540918, 32.999082],
          [114.075031, 32.123274],
          [117.075031, 31.523274]
        ]
      },
      {
        fromName: '信阳市',
        toName: '南阳市',
        lineName: '沪陕物流通道',
        coords: [
          [117.075031, 31.523274],
          [114.075031, 32.123274],
          [112.540918, 32.999082],
          [110.540918, 33.599082]
        ]
      },

      {
        fromName: '濮阳市',
        toName: '商丘市',
        lineName: '大广物流通道',
        coords: [
          [115.097385, 36.495947],
          [115.041299, 35.768234],
          [115.19142, 34.224298],
          [115.113231, 32.7327],
          [114.887865, 31.168031]
        ]
      },

      {
        fromName: '济源市',
        toName: '南阳市',
        lineName: '二广物流通道',
        coords: [
          [112.590047, 36.000378],
          [112.590047, 35.090378],
          [112.434468, 34.663041],
          [112.540918, 32.999082],
          [112.337791, 31.731802]
        ]
      },
      {
        fromName: '南阳市',
        toName: '济源市',
        lineName: '二广物流通道',
        coords: [
          [112.337791, 31.731802],
          [112.540918, 32.999082],
          [112.434468, 34.663041],
          [112.590047, 35.090378],
          [112.590047, 36.000378]
        ]
      },
      {
        fromName: '三门峡市',
        toName: '商丘市',
        lineName: '新亚欧大陆桥国际物流通道',
        coords: [
          [110.421921, 34.706205],
          [111.194099, 34.777338],
          [112.434468, 34.663041],
          [113.665412, 34.757975],
          [114.3, 34.8],
          [115.650497, 34.437054],
          [116.608012, 34.458936]
        ]
      },

      {
        fromName: '林州',
        toName: '濮阳',
        lineName: '晋鲁豫物流通道',
        coords: [
          [113.480471, 36.138695],
          [113.81, 36.06],
          [115.041299, 35.768234],
          [116.189473, 35.618376]
        ]
      },

      {
        fromName: '南阳市',
        toName: '濮阳',
        lineName: '济郑渝物流通道',
        coords: [
          [110.946244, 32.503037],
          [112.540918, 32.999082],
          [113.307718, 33.735241],
          [113.665412, 34.757975],
          [113.9, 35.3],
          [114.295444, 35.748236],
          [114.352482, 36.103442],
          [114.570511, 36.362226]
        ]
      }
    ]
  };

  // 内河航运物流通道
  public moveLine2: any = {
    normal1: [],
    normal2: [],
    warning: [
      {
        fromName: '襄阳市',
        toName: '唐河',
        lineName: '内河航运物流通道',
        coords: [
          [112.15, 32.02], // 襄阳市
          [112.83, 32.7], // 唐河
          [113.0, 32.9]
        ]
      },
      {
        fromName: '淮滨',
        toName: '淮滨东北方',
        lineName: '内河航运物流通道',
        coords: [
          [115.11, 32.39],
          [115.41, 32.44], // 淮滨
          [116.03, 32.9] // 淮滨东北方
        ]
      },
      {
        fromName: '平顶山',
        toName: '淮滨东北方',
        lineName: '内河航运物流通道',
        coords: [
          [113.107, 33.68],
          [113.307718, 33.735241], // 平顶山
          [114.026405, 33.575855], // 漯河
          [114.9, 33.44], // 项城
          [116.03, 32.9] // 淮滨东北方
        ]
      }
    ]
  };

  // 国家物流枢纽 点
  public countryMarkers: any = [
    { name: '郑州市', value: [113.665412, 34.757975, 100] },
    { name: '洛阳市', value: [112.434468, 34.663041, 100] },
    { name: '安阳市', value: [114.352482, 36.103442, 100] },
    { name: '南阳市', value: [112.540918, 32.999082, 100] },
    { name: '信阳市', value: [114.075031, 32.123274, 100] },
    { name: '商丘市', value: [115.650497, 34.437054, 100] }
  ];
  // 区域物流枢纽 点
  public areaMarkers: any = [
    { name: '林州', value: [113.81, 36.06, 80] },
    { name: '鹤壁', value: [114.295444, 35.748236, 80] },
    { name: '濮阳', value: [115.041299, 35.768234, 80] },
    { name: '台前', value: [115.83, 36.0, 80] },
    { name: '长垣', value: [114.68, 35.2, 80] },
    { name: '原阳', value: [113.97, 35.05, 80] },
    { name: '新乡市', value: [113.9, 35.3, 80] },
    { name: '焦作市', value: [113.25, 35.22, 80] },
    { name: '武陟', value: [113.38, 35.1, 80] },
    { name: '济源市', value: [112.58, 35.07, 80] },
    { name: '开封市', value: [114.3, 34.8, 80] },
    { name: '三门峡市', value: [111.194099, 34.777338, 80] },
    { name: '灵宝', value: [110.85, 34.52, 80] },
    { name: '平顶山市', value: [113.307718, 33.735241, 80] },
    { name: '汝州', value: [112.83, 34.17, 80] },
    { name: '许昌市', value: [113.826063, 34.022956, 80] },
    { name: '长葛', value: [113.77, 34.22, 80] },
    { name: '尉氏', value: [114.17, 34.41, 80] },
    { name: '永城', value: [116.37, 33.94, 80] },
    { name: '周口市', value: [114.649653, 33.620357, 80] },
    { name: '项城', value: [114.9, 33.44, 80] },
    { name: '沈丘', value: [115.06, 33.41, 80] },
    { name: '漯河市', value: [114.026405, 33.575855, 80] },
    { name: '临颖', value: [113.94, 33.81, 80] },
    { name: '驻马店市', value: [114.024736, 32.980169, 80] },
    { name: '新蔡', value: [114.97, 32.75, 80] },
    { name: '潢川', value: [115.04, 32.13, 80] },
    { name: '淮滨', value: [115.41, 32.44, 80] },
    { name: '唐河', value: [112.83, 32.7, 80] },
    { name: '邓县', value: [112.08, 32.68, 80] }
  ];
  ngOnInit() {
    this.http.get('../../../assets/henan.json').subscribe(
      geoJson => {
        console.log(geoJson);
        echarts.registerMap('河南', geoJson);
        this.optionsMap = {
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: 'shadow'
            },
            formatter: (params, ticket, callback) => {
              return params.data.lineName ? params.data.lineName : params.data.name;
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            show: true,
            map: '河南',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            roam: true,
            scaleLimit: {
              min: 1,
              max: 3
            },
            itemStyle: {
              normal: {
                areaColor: '#264cac',//'#04102d',
                borderColor: '#3fdaff',
                borderWidth: 2
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            }
          },
          series: [
            {
              name: 'light1', //点
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.countryMarkers,
              symbolSize: val => {
                return val[2] / 10;
              },
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true,
                  fontSize: 14
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#ff4c00'
                }
              },
              zlevel: 99999
            },
            {
              name: 'light2',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.areaMarkers,
              symbolSize: function(val) {
                return val[2] / 12;
              },
              rippleEffect: {
                // brushType: 'stroke'
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true,
                  fontSize: 10
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#ffffff'
                }
              },
              zlevel: 99999
            },
            {
              name: '线路1', // 折线
              type: 'lines',
              coordinateSystem: 'geo',
              zlevel: 2,
              large: true,
              polyline: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true,
                  fontSize: 30,
                  color: '#ffffff'
                }
              },
              effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'triangle', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 8,
                color: '#209e1f',
                trailLength: 0.6
              },
              lineStyle: {
                normal: {
                  color: '#ffbf31',
                  width: 4,
                  opacity: 0.6,
                  curveness: 0
                }
              },
              data: this.moveLine.warning
            },

            /* 沿河物流通道 */
            {
              name: '线路2', // 折线
              type: 'lines',
              coordinateSystem: 'geo',
              zlevel: 2,
              large: true,
              polyline: true,
              // label: {
              //   normal: {
              //     formatter: '{b}',
              //     position: 'right',
              //     show: true,
              //     fontSize: 30,
              //     color: '#ffffff'
              //   }
              // },
              effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'triangle', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 8,
                color: '#209e1f',
                trailLength: 0.6
              },
              lineStyle: {
                normal: {
                  color: '#70cef2',
                  width: 4,
                  opacity: 0.6,
                  curveness: 0
                }
              },
              data: this.moveLine2.warning
            }
            /* ******** */
          ]
        };
      },
      error => {
        console.log('0000000000000');
      }
    );
  }

}
