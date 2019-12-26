import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
@Component({
  selector: 'app-sandian',
  templateUrl: './sandian.component.html',
  styleUrls: ['./sandian.component.scss']
})
export class SdMap implements OnInit {
  public options: any;

  cityData = [
    {
      name: '郑州市' ,
      symbolSize:12,
      // value: [113.565412, 34.757975, 535]
      value: [113.565412, 34.757975, 147]
    },
    {
      name: '开封市' ,
      symbolSize:12,
      // value: [114.341447, 34.797049, 77]
      value: [114.341447, 34.797049, 36]
    },
    {
      name: '洛阳市' ,
      symbolSize:12,
      // value: [112.434468, 34.663041, 176]
      value: [112.434468, 34.663041, 147]
    },
    {
      name: '南阳市' ,
      symbolSize:12,
      // value: [112.540918, 32.999082, 47]
      value: [112.540918, 32.999082, 37]
    },
    {
      name: '漯河市' ,
      symbolSize:12,
      // value: [114.026405, 33.575855, 51]
      value: [114.026405, 33.575855, 48]
    },
    {
      name: '许昌市' ,
      symbolSize:12,
      // value: [113.826063, 34.022956, 75]
      value: [113.826063, 34.022956, 43]
    },
    {
      name: '三门峡市' ,
      symbolSize:12,
      // value: [111.194099, 34.777338, 28]
      value: [111.194099, 34.777338, 26]
    },
    {
      name: '平顶山市' ,
      symbolSize:12,
      // value: [113.307718, 33.735241, 35]
      value: [113.307718, 33.735241, 21]
    },
    {
      name: '驻马店市' ,
      // value: [114.024736, 32.980169, 46]
      value: [114.024736, 32.980169, 21]
    },
    {
      name: '周口市' ,
      symbolSize:12,
      // value: [114.649653, 33.620357, 44]
      value: [114.649653, 33.620357, 24]
    },
    {
      name: '新乡市' ,
      symbolSize:12,
      // value: [113.883991, 35.302616, 93]
      value: [113.883991, 35.302616, 44]
    },
    {
      name: '鹤壁市' ,
      symbolSize:12,
      // value: [114.295444, 35.748236, 11]
      value: [114.295444, 35.748236, 7]
    },
    {
      name: '焦作市' ,
      symbolSize:12,
      // value: [113.238266, 35.23904, 36]
      value: [113.238266, 35.23904, 13]
    },
    {
      name: '濮阳市' ,
      symbolSize:12,
      // value: [115.041299, 35.768234, 24]
      value: [115.041299, 35.768234, 15]
    },
    {
      name: '安阳市' ,
      symbolSize:12,
      // value: [114.352482, 36.103442, 50]
      value: [114.352482, 36.103442, 33]
    },
    {
      name: '商丘市' ,
      symbolSize:12,
      // value: [115.650497, 34.437054, 8]
      value: [115.650497, 34.437054, 18]
    },
    {
      name: '信阳市' ,
      symbolSize:12,
      // value: [114.075031, 32.123274, 52]
      value: [114.075031, 32.123274, 42]
    },
    {
      name: '济源市' ,
      symbolSize:12,
      // value: [112.590047, 35.090378, 21]
      value: [112.590047, 35.090378, 17]
    },
    {
      name: '荥阳',
      value: [113.35, 34.79, 82]
    },
    {
      name: '巩义',
      value: [113.040695, 34.746351, 4]
    },
    {
      name: '登封',
      value: [113.02, 34.46, 3]
    },
    {
      name: '新密',
      value: [113.405192, 34.538225, 20]
    },
    {
      name: '新郑',
      value: [113.71, 34.4, 131]
    },
    {
      name: '中牟',
      value: [114.0, 34.73, 147]
    },
    {
      name: '上街',
      value: [13.310906, 34.806125, 0]
    },
    {
      name: '兰考县',
      value: [114.81, 34.69, 9]
    },
    {
      name: '杞县',
      value: [114.77, 34.56, 10]
    },
    {
      name: '尉氏县',
      value: [114.17, 34.41, 22]
    },
    {
      name: '通许县',
      value: [114.46, 34.48, 0]
    },
    {
      name: '开封县',
      value: [114.452688, 34.755842, 0]
    },
    {
      name: '偃师',
      value: [112.77, 34.73, 12]
    },
    {
      name: '新安县',
      value: [112.14, 34.75, 2]
    },
    {
      name: '伊川县',
      value: [112.42, 34.43, 11]
    },
    {
      name: '汝阳县',
      value: [112.46, 34.16, 2]
    },
    {
      name: '嵩县',
      value: [112.07, 34.14, 2]
    },
    {
      name: '孟津县',
      value: [112.42, 34.84, 0]
    },
    {
      name: '栾川县',
      value: [111.6, 33.81, 0]
    },
    {
      name: '宜阳县',
      value: [112.15, 34.51, 0]
    },
    {
      name: '洛宁县',
      value: [111.65, 34.39, 0]
    },
    {
      name: '灵宝',
      value: [110.85, 34.52, 2]
    },
    {
      name: '渑池',
      value: [111.75, 34.76, 0]
    },
    {
      name: '陕县',
      value: [111.19, 34.76, 0]
    },
    {
      name: '卢氏县',
      value: [111.03, 34.06, 0]
    },
    {
      name: '义马',
      value: [111.92, 34.73, 0]
    },
    // 商丘
    {
      name: '虞城县',
      value: [115.87, 34.4, 2]
    },
    {
      name: '夏邑县',
      value: [116.13, 34.22, 1]
    },
    // 济源
    {
      name: '五龙口镇',
      value: [112.701495, 35.138352, 1]
    },
    {
      name: '梨林镇',
      value: [112.715293, 35.083548, 2]
    },
    {
      name: '大峪镇',
      value: [112.405989, 34.946375, 1]
    },
    // 焦作市
    {
      name: '博爱县',
      value: [113.05, 35.16, 2]
    },
    {
      name: '温县',
      value: [113.0927, 34.94087, 4]
    },
    {
      name: '孟州',
      value: [112.800381, 34.909441, 1]
    },
    {
      name: '武陟县',
      value: [113.414391, 35.10245, 14]
    },
    {
      name: '修武县',
      value: [113.42, 35.24, 1]
    },
    {
      name: '沁阳',
      value: [112.931009, 35.089219, 0]
    },
    // 新乡
    {
      name: '辉县',
      value: [113.77, 35.46, 1]
    },
    {
      name: '卫辉',
      value: [114.077843, 35.402399, 3]
    },
    {
      name: '获嘉县',
      value: [113.63, 35.27, 3]
    },
    {
      name: '原阳县',
      value: [113.96, 35.05, 26]
    },
    {
      name: '延津县',
      value: [114.19, 35.14, 9]
    },
    {
      name: '新乡县',
      value: [113.813382, 35.191231, 7]
    },
    {
      name: '封丘县',
      value: [114.423942, 35.041948, 0]
    },
    {
      name: '长垣',
      value: [114.681504, 35.203501, 0]
    },
    // 鹤壁
    {
      name: '淇县',
      value: [114.17, 35.6, 2]
    },
    {
      name: '浚县',
      value: [114.54, 35.67, 2]
    },
    // 安阳
    {
      name: '林州',
      value: [113.81, 36.06, 1]
    },
    {
      name: '安阳县',
      value: [114.248018, 36.219134, 1]
    },
    {
      name: '汤阴县',
      value: [114.35, 35.92, 13]
    },
    {
      name: '内黄县',
      value: [114.88, 35.95, 2]
    },
    {
      name: '滑县',
      value: [114.52, 35.57, 0]
    },
    // 濮阳
    {
      name: '濮阳县',
      value: [115.029903, 35.678713, 3]
    },
    {
      name: '清丰县',
      value: [115.110391, 35.887656, 5]
    },
    {
      name: '台前县',
      value: [115.83, 36.0, 1]
    },
    {
      name: '南乐县',
      value: [115.21, 36.08, 0]
    },
    {
      name: '范县',
      value: [115.46, 35.9, 0]
    },
    // 许昌
    {
      name: '鄂陵县',
      value: [114.191676, 34.104135, 5]
    },
    {
      name: '襄城县',
      value: [113.512126, 33.854109, 5]
    },
    {
      name: '禹州',
      value: [113.363798, 34.21884, 2]
    },
    {
      name: '长葛',
      value: [113.77, 34.22, 16]
    },
    // 漯河
    {
      name: '临颍县',
      value: [114.005404, 33.816685, 1]
    },
    {
      name: '舞阳县',
      value: [113.617911, 33.438646, 2]
    },
    // 平顶山
    {
      name: '宝丰县',
      value: [113.060504, 33.867717, 4]
    },
    {
      name: '舞钢',
      value: [113.518137, 33.303751, 4]
    },
    {
      name: '汝州',
      value: [112.825939, 34.181755, 0]
    },
    {
      name: '叶县',
      value: [113.35, 33.62, 1]
    },
    {
      name: '鲁山县',
      value: [112.88, 33.74, 2]
    },
    {
      name: '郏县',
      value: [113.19, 33.98, 3]
    },
    // 南阳
    {
      name: '镇平县',
      value: [112.23, 33.03, 2]
    },
    {
      name: '淅川县',
      value: [111.47, 33.14, 2]
    },
    {
      name: '新野县',
      value: [112.36, 32.51, 4]
    },
    {
      name: '桐柏县',
      value: [113.4, 32.37, 2]
    },
    {
      name: '方城县',
      value: [112.98, 33.25, 0]
    },
    {
      name: '西峡县',
      value: [111.5, 33.31, 0]
    },
    {
      name: '内乡县',
      value: [111.83, 33.05, 0]
    },
    {
      name: '社旗县',
      value: [112.92, 33.05, 0]
    },
    {
      name: '唐河县',
      value: [112.83, 32.7, 0]
    },
    {
      name: '邓州',
      value: [112.103845, 32.677747, 0]
    },
    {
      name: '南召县',
      value: [112.4, 33.49, 0]
    },
    // 驻马店
    {
      name: '西平县',
      value: [114.0, 33.38, 4]
    },
    {
      name: '平舆县',
      value: [114.62, 32.97, 1]
    },
    {
      name: '正阳县',
      value: [114.401207, 32.607699, 1]
    },
    {
      name: '确山县',
      value: [114.053958, 32.778831, 3]
    },
    {
      name: '泌阳县',
      value: [113.350262, 32.716639, 3]
    },
    {
      name: '汝南县',
      value: [114.38051, 32.998092, 4]
    },
    {
      name: '遂平县',
      value: [113.98, 33.15, 4]
    },
    {
      name: '新蔡县',
      value: [114.978422, 32.743853, 4]
    },
    {
      name: '上蔡县',
      value: [114.283925, 33.261255, 0]
    },
    // 周口
    {
      name: '西华县',
      value: [114.488594, 33.789024, 1]
    },
    {
      name: '商水县',
      value: [114.59, 33.54, 1]
    },
    {
      name: '沈丘县',
      value: [115.107204, 33.402183, 2]
    },
    {
      name: '郸城县',
      value: [115.217587, 33.641038, 3]
    },
    {
      name: '太康县',
      value: [114.870338, 34.063172, 2]
    },
    {
      name: '鹿邑县',
      value: [115.518843, 33.861962, 4]
    },
    {
      name: '扶沟县',
      value: [114.415005, 34.063172, 2]
    },
    {
      name: '淮阳县',
      value: [114.88, 33.74, 0]
    },
    {
      name: '项城',
      value: [114.918631, 33.450393, 0]
    },
    // 信阳
    {
      name: '光山县',
      value: [114.948527, 32.000261, 1]
    },
    {
      name: '商城县',
      value: [115.429156, 31.806036, 4]
    },
    {
      name: '固始县',
      value: [115.686718, 32.164733, 2]
    },
    {
      name: '潢川县',
      value: [115.079608, 32.1256, 3]
    },
    {
      name: '罗山县',
      value: [114.539187, 32.199938, 0]
    },
    {
      name: '新县',
      value: [114.911732, 31.61927, 0]
    },
    {
      name: '淮滨县',
      value: [115.433756, 32.473285, 0]
    },
    {
      name: '息县',
      value: [114.753056, 32.33281, 0]
    }


  ];
  public colors: any =  ['#9AFF9A',  '#ffde00','#f44336',];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.echartsOption();
  }

  echartsOption() {
    this.http.get('../../../assets/henan.json').subscribe(
      datachina => {
        echarts.registerMap('河南', datachina);
        this.options = {
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: (val) => {
              return val.data.name + ':' + val.data.value[2];
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
                areaColor: '#264cac',
                borderColor: '#3fdaff',
                borderWidth: 2
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            }


            
          },
          visualMap: {
            min: 0,
            max: 100,
            left: 100,
            top: 'bottom',
            text: ['多', '少'],
            realtime: false,
            calculable: true,
            textStyle: {
              color: '#fff'
            },
            inRange: {
              color: this.colors
            }
          },
          series: [
            {
              name: '路线散点分布',
              type: 'scatter',
              mapType: '河南',
              coordinateSystem: 'geo',
              symbolSize: 6,
              symbol: 'circle',
              data: this.cityData,
              label: {
                normal: {
                  show: true,
                  formatter: (val) => {
                      return val.name.indexOf("市") != -1 ?val.name:'';
                  },
                  position: 'right',
                },
                // emphasis: {
                //   show: false,
                //   label: {
                //     symbolSize: 88
                //   }
                // },
                // // formatter: '0',
                // offset: [15, -15] // 文字的相对偏移
              },
              // 标签的样式
              itemStyle: {
                normal: {
                  show: true
                  // color: (val) => {
                  //   // console.log(val)
                  // }, //标志颜色
                },
                emphasis: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              }
            },
          ]
        };
      },
      error => {}
    );
  }

}
