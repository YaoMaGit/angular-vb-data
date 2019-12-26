import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-echart5',
  templateUrl: './new-echart5.component.html',
  styleUrls: ['./new-echart5.component.scss']
})
export class NewEchart5Component implements OnInit {
  constructor() {}
  pieValue1: any;
  pieValue2: any;
  pieValue3: any;
  pieValue4: any;
  pieValue5: any;
  pieValue6: any;
  pieValue7: any;
  pieValue8: any;
  pieValue9: any;
  ngOnInit() {
    this.pieValue1 = [
      { value: 89.23, name: '普通仓', itemStyle: { color: '#ffdb5c' } },
      { value: 2.22, name: '冷藏仓', itemStyle: { color: '#fb7293' } },
      { value: 11.21, name: '冷冻仓', itemStyle: { color: '#e7bcf3' } },
      { value: 0.07, name: '危化品仓', itemStyle: { color: '#8378ea' } },
      { value: 0.47, name: '医药仓', itemStyle: { color: '#32c5e9' } },
      { value: 53.63, name: '露天堆场', itemStyle: { color: '#9fe6b8' } },
      { value: 3.16, name: '恒温仓', itemStyle: { color: '#ff9f7f' } }

      // { value: 40, name: 'rose8', itemStyle: { color: "#8d7fec" } },
      // { value: 40, name: 'rose9', itemStyle: { color: "#8d7fec" } },
      // { value: 40, name: 'rose10', itemStyle: { color: "#8d7fec" } },
      // { value: 40, name: 'rose11', itemStyle: { color: "#8d7fec" } },
      // { value: 40, name: 'rose12', itemStyle: { color: "#8d7fec" } },
      // { value: 40, name: 'rose13', itemStyle: { color: "#8d7fec" } },
    ];
    this.pieValue2 = [
      { value: 72.14, name: '普通仓', itemStyle: { color: '#ffdb5c' } },
      { value: 1.82, name: '冷藏仓', itemStyle: { color: '#fb7293' } },
      { value: 1.36, name: '冷冻仓', itemStyle: { color: '#e7bcf3' } },
      { value: 3.48, name: '危化品仓', itemStyle: { color: '#8378ea' } },
      { value: 0.56, name: '医药仓', itemStyle: { color: '#32c5e9' } },
      { value: 14.02, name: '露天堆场', itemStyle: { color: '#9fe6b8' } },
      { value: 36.61, name: '恒温仓', itemStyle: { color: '#ff9f7f' } }
    ];
    this.pieValue3 = [
      { value: 77.06, name: '普通仓', itemStyle: { color: '#ffdb5c' } },
      { value: 5.09, name: '冷藏仓', itemStyle: { color: '#fb7293' } },
      { value: 3.79, name: '冷冻仓', itemStyle: { color: '#e7bcf3' } },
      { value: 1.18, name: '危化品仓', itemStyle: { color: '#8378ea' } },
      { value: 1.37, name: '医药仓', itemStyle: { color: '#32c5e9' } },
      { value: 5.47, name: '露天堆场', itemStyle: { color: '#9fe6b8' } },
      { value: 6.04, name: '恒温仓', itemStyle: { color: '#ff9f7f' } }
    ];
    this.pieValue4 = [
      { value: 62.89, name: '平台', itemStyle: { color: '#ffdb5c' } },
      { value: 12.35, name: '高台库', itemStyle: { color: '#ff9f7f' } },
      { value: 19.67, name: '楼库', itemStyle: { color: '#fb7293' } },
      { value: 3.06, name: '高标库', itemStyle: { color: '#e7bcf3' } },
      { value: 0.76, name: '坡道库', itemStyle: { color: '#8378ea' } },
      { value: 0.76, name: '立体库', itemStyle: { color: '#32c5e9' } },
      { value: 0.25, name: '地下库', itemStyle: { color: '#9fe6b8' } },
      { value: 0.25, name: '其它', itemStyle: { color: '#5aa2e7' } }
    ];
    this.pieValue5 = [
      { value: 35.42, name: '平台', itemStyle: { color: '#ffdb5c' } },
      { value: 17.08, name: '高台库', itemStyle: { color: '#ff9f7f' } },
      { value: 24.47, name: '楼库', itemStyle: { color: '#fb7293' } },
      { value: 13.56, name: '高标库', itemStyle: { color: '#e7bcf3' } },
      { value: 4.39, name: '坡道库', itemStyle: { color: '#8378ea' } },
      { value: 3.0, name: '立体库', itemStyle: { color: '#32c5e9' } },
      { value: 1.8, name: '地下库', itemStyle: { color: '#9fe6b8' } },
      { value: 0.27, name: '其它', itemStyle: { color: '#5aa2e7' } }
    ];
    this.pieValue6 = [
      { value: 33.7, name: '平台', itemStyle: { color: '#ffdb5c' } },
      { value: 22.95, name: '高台库', itemStyle: { color: '#ff9f7f' } },
      { value: 26.99, name: '楼库', itemStyle: { color: '#fb7293' } },
      { value: 9.18, name: '高标库', itemStyle: { color: '#e7bcf3' } },
      { value: 3.09, name: '坡道库', itemStyle: { color: '#8378ea' } },
      { value: 2.58, name: '立体库', itemStyle: { color: '#32c5e9' } },
      { value: 1.29, name: '地下库', itemStyle: { color: '#9fe6b8' } },
      { value: 0.2, name: '其它', itemStyle: { color: '#5aa2e7' } }
    ];
    this.pieValue7 = [
      { value: 37.97, name: '郑州市', itemStyle: { color: '#ffdb5c' } },
      { value: 5.46, name: '开封市', itemStyle: { color: '#ff9f7f' } },
      { value: 12.49, name: '洛阳市', itemStyle: { color: '#fb7293' } },
      { value: 2.48, name: '平顶山市', itemStyle: { color: '#e7bcf3' } },
      { value: 3.55, name: '安阳市', itemStyle: { color: '#8378ea' } },
      { value: 0.78, name: '鹤壁市', itemStyle: { color: '#32c5e9' } },
      { value: 6.6, name: '新乡市', itemStyle: { color: '#9fe6b8' } },
      { value: 2.56, name: '焦作市', itemStyle: { color: '#63d18f' } },
      { value: 1.7, name: '濮阳市', itemStyle: { color: '#e06c59' } },
      { value: 5.32, name: '许昌市', itemStyle: { color: '#88d327' } },
      { value: 3.62, name: '漯河市', itemStyle: { color: '#5c82ff' } },
      { value: 1.99, name: '三门峡市', itemStyle: { color: '#3486da' } },
      { value: 3.34, name: '南阳市', itemStyle: { color: '#f4f4f4' } },
      { value: 0.57, name: '商丘市', itemStyle: { color: '#b648f5' } },
      { value: 3.69, name: '信阳市', itemStyle: { color: '#3f2fd4' } },
      { value: 3.12, name: '周口市', itemStyle: { color: '#5cff77' } },
      { value: 3.26, name: '驻马店市', itemStyle: { color: '#e55533' } },
      { value: 1.49, name: '济源市', itemStyle: { color: '#ff3163' } }
    ];
    this.pieValue8 = [
      { value: 44.1, name: '郑州市', itemStyle: { color: '#ffdb5c' } },
      { value: 4.24, name: '开封市', itemStyle: { color: '#ff9f7f' } },
      { value: 8.23, name: '洛阳市', itemStyle: { color: '#fb7293' } },
      { value: 2.57, name: '平顶山市', itemStyle: { color: '#e7bcf3' } },
      { value: 2.01, name: '安阳市', itemStyle: { color: '#8378ea' } },
      { value: 0.68, name: '鹤壁市', itemStyle: { color: '#32c5e9' } },
      { value: 5.87, name: '新乡市', itemStyle: { color: '#9fe6b8' } },
      { value: 3.71, name: '焦作市', itemStyle: { color: '#63d18f' } },
      { value: 1.2, name: '濮阳市', itemStyle: { color: '#e06c59' } },
      { value: 3.21, name: '许昌市', itemStyle: { color: '#88d327' } },
      { value: 6.22, name: '漯河市', itemStyle: { color: '#5c82ff' } },
      { value: 0.96, name: '三门峡市', itemStyle: { color: '#3486da' } },
      { value: 2.32, name: '南阳市', itemStyle: { color: '#f4f4f4' } },
      { value: 3.59, name: '商丘市', itemStyle: { color: '#b648f5' } },
      { value: 3.69, name: '信阳市', itemStyle: { color: '#3f2fd4' } },
      { value: 1.8, name: '周口市', itemStyle: { color: '#5cff77' } },
      { value: 4.93, name: '驻马店市', itemStyle: { color: '#e55533' } },
      { value: 0.68, name: '济源市', itemStyle: { color: '#ff3163' } }
    ];
    this.pieValue9 = [
      { value: 61.72, name: '郑州市', itemStyle: { color: '#ffdb5c' } },
      { value: 1.8, name: '开封市', itemStyle: { color: '#ff9f7f' } },
      { value: 5.67, name: '洛阳市', itemStyle: { color: '#fb7293' } },
      { value: 1.32, name: '平顶山市', itemStyle: { color: '#e7bcf3' } },
      { value: 2.05, name: '安阳市', itemStyle: { color: '#8378ea' } },
      { value: 0.46, name: '鹤壁市', itemStyle: { color: '#32c5e9' } },
      { value: 5.07, name: '新乡市', itemStyle: { color: '#9fe6b8' } },
      { value: 3.75, name: '焦作市', itemStyle: { color: '#63d18f' } },
      { value: 1.33, name: '濮阳市', itemStyle: { color: '#e06c59' } },
      { value: 2.5, name: '许昌市', itemStyle: { color: '#88d327' } },
      { value: 2.69, name: '漯河市', itemStyle: { color: '#5c82ff' } },
      { value: 0.66, name: '三门峡市', itemStyle: { color: '#3486da' } },
      { value: 2.08, name: '南阳市', itemStyle: { color: '#f4f4f4' } },
      { value: 1.75, name: '商丘市', itemStyle: { color: '#b648f5' } },
      { value: 2.18, name: '信阳市', itemStyle: { color: '#3f2fd4' } },
      { value: 1.0, name: '周口市', itemStyle: { color: '#5cff77' } },
      { value: 3.74, name: '驻马店市', itemStyle: { color: '#e55533' } },
      { value: 0.22, name: '济源市', itemStyle: { color: '#ff3163' } }
    ];


    // array.forEach(element => {
      
    // });
  }
}
