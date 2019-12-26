import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, of, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
@Component({
  selector: 'app-new-echarts1',
  templateUrl: './new-echarts.component.html',
  styleUrls: ['./new-echarts.component.scss']
})
export class NewEChartsComponent1 implements OnInit {
  options: any;
  registerMap: any;
  optionsMap: any;
  status: any = true;
  public that: any = this;
  tabDatas: any = [
    {
      id: "01",
      name: "出发专线通道排行",
      isActive: true
    },
    {
      id: "02",
      name: "到达专线通道排行",
      isActive: false
    }
  ];
  private formLines: any = [
    {
      id: "1",
      name: "郑州专线通道",
      garden: "45园区",
      lineNums: "5042专线",

    },
    {
      id: "2",
      name: "信阳专线通道",
      garden: "5园区",
      lineNums: "4042专线",
    },
    {
      id: "3",
      name: "洛阳专线通道",
      garden: "4园区",
      lineNums: "3542专线",
    },
    {
      id: "4",
      name: "安阳专线通道",
      garden: "3园区",
      lineNums: "3642专线",
    },

  ];
  private toLines: any = [
    {
      id: "1",
      name: "商丘专线通道",
      garden: "45园区",
      lineNums: "5042专线",

    },
    {
      id: "2",
      name: "平顶山专线通道",
      garden: "5园区",
      lineNums: "4042专线",
    },
    {
      id: "3",
      name: "南阳专线通道",
      garden: "4园区",
      lineNums: "3542专线",
    },
    {
      id: "4",
      name: "新乡专线通道",
      garden: "3园区",
      lineNums: "3642专线",
    },

  ];


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }


  public geoCoordMap: any = {
    '郑州市': [113.665412, 34.757975],
    '开封市': [114.341447, 34.797049],
    '洛阳市': [112.434468, 34.663041],
    '南阳市': [112.540918, 32.999082],
    '漯河市': [114.026405, 33.575855],
    '许昌市': [113.826063, 34.022956],
    '三门峡市': [111.194099, 34.777338],
    '平顶山市': [113.307718, 33.735241],
    '驻马店市': [114.024736, 32.980169],
    '周口市': [114.649653, 33.620357],
    '新乡市': [113.883991, 35.302616],
    '鹤壁市': [114.295444, 35.748236],
    '焦作市': [113.238266, 35.23904],
    '濮阳市': [115.041299, 35.768234],
    '安阳市': [114.352482, 36.103442],
    '商丘市': [115.650497, 34.437054],
    '信阳市': [114.075031, 32.123274],
    '济源市': [112.590047, 35.090378],
  };
  public moveLine: any = {
    'normal1': [
      { "fromName": "郑州市", "toName": "开封市", 'coords': [[113.665412, 34.757975], [114.341447, 34.797049],] },
      { "fromName": "郑州市", "toName": "洛阳市", 'coords': [[113.665412, 34.757975], [112.434468, 34.663041],] },
      { "fromName": "郑州市", "toName": "南阳市", 'coords': [[113.665412, 34.757975], [112.540918, 32.999082], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "漯河市", 'coords': [[113.665412, 34.757975], [114.026405, 33.575855], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "许昌市", 'coords': [[113.665412, 34.757975], [113.826063, 34.022956], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "三门峡市", 'coords': [[113.665412, 34.757975], [111.194099, 34.777338], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "平顶山市", 'coords': [[113.665412, 34.757975], [113.307718, 33.735241], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "驻马店市", 'coords': [[113.665412, 34.757975], [114.024736, 32.980169], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "周口市", 'coords': [[113.665412, 34.757975], [114.649653, 33.620357], [113.665412, 34.757975]] },

    ],
    'normal2': [
      { "fromName": "郑州市", "toName": "新乡市", 'coords': [[113.665412, 34.757975], [113.883991, 35.302616], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "鹤壁市", 'coords': [[113.665412, 34.757975], [114.295444, 35.748236], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "焦作市", 'coords': [[113.665412, 34.757975], [113.238266, 35.23904], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "濮阳市", 'coords': [[113.665412, 34.757975], [115.041299, 35.768234], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "安阳市", 'coords': [[113.665412, 34.757975], [114.352482, 36.103442], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "商丘市", 'coords': [[113.665412, 34.757975], [115.650497, 34.437054], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "信阳市", 'coords': [[113.665412, 34.757975], [114.075031, 32.123274], [113.665412, 34.757975]] },
      { "fromName": "郑州市", "toName": "济源市", 'coords': [[113.665412, 34.757975], [112.590047, 35.090378], [113.665412, 34.757975]] },
    ],
    'warning': [
      { "fromName": "濮阳市", "toName": "商丘市", 'coords': [[115.041299, 35.768234], [115.650497, 34.437054],] },
      { "fromName": "商丘市", "toName": "周口市", 'coords': [[115.650497, 34.437054], [114.649653, 33.620357],] },
      { "fromName": "周口市", "toName": "信阳市", 'coords': [[114.649653, 33.620357], [114.075031, 32.123274],] },
    ]
  };
  public data1: any = [
    { name: '郑州市', value: 190 },
    { name: '开封市', value: 190 },
    { name: '洛阳市', value: 190 },
    { name: '南阳市', value: 190 },
    { name: '漯河市', value: 190 },
    { name: '许昌市', value: 90 },
    { name: '三门峡市', value: 120 },
    { name: '平顶山市', value: 120 },
    { name: '驻马店市', value: 120 },
  ];
  public data2: any = [
    { name: '新乡市', value: 120 },
    { name: '周口市', value: 190 },
    { name: '鹤壁市', value: 190 },
    { name: '焦作市', value: 190 },
    { name: '濮阳市', value: 190 },
    { name: '安阳市', value: 190 },
    { name: '商丘市', value: 190 },
    { name: '信阳市', value: 90 },
    { name: '济源市', value: 90 },
  ];

  public pointsMap: any = [
    { name: "林州", value: [113.81, 36.06] },
    { name: "夏邑", value: [116.13, 34.22] },
    { name: "柘城", value: [115.29, 34.08] },
    { name: "睢县", value: [115.04, 34.46] },
    { name: "虞城", value: [115.87, 34.40] },
    { name: "永城", value: [116.37, 33.94] },
    { name: "宁陵", value: [115.31, 34.44] },
    { name: "民权", value: [115.13, 34.65] },
    { name: "商水", value: [114.59, 33.54] },
    { name: "扶沟", value: [114.38, 34.05] },
    { name: "鹿邑", value: [115.48, 33.86] },
    { name: '淮阳', value: [114.88, 33.74] },
    { name: '沈丘', value: [115.06, 33.41] },
    { name: '西华', value: [114.50, 33.79] },
    { name: '太康', value: [114.85, 34.06] },
    { name: '郸城', value: [115.17, 33.63] },
    { name: '项城', value: [114.90, 33.44] },
    { name: '鄢县', value: [114.17, 34.11] },
    { name: '郾城', value: [113.98, 33.60] },
    { name: '襄城', value: [113.46, 33.86] },
    { name: '鲁山', value: [112.88, 33.74] },
    { name: '郏县', value: [113.19, 33.98] },
    { name: '长葛', value: [113.77, 34.22] },
  ];
  public max: any = 480;
  public min: any = 9; // todo
  public maxSize4Pin: any = 100;
  public minSize4Pin: any = 20;
  convertData = function (data) {
    let res = [];
    for (var i = 0; i < data.length; i++) {
      let geoCoord = this.geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    console.log(res)
    return res;
  };
  ngOnInit() {
    this.http.get('../../../assets/henan.json').subscribe(geoJson => {
      console.log(geoJson)
      echarts.registerMap('河南', geoJson);
      this.optionsMap = {
        backgroundColor: '#020B37',
        title: {
          top: 30,
          text: '郑州—资源展示中心',
          subtext: '',
          left: 30,
          textStyle: {
            color: '#00CFFF',
            fontSize: '30',
          }
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(166, 200, 76, 0.82)',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter: function (params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            console.log(params)
            var res = "1";
            var name = 2;
            var value = 3;
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据1：" + value;
            return res;
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
        visualMap: {
          show: false,
          min: 0,
          max: 500,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            //color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            //color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

          }
        },
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
          show: true,
          map: '河南',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          scaleLimit: {
            min: 1,
            max: 3
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#04102d',
              borderColor: '#3fdaff',
              borderWidth: 2,
            },
            emphasis: {
              areaColor: '#2B91B7',
            }
          }
        },
        series: [
          {
            name: 'light1',//点
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.convertData(this.data1),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#23F300'
              }
            }
          },
          {
            name: 'light2',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.convertData(this.data2),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#FFA500'
              }
            }
          }, {
            name: 'light3',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.pointsMap,
            symbolSize: function (val) {
              return val[2] / 10;
            },
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#cccccc'
              }
            }
          },
          {
            name: '线路1',//弧线
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
              show: true,
              constantSpeed: 30,
              symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
              symbolSize: 0,
              trailLength: 0,
            },
            lineStyle: {
              normal: {
                color: '#23F300',
                width: 1,
                opacity: 1.0,
                curveness: 0.35
              }
            },
            data: this.moveLine.normal1
          }, {
            name: '线路2',//弧线
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
              show: true,
              constantSpeed: 30,
              symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
              symbolSize: 0,
              trailLength: 0,
            },
            lineStyle: {
              normal: {
                color: '#FFA500',
                width: 1,
                opacity: 1.0,
                curveness: 0.35
              }
            },
            data: this.moveLine.normal2
          },
          {
            name: '线路3',//折线
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
              show: true,
              constantSpeed: 30,
              symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
              symbolSize: 0,
              trailLength: 0,
            },
            lineStyle: {
              normal: {
                color: '#70CBE3',
                width: 3,
                opacity: 1.0,
                curveness: 0
              }
            },
            data: this.moveLine.warning
          },

        ]
      };
    }, error => {
      console.log('0000000000000')
    });
  };
  clicktab(data) {
    // console.log(data)
    if (data == '01') {
      this.status = true
    } else if (data == '02') {
      this.status = false
    }
    for (let ins in this.tabDatas) {
      if (data == this.tabDatas[ins].id) {
        this.tabDatas[ins].isActive = true
        // return
      } else {
        this.tabDatas[ins].isActive = false
        // return
      }
    }
  };

  // 搜索点击
  searchClick() {

  }

}
