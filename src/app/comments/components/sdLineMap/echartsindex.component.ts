import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
@Component({
  selector: 'app-echartsindex',
  templateUrl: './echartsindex.component.html',
  styleUrls: ['./echartsindex.component.scss']
})
export class SdLineMap implements OnInit {
  options: any;
  registerMap: any;
  optionsMap: any;
  geoCoordMap: any = {
    郑州市: [113.665412, 34.757975],
    开封市: [114.341447, 34.797049],
    洛阳市: [112.434468, 34.663041],
    南阳市: [112.540918, 32.999082],
    漯河市: [114.026405, 33.575855],
    许昌市: [113.826063, 34.022956],
    三门峡市: [111.194099, 34.777338],
    平顶山市: [113.307718, 33.735241],
    驻马店市: [114.024736, 32.980169],
    周口市: [114.649653, 33.620357],
    新乡市: [113.883991, 35.302616],
    鹤壁市: [114.295444, 35.748236],
    焦作市: [113.238266, 35.23904],
    濮阳市: [115.041299, 35.768234],
    安阳市: [114.352482, 36.103442],
    商丘市: [115.650497, 34.437054],
    信阳市: [114.075031, 32.123274],
    济源市: [112.590047, 35.090378]
  };
  BJData = [
    [{ name: '郑州市' }, { name: '郑州市', value: 40 }],
    [{ name: '郑州市' }, { name: '信阳市', value: 40 }],
    [{ name: '郑州市' }, { name: '许昌市', value: 40 }],
    [{ name: '郑州市' }, { name: '南阳市', value: 40 }],
    [{ name: '郑州市' }, { name: '商丘市', value: 40 }],
    [{ name: '郑州市' }, { name: '濮阳市', value: 40 }],
    [{ name: '郑州市' }, { name: '安阳市', value: 40 }],
    [{ name: '郑州市' }, { name: '焦作市', value: 40 }],
    [{ name: '郑州市' }, { name: '鹤壁市', value: 40 }],
    [{ name: '郑州市' }, { name: '新乡市', value: 40 }],
    [{ name: '郑州市' }, { name: '周口市', value: 40 }],
    [{ name: '郑州市' }, { name: '驻马店市', value: 40 }],
    [{ name: '郑州市' }, { name: '三门峡市', value: 40 }],
    [{ name: '郑州市' }, { name: '洛阳市', value: 40 }]
  ];

  public linesData = [];

   toFromelines1 = [
    {fromName: '郑州市', toName: '新乡市', numValue: 65, coords: [[113.665412, 34.757975], [113.883991, 35.302616]]},
    {fromName: '郑州市', toName: '开封市', numValue: 58, coords: [[113.665412, 34.757975], [114.341447, 34.797049]]},
    {fromName: '郑州市', toName: '商丘市', numValue: 67, coords: [[113.665412, 34.757975], [115.650497, 34.437054]]},
    {fromName: '郑州市', toName: '焦作市', numValue: 59, coords: [[113.665412, 34.757975], [113.238266, 35.23904]]},
    {fromName: '郑州市', toName: '济源市', numValue: 54, coords: [[113.665412, 34.757975], [112.590047, 35.090378]]},
    {fromName: '郑州市', toName: '洛阳市', numValue: 74, coords: [[113.665412, 34.757975], [112.434468, 34.663041]]},
    {fromName: '郑州市', toName: '三门峡市', numValue: 58, coords: [[113.665412, 34.757975], [111.194099, 34.777338]]},
    {fromName: '郑州市', toName: '鹤壁市', numValue: 60, coords: [[113.665412, 34.757975], [114.295444, 35.748236]]},
    {fromName: '郑州市', toName: '安阳市', numValue: 62, coords: [[113.665412, 34.757975], [114.352482, 36.103442]]},
    {fromName: '郑州市', toName: '濮阳市', numValue: 61, coords: [[113.665412, 34.757975], [115.041299, 35.768234]]},
    {fromName: '郑州市', toName: '许昌市', numValue: 60, coords: [[113.665412, 34.757975], [113.826063, 34.022956]]},
    {fromName: '郑州市', toName: '平顶山市', numValue: 64, coords: [[113.665412, 34.757975], [113.307718, 33.735241]]},
    {fromName: '郑州市', toName: '周口市', numValue: 59, coords: [[113.665412, 34.757975], [114.649653, 33.620357]]},
    {fromName: '郑州市', toName: '漯河市', numValue: 67, coords: [[113.665412, 34.757975], [114.026405, 33.575855]]},
    {fromName: '郑州市', toName: '南阳市', numValue: 63, coords: [[113.665412, 34.757975], [112.540918, 32.999082]]},
    {fromName: '郑州市', toName: '信阳市', numValue: 60, coords: [[113.665412, 34.757975], [114.075031, 32.123274]]},
    {fromName: '郑州市', toName: '驻马店市', numValue: 63, coords: [[113.665412, 34.757975], [114.024736, 32.980169]]},



  ];
  toFromelines2 = [
    {fromName: '开封市', toName: '新乡市', numValue: 5, coords: [[114.341447, 34.797049], [113.883991, 35.302616]]},
    {fromName: '开封市', toName: '郑州市', numValue: 7, coords: [[114.341447, 34.797049], [113.665412, 34.757975]]},
    {fromName: '开封市', toName: '商丘市', numValue: 5, coords: [[114.341447, 34.797049], [115.650497, 34.437054]]},
    {fromName: '开封市', toName: '焦作市', numValue: 5, coords: [[114.341447, 34.797049], [113.238266, 35.23904]]},
    {fromName: '开封市', toName: '济源市', numValue: 4, coords: [[114.341447, 34.797049], [112.590047, 35.090378]]},
    {fromName: '开封市', toName: '洛阳市', numValue: 5, coords: [[114.341447, 34.797049], [112.434468, 34.663041]]},
    {fromName: '开封市', toName: '三门峡市', numValue: 4, coords: [[114.341447, 34.797049], [111.194099, 34.777338]]},
    {fromName: '开封市', toName: '鹤壁市', numValue: 4, coords: [[114.341447, 34.797049], [114.295444, 35.748236]]},
    {fromName: '开封市', toName: '安阳市', numValue: 5, coords: [[114.341447, 34.797049], [114.352482, 36.103442]]},
    {fromName: '开封市', toName: '濮阳市', numValue: 5, coords: [[114.341447, 34.797049], [115.041299, 35.768234]]},
    {fromName: '开封市', toName: '许昌市', numValue: 6, coords: [[114.341447, 34.797049], [113.826063, 34.022956]]},
    {fromName: '开封市', toName: '平顶山市', numValue: 5, coords: [[114.341447, 34.797049], [113.307718, 33.735241]]},
    {fromName: '开封市', toName: '周口市', numValue: 5, coords: [[114.341447, 34.797049], [114.649653, 33.620357]]},
    {fromName: '开封市', toName: '漯河市', numValue: 5, coords: [[114.341447, 34.797049], [114.026405, 33.575855]]},
    {fromName: '开封市', toName: '南阳市', numValue: 5, coords: [[114.341447, 34.797049], [112.540918, 32.999082]]},
    {fromName: '开封市', toName: '信阳市', numValue: 4, coords: [[114.341447, 34.797049], [114.075031, 32.123274]]},
    {fromName: '开封市', toName: '驻马店市', numValue: 5, coords: [[114.341447, 34.797049], [114.024736, 32.980169]]},
  ];
  toFromelines3 = [
    {fromName: '新乡市', toName: '开封市', numValue: 12, coords: [[113.883991, 35.302616], [114.341447, 34.797049]]},
    {fromName: '新乡市', toName: '郑州市', numValue: 15, coords: [[113.883991, 35.302616], [113.665412, 34.757975]]},
    {fromName: '新乡市', toName: '商丘市', numValue: 11, coords: [[113.883991, 35.302616], [115.650497, 34.437054]]},
    {fromName: '新乡市', toName: '焦作市', numValue: 11, coords: [[113.883991, 35.302616], [113.238266, 35.23904]]},
    {fromName: '新乡市', toName: '济源市', numValue: 10, coords: [[113.883991, 35.302616], [112.590047, 35.090378]]},
    {fromName: '新乡市', toName: '洛阳市', numValue: 13, coords: [[113.883991, 35.302616], [112.434468, 34.663041]]},
    {fromName: '新乡市', toName: '三门峡市', numValue: 10, coords: [[113.883991, 35.302616], [111.194099, 34.777338]]},
    {fromName: '新乡市', toName: '鹤壁市', numValue: 10, coords: [[113.883991, 35.302616], [114.295444, 35.748236]]},
    {fromName: '新乡市', toName: '安阳市', numValue: 12, coords: [[113.883991, 35.302616], [114.352482, 36.103442]]},
    {fromName: '新乡市', toName: '濮阳市', numValue: 11, coords: [[113.883991, 35.302616], [115.041299, 35.768234]]},
    {fromName: '新乡市', toName: '许昌市', numValue: 11, coords: [[113.883991, 35.302616], [113.826063, 34.022956]]},
    {fromName: '新乡市', toName: '平顶山市', numValue: 11, coords: [[113.883991, 35.302616], [113.307718, 33.735241]]},
    {fromName: '新乡市', toName: '周口市', numValue: 11, coords: [[113.883991, 35.302616], [114.649653, 33.620357]]},
    {fromName: '新乡市', toName: '漯河市', numValue: 11, coords: [[113.883991, 35.302616], [114.026405, 33.575855]]},
    {fromName: '新乡市', toName: '南阳市', numValue: 11, coords: [[113.883991, 35.302616], [112.540918, 32.999082]]},
    {fromName: '新乡市', toName: '信阳市', numValue: 10, coords: [[113.883991, 35.302616], [114.075031, 32.123274]]},
    {fromName: '新乡市', toName: '驻马店市', numValue: 11, coords: [[113.883991, 35.302616], [114.024736, 32.980169]]},
  ];
  toFromelines4 = [
    {fromName: '商丘市', toName: '开封市', numValue: 9, coords: [[115.650497, 34.437054], [114.341447, 34.797049]]},
    {fromName: '商丘市', toName: '郑州市', numValue: 15, coords: [[115.650497, 34.437054], [113.665412, 34.757975]]},
    {fromName: '商丘市', toName: '新乡市', numValue: 9, coords: [[115.650497, 34.437054], [113.883991, 35.302616]]},
    {fromName: '商丘市', toName: '焦作市', numValue: 9, coords: [[115.650497, 34.437054], [113.238266, 35.23904]]},
    {fromName: '商丘市', toName: '济源市', numValue: 8, coords: [[115.650497, 34.437054], [112.590047, 35.090378]]},
    {fromName: '商丘市', toName: '洛阳市', numValue: 9, coords: [[115.650497, 34.437054], [112.434468, 34.663041]]},
    {fromName: '商丘市', toName: '三门峡市', numValue: 8, coords: [[115.650497, 34.437054], [111.194099, 34.777338]]},
    {fromName: '商丘市', toName: '鹤壁市', numValue: 8, coords: [[115.650497, 34.437054], [114.295444, 35.748236]]},
    {fromName: '商丘市', toName: '安阳市', numValue: 9, coords: [[115.650497, 34.437054], [114.352482, 36.103442]]},
    {fromName: '商丘市', toName: '濮阳市', numValue: 9, coords: [[115.650497, 34.437054], [115.041299, 35.768234]]},
    {fromName: '商丘市', toName: '许昌市', numValue: 9, coords: [[115.650497, 34.437054], [113.826063, 34.022956]]},
    {fromName: '商丘市', toName: '平顶山市', numValue: 8, coords: [[115.650497, 34.437054], [113.307718, 33.735241]]},
    {fromName: '商丘市', toName: '周口市', numValue: 8, coords: [[115.650497, 34.437054], [114.649653, 33.620357]]},
    {fromName: '商丘市', toName: '漯河市', numValue: 9, coords: [[115.650497, 34.437054], [114.026405, 33.575855]]},
    {fromName: '商丘市', toName: '南阳市', numValue: 9, coords: [[115.650497, 34.437054], [112.540918, 32.999082]]},
    {fromName: '商丘市', toName: '信阳市', numValue: 8, coords: [[115.650497, 34.437054], [114.075031, 32.123274]]},
    {fromName: '商丘市', toName: '驻马店市', numValue: 9, coords: [[115.650497, 34.437054], [114.024736, 32.980169]]},
  ];
  toFromelines5 = [
    {fromName: '焦作市', toName: '开封市', numValue: 7, coords: [[113.238266, 35.23904], [114.341447, 34.797049]]},
    {fromName: '焦作市', toName: '郑州市', numValue: 12, coords: [[113.238266, 35.23904], [113.665412, 34.757975]]},
    {fromName: '焦作市', toName: '新乡市', numValue: 8, coords: [[113.238266, 35.23904], [113.883991, 35.302616]]},
    {fromName: '焦作市', toName: '商丘市', numValue: 8, coords: [[113.238266, 35.23904], [115.650497, 34.437054]]},
    {fromName: '焦作市', toName: '济源市', numValue: 7, coords: [[113.238266, 35.23904], [112.590047, 35.090378]]},
    {fromName: '焦作市', toName: '洛阳市', numValue: 8, coords: [[113.238266, 35.23904], [112.434468, 34.663041]]},
    {fromName: '焦作市', toName: '三门峡市', numValue: 7, coords: [[113.238266, 35.23904], [111.194099, 34.777338]]},
    {fromName: '焦作市', toName: '鹤壁市', numValue: 7, coords: [[113.238266, 35.23904], [114.295444, 35.748236]]},
    {fromName: '焦作市', toName: '安阳市', numValue: 8, coords: [[113.238266, 35.23904], [114.352482, 36.103442]]},
    {fromName: '焦作市', toName: '濮阳市', numValue: 8, coords: [[113.238266, 35.23904], [115.041299, 35.768234]]},
    {fromName: '焦作市', toName: '许昌市', numValue: 8, coords: [[113.238266, 35.23904], [113.826063, 34.022956]]},
    {fromName: '焦作市', toName: '平顶山市', numValue: 8, coords: [[113.238266, 35.23904], [113.307718, 33.735241]]},
    {fromName: '焦作市', toName: '周口市', numValue: 8, coords: [[113.238266, 35.23904], [114.649653, 33.620357]]},
    {fromName: '焦作市', toName: '漯河市', numValue: 8, coords: [[113.238266, 35.23904], [114.026405, 33.575855]]},
    {fromName: '焦作市', toName: '南阳市', numValue: 8, coords: [[113.238266, 35.23904], [112.540918, 32.999082]]},
    {fromName: '焦作市', toName: '信阳市', numValue: 7, coords: [[113.238266, 35.23904], [114.075031, 32.123274]]},
    {fromName: '焦作市', toName: '驻马店市', numValue: 8, coords: [[113.238266, 35.23904], [114.024736, 32.980169]]},
  ];
  toFromelines6 = [
    {fromName: '济源市', toName: '开封市', numValue: 2, coords: [[112.590047, 35.090378], [114.341447, 34.797049]]},
    {fromName: '济源市', toName: '郑州市', numValue: 4, coords: [[112.590047, 35.090378], [113.665412, 34.757975]]},
    {fromName: '济源市', toName: '新乡市', numValue: 1, coords: [[112.590047, 35.090378], [113.883991, 35.302616]]},
    {fromName: '济源市', toName: '商丘市', numValue: 1, coords: [[112.590047, 35.090378], [115.650497, 34.437054]]},
    {fromName: '济源市', toName: '焦作市', numValue: 1, coords: [[112.590047, 35.090378], [113.238266, 35.23904]]},
    {fromName: '济源市', toName: '洛阳市', numValue: 2, coords: [[112.590047, 35.090378], [112.434468, 34.663041]]},
    {fromName: '济源市', toName: '三门峡市', numValue: 1, coords: [[112.590047, 35.090378], [111.194099, 34.777338]]},
    {fromName: '济源市', toName: '鹤壁市', numValue: 1, coords: [[112.590047, 35.090378], [114.295444, 35.748236]]},
    {fromName: '济源市', toName: '安阳市', numValue: 2, coords: [[112.590047, 35.090378], [114.352482, 36.103442]]},
    {fromName: '济源市', toName: '濮阳市', numValue: 2, coords: [[112.590047, 35.090378], [115.041299, 35.768234]]},
    {fromName: '济源市', toName: '许昌市', numValue: 1, coords: [[112.590047, 35.090378], [113.826063, 34.022956]]},
    {fromName: '济源市', toName: '平顶山市', numValue: 1, coords: [[112.590047, 35.090378], [113.307718, 33.735241]]},
    {fromName: '济源市', toName: '周口市', numValue: 1, coords: [[112.590047, 35.090378], [114.649653, 33.620357]]},
    {fromName: '济源市', toName: '漯河市', numValue: 1, coords: [[112.590047, 35.090378], [114.026405, 33.575855]]},
    {fromName: '济源市', toName: '南阳市', numValue: 1, coords: [[112.590047, 35.090378], [112.540918, 32.999082]]},
    {fromName: '济源市', toName: '信阳市', numValue: 1, coords: [[112.590047, 35.090378], [114.075031, 32.123274]]},
    {fromName: '济源市', toName: '驻马店市', numValue: 1, coords: [[112.590047, 35.090378], [114.024736, 32.980169]]},
  ];
  toFromelines7 = [
    {fromName: '洛阳市', toName: '开封市', numValue: 20, coords: [[112.434468, 34.663041], [114.341447, 34.797049]]},
    {fromName: '洛阳市', toName: '郑州市', numValue: 23, coords: [[112.434468, 34.663041], [113.665412, 34.757975]]},
    {fromName: '洛阳市', toName: '新乡市', numValue: 18, coords: [[112.434468, 34.663041], [113.883991, 35.302616]]},
    {fromName: '洛阳市', toName: '商丘市', numValue: 18, coords: [[112.434468, 34.663041], [115.650497, 34.437054]]},
    {fromName: '洛阳市', toName: '焦作市', numValue: 17, coords: [[112.434468, 34.663041], [113.238266, 35.23904]]},
    {fromName: '洛阳市', toName: '济源市', numValue: 16, coords: [[112.434468, 34.663041], [112.590047, 35.090378]]},
    {fromName: '洛阳市', toName: '三门峡市', numValue: 17, coords: [[112.434468, 34.663041], [111.194099, 34.777338]]},
    {fromName: '洛阳市', toName: '鹤壁市', numValue: 16, coords: [[112.434468, 34.663041], [114.295444, 35.748236]]},
    {fromName: '洛阳市', toName: '安阳市', numValue: 18, coords: [[112.434468, 34.663041], [114.352482, 36.103442]]},
    {fromName: '洛阳市', toName: '濮阳市', numValue: 18, coords: [[112.434468, 34.663041], [115.041299, 35.768234]]},
    {fromName: '洛阳市', toName: '许昌市', numValue: 18, coords: [[112.434468, 34.663041], [113.826063, 34.022956]]},
    {fromName: '洛阳市', toName: '平顶山市', numValue: 16, coords: [[112.434468, 34.663041], [113.307718, 33.735241]]},
    {fromName: '洛阳市', toName: '周口市', numValue: 18, coords: [[112.434468, 34.663041], [114.649653, 33.620357]]},
    {fromName: '洛阳市', toName: '漯河市', numValue: 18, coords: [[112.434468, 34.663041], [114.026405, 33.575855]]},
    {fromName: '洛阳市', toName: '南阳市', numValue: 18, coords: [[112.434468, 34.663041], [112.540918, 32.999082]]},
    {fromName: '洛阳市', toName: '信阳市', numValue: 17, coords: [[112.434468, 34.663041], [114.075031, 32.123274]]},
    {fromName: '洛阳市', toName: '驻马店市', numValue: 18, coords: [[112.434468, 34.663041], [114.024736, 32.980169]]},
  ];
  toFromelines8 = [
    {fromName: '三门峡市', toName: '开封市', numValue: 2, coords: [[111.194099, 34.777338], [114.341447, 34.797049]]},
    {fromName: '三门峡市', toName: '郑州市', numValue: 4, coords: [[111.194099, 34.777338], [113.665412, 34.757975]]},
    {fromName: '三门峡市', toName: '新乡市', numValue: 1, coords: [[111.194099, 34.777338], [113.883991, 35.302616]]},
    {fromName: '三门峡市', toName: '商丘市', numValue: 2, coords: [[111.194099, 34.777338], [115.650497, 34.437054]]},
    {fromName: '三门峡市', toName: '焦作市', numValue: 1, coords: [[111.194099, 34.777338], [113.238266, 35.23904]]},
    {fromName: '三门峡市', toName: '济源市', numValue: 1, coords: [[111.194099, 34.777338], [112.590047, 35.090378]]},
    {fromName: '三门峡市', toName: '洛阳市', numValue: 2, coords: [[111.194099, 34.777338], [112.434468, 34.663041]]},
    {fromName: '三门峡市', toName: '鹤壁市', numValue: 1, coords: [[111.194099, 34.777338], [114.295444, 35.748236]]},
    {fromName: '三门峡市', toName: '安阳市', numValue: 1, coords: [[111.194099, 34.777338], [114.352482, 36.103442]]},
    {fromName: '三门峡市', toName: '濮阳市', numValue: 2, coords: [[111.194099, 34.777338], [115.041299, 35.768234]]},
    {fromName: '三门峡市', toName: '许昌市', numValue: 2, coords: [[111.194099, 34.777338], [113.826063, 34.022956]]},
    {fromName: '三门峡市', toName: '平顶山市', numValue: 1, coords: [[111.194099, 34.777338], [113.307718, 33.735241]]},
    {fromName: '三门峡市', toName: '周口市', numValue: 2, coords: [[111.194099, 34.777338], [114.649653, 33.620357]]},
    {fromName: '三门峡市', toName: '漯河市', numValue: 2, coords: [[111.194099, 34.777338], [114.026405, 33.575855]]},
    {fromName: '三门峡市', toName: '南阳市', numValue: 2, coords: [[111.194099, 34.777338], [112.540918, 32.999082]]},
    {fromName: '三门峡市', toName: '信阳市', numValue: 1, coords: [[111.194099, 34.777338], [114.075031, 32.123274]]},
    {fromName: '三门峡市', toName: '驻马店市', numValue: 1, coords: [[111.194099, 34.777338], [114.024736, 32.980169]]},
  ];
  toFromelines9 = [
    {fromName: '鹤壁市', toName: '开封市', numValue: 1, coords: [[114.295444, 35.748236], [114.341447, 34.797049]]},
    {fromName: '鹤壁市', toName: '郑州市', numValue: 3, coords: [[114.295444, 35.748236], [113.665412, 34.757975]]},
    {fromName: '鹤壁市', toName: '新乡市', numValue: 1, coords: [[114.295444, 35.748236], [113.883991, 35.302616]]},
    {fromName: '鹤壁市', toName: '商丘市', numValue: 1, coords: [[114.295444, 35.748236], [115.650497, 34.437054]]},
    {fromName: '鹤壁市', toName: '焦作市', numValue: 1, coords: [[114.295444, 35.748236], [113.238266, 35.23904]]},
    {fromName: '鹤壁市', toName: '济源市', numValue: 1, coords: [[114.295444, 35.748236], [112.590047, 35.090378]]},
    {fromName: '鹤壁市', toName: '洛阳市', numValue: 1, coords: [[114.295444, 35.748236], [112.434468, 34.663041]]},
    {fromName: '鹤壁市', toName: '三门峡市', numValue: 1, coords: [[114.295444, 35.748236], [111.194099, 34.777338]]},
    {fromName: '鹤壁市', toName: '安阳市', numValue: 2, coords: [[114.295444, 35.748236], [114.352482, 36.103442]]},
    {fromName: '鹤壁市', toName: '濮阳市', numValue: 1, coords: [[114.295444, 35.748236], [115.041299, 35.768234]]},
    {fromName: '鹤壁市', toName: '许昌市', numValue: 1, coords: [[114.295444, 35.748236], [113.826063, 34.022956]]},
    {fromName: '鹤壁市', toName: '平顶山市', numValue: 1, coords: [[114.295444, 35.748236], [113.307718, 33.735241]]},
    {fromName: '鹤壁市', toName: '周口市', numValue: 1, coords: [[114.295444, 35.748236], [114.649653, 33.620357]]},
    {fromName: '鹤壁市', toName: '漯河市', numValue: 1, coords: [[114.295444, 35.748236], [114.026405, 33.575855]]},
    {fromName: '鹤壁市', toName: '南阳市', numValue: 1, coords: [[114.295444, 35.748236], [112.540918, 32.999082]]},
    {fromName: '鹤壁市', toName: '信阳市', numValue: 1, coords: [[114.295444, 35.748236], [114.075031, 32.123274]]},
    {fromName: '鹤壁市', toName: '驻马店市', numValue: 1, coords: [[114.295444, 35.748236], [114.024736, 32.980169]]},
  ];
  toFromelines10 = [
    {fromName: '安阳市', toName: '开封市', numValue: 9, coords: [[114.352482, 36.103442], [114.341447, 34.797049]]},
    {fromName: '安阳市', toName: '郑州市', numValue: 16, coords: [[114.352482, 36.103442], [113.665412, 34.757975]]},
    {fromName: '安阳市', toName: '新乡市', numValue: 9, coords: [[114.352482, 36.103442], [113.883991, 35.302616]]},
    {fromName: '安阳市', toName: '商丘市', numValue: 9, coords: [[114.352482, 36.103442], [115.650497, 34.437054]]},
    {fromName: '安阳市', toName: '焦作市', numValue: 9, coords: [[114.352482, 36.103442], [113.238266, 35.23904]]},
    {fromName: '安阳市', toName: '济源市', numValue: 8, coords: [[114.352482, 36.103442], [112.590047, 35.090378]]},
    {fromName: '安阳市', toName: '洛阳市', numValue: 11, coords: [[114.352482, 36.103442], [112.434468, 34.663041]]},
    {fromName: '安阳市', toName: '三门峡市', numValue: 8, coords: [[114.352482, 36.103442], [111.194099, 34.777338]]},
    {fromName: '安阳市', toName: '鹤壁市', numValue: 9, coords: [[114.352482, 36.103442], [114.295444, 35.748236]]},
    {fromName: '安阳市', toName: '濮阳市', numValue: 9, coords: [[114.352482, 36.103442], [115.041299, 35.768234]]},
    {fromName: '安阳市', toName: '许昌市', numValue: 9, coords: [[114.352482, 36.103442], [113.826063, 34.022956]]},
    {fromName: '安阳市', toName: '平顶山市', numValue: 9, coords: [[114.352482, 36.103442], [113.307718, 33.735241]]},
    {fromName: '安阳市', toName: '周口市', numValue: 10, coords: [[114.352482, 36.103442], [114.649653, 33.620357]]},
    {fromName: '安阳市', toName: '漯河市', numValue: 9, coords: [[114.352482, 36.103442], [114.026405, 33.575855]]},
    {fromName: '安阳市', toName: '南阳市', numValue: 8, coords: [[114.352482, 36.103442], [112.540918, 32.999082]]},
    {fromName: '安阳市', toName: '信阳市', numValue: 8, coords: [[114.352482, 36.103442], [114.075031, 32.123274]]},
    {fromName: '安阳市', toName: '驻马店市', numValue: 9, coords: [[114.352482, 36.103442], [114.024736, 32.980169]]},
  ];
  toFromelines11 = [
    {fromName: '濮阳市', toName: '开封市', numValue: 6, coords: [[115.041299, 35.768234], [114.341447, 34.797049]]},
    {fromName: '濮阳市', toName: '郑州市', numValue: 7, coords: [[115.041299, 35.768234], [113.665412, 34.757975]]},
    {fromName: '濮阳市', toName: '新乡市', numValue: 6, coords: [[115.041299, 35.768234], [113.883991, 35.302616]]},
    {fromName: '濮阳市', toName: '商丘市', numValue: 6, coords: [[115.041299, 35.768234], [115.650497, 34.437054]]},
    {fromName: '濮阳市', toName: '焦作市', numValue: 6, coords: [[115.041299, 35.768234], [113.238266, 35.23904]]},
    {fromName: '濮阳市', toName: '济源市', numValue: 5, coords: [[115.041299, 35.768234], [112.590047, 35.090378]]},
    {fromName: '濮阳市', toName: '洛阳市', numValue: 6, coords: [[115.041299, 35.768234], [112.434468, 34.663041]]},
    {fromName: '濮阳市', toName: '三门峡市', numValue: 5, coords: [[115.041299, 35.768234], [111.194099, 34.777338]]},
    {fromName: '濮阳市', toName: '鹤壁市', numValue: 5, coords: [[115.041299, 35.768234], [114.295444, 35.748236]]},
    {fromName: '濮阳市', toName: '安阳市', numValue: 6, coords: [[115.041299, 35.768234], [114.352482, 36.103442]]},
    {fromName: '濮阳市', toName: '许昌市', numValue: 6, coords: [[115.041299, 35.768234], [113.826063, 34.022956]]},
    {fromName: '濮阳市', toName: '平顶山市', numValue: 6, coords: [[115.041299, 35.768234], [113.307718, 33.735241]]},
    {fromName: '濮阳市', toName: '周口市', numValue: 6, coords: [[115.041299, 35.768234], [114.649653, 33.620357]]},
    {fromName: '濮阳市', toName: '漯河市', numValue: 6, coords: [[115.041299, 35.768234], [114.026405, 33.575855]]},
    {fromName: '濮阳市', toName: '南阳市', numValue: 6, coords: [[115.041299, 35.768234], [112.540918, 32.999082]]},
    {fromName: '濮阳市', toName: '信阳市', numValue: 5, coords: [[115.041299, 35.768234], [114.075031, 32.123274]]},
    {fromName: '濮阳市', toName: '驻马店市', numValue: 6, coords: [[115.041299, 35.768234], [114.024736, 32.980169]]},
  ];
  toFromelines12 = [
    {fromName: '许昌市', toName: '开封市', numValue: 11, coords: [[113.826063, 34.022956], [114.341447, 34.797049]]},
    {fromName: '许昌市', toName: '郑州市', numValue: 12, coords: [[113.826063, 34.022956], [113.665412, 34.757975]]},
    {fromName: '许昌市', toName: '新乡市', numValue: 13, coords: [[113.826063, 34.022956], [113.883991, 35.302616]]},
    {fromName: '许昌市', toName: '商丘市', numValue: 11, coords: [[113.826063, 34.022956], [115.650497, 34.437054]]},
    {fromName: '许昌市', toName: '焦作市', numValue: 11, coords: [[113.826063, 34.022956], [113.238266, 35.23904]]},
    {fromName: '许昌市', toName: '济源市', numValue: 9, coords: [[113.826063, 34.022956], [112.590047, 35.090378]]},
    {fromName: '许昌市', toName: '洛阳市', numValue: 12, coords: [[113.826063, 34.022956], [112.434468, 34.663041]]},
    {fromName: '许昌市', toName: '三门峡市', numValue: 10, coords: [[113.826063, 34.022956], [111.194099, 34.777338]]},
    {fromName: '许昌市', toName: '鹤壁市', numValue: 10, coords: [[113.826063, 34.022956], [114.295444, 35.748236]]},
    {fromName: '许昌市', toName: '安阳市', numValue: 11, coords: [[113.826063, 34.022956], [114.352482, 36.103442]]},
    {fromName: '许昌市', toName: '濮阳市', numValue: 10, coords: [[113.826063, 34.022956], [115.041299, 35.768234]]},
    {fromName: '许昌市', toName: '平顶山市', numValue: 11, coords: [[113.826063, 34.022956], [113.307718, 33.735241]]},
    {fromName: '许昌市', toName: '周口市', numValue: 11, coords: [[113.826063, 34.022956], [114.649653, 33.620357]]},
    {fromName: '许昌市', toName: '漯河市', numValue: 12, coords: [[113.826063, 34.022956], [114.026405, 33.575855]]},
    {fromName: '许昌市', toName: '南阳市', numValue: 11, coords: [[113.826063, 34.022956], [112.540918, 32.999082]]},
    {fromName: '许昌市', toName: '信阳市', numValue: 10, coords: [[113.826063, 34.022956], [114.075031, 32.123274]]},
    {fromName: '许昌市', toName: '驻马店市', numValue: 11, coords: [[113.826063, 34.022956], [114.024736, 32.980169]]},
  ];
  toFromelines13 = [
    {fromName: '漯河市', toName: '开封市', numValue: 3, coords: [[114.026405, 33.575855], [114.341447, 34.797049]]},
    {fromName: '漯河市', toName: '郑州市', numValue: 6, coords: [[114.026405, 33.575855], [113.665412, 34.757975]]},
    {fromName: '漯河市', toName: '新乡市', numValue: 3, coords: [[114.026405, 33.575855], [113.883991, 35.302616]]},
    {fromName: '漯河市', toName: '商丘市', numValue: 3, coords: [[114.026405, 33.575855], [115.650497, 34.437054]]},
    {fromName: '漯河市', toName: '焦作市', numValue: 2, coords: [[114.026405, 33.575855], [113.238266, 35.23904]]},
    {fromName: '漯河市', toName: '济源市', numValue: 2, coords: [[114.026405, 33.575855], [112.590047, 35.090378]]},
    {fromName: '漯河市', toName: '洛阳市', numValue: 4, coords: [[114.026405, 33.575855], [112.434468, 34.663041]]},
    {fromName: '漯河市', toName: '三门峡市', numValue: 2, coords: [[114.026405, 33.575855], [111.194099, 34.777338]]},
    {fromName: '漯河市', toName: '鹤壁市', numValue: 2, coords: [[114.026405, 33.575855], [114.295444, 35.748236]]},
    {fromName: '漯河市', toName: '安阳市', numValue: 3, coords: [[114.026405, 33.575855], [114.352482, 36.103442]]},
    {fromName: '漯河市', toName: '濮阳市', numValue: 3, coords: [[114.026405, 33.575855], [115.041299, 35.768234]]},
    {fromName: '漯河市', toName: '平顶山市', numValue: 3, coords: [[114.026405, 33.575855], [113.307718, 33.735241]]},
    {fromName: '漯河市', toName: '周口市', numValue: 3, coords: [[114.026405, 33.575855], [114.649653, 33.620357]]},
    {fromName: '漯河市', toName: '许昌市', numValue: 3, coords: [[114.026405, 33.575855], [113.826063, 34.022956]]},
    {fromName: '漯河市', toName: '南阳市', numValue: 3, coords: [[114.026405, 33.575855], [112.540918, 32.999082]]},
    {fromName: '漯河市', toName: '信阳市', numValue: 2, coords: [[114.026405, 33.575855], [114.075031, 32.123274]]},
    {fromName: '漯河市', toName: '驻马店市', numValue: 4, coords: [[114.026405, 33.575855], [114.024736, 32.980169]]},
  ];
  toFromelines14 = [
    {fromName: '平顶山市', toName: '开封市', numValue: 3, coords: [[113.307718, 33.735241], [114.341447, 34.797049]]},
    {fromName: '平顶山市', toName: '郑州市', numValue: 4, coords: [[113.307718, 33.735241], [113.665412, 34.757975]]},
    {fromName: '平顶山市', toName: '新乡市', numValue: 3, coords: [[113.307718, 33.735241], [113.883991, 35.302616]]},
    {fromName: '平顶山市', toName: '商丘市', numValue: 3, coords: [[113.307718, 33.735241], [115.650497, 34.437054]]},
    {fromName: '平顶山市', toName: '焦作市', numValue: 2, coords: [[113.307718, 33.735241], [113.238266, 35.23904]]},
    {fromName: '平顶山市', toName: '济源市', numValue: 2, coords: [[113.307718, 33.735241], [112.590047, 35.090378]]},
    {fromName: '平顶山市', toName: '洛阳市', numValue: 3, coords: [[113.307718, 33.735241], [112.434468, 34.663041]]},
    {fromName: '平顶山市', toName: '三门峡市', numValue: 2, coords: [[113.307718, 33.735241], [111.194099, 34.777338]]},
    {fromName: '平顶山市', toName: '鹤壁市', numValue: 2, coords: [[113.307718, 33.735241], [114.295444, 35.748236]]},
    {fromName: '平顶山市', toName: '安阳市', numValue: 3, coords: [[113.307718, 33.735241], [114.352482, 36.103442]]},
    {fromName: '平顶山市', toName: '濮阳市', numValue: 3, coords: [[113.307718, 33.735241], [115.041299, 35.768234]]},
    {fromName: '平顶山市', toName: '漯河市', numValue: 3, coords: [[113.307718, 33.735241], [114.026405, 33.575855]]},
    {fromName: '平顶山市', toName: '周口市', numValue: 3, coords: [[113.307718, 33.735241], [114.649653, 33.620357]]},
    {fromName: '平顶山市', toName: '许昌市', numValue: 3, coords: [[113.307718, 33.735241], [113.826063, 34.022956]]},
    {fromName: '平顶山市', toName: '南阳市', numValue: 3, coords: [[113.307718, 33.735241], [112.540918, 32.999082]]},
    {fromName: '平顶山市', toName: '信阳市', numValue: 2, coords: [[113.307718, 33.735241], [114.075031, 32.123274]]},
    {fromName: '平顶山市', toName: '驻马店市', numValue: 3, coords: [[113.307718, 33.735241], [114.024736, 32.980169]]},
  ];
  toFromelines15 = [
    {fromName: '南阳市', toName: '开封市', numValue: 15, coords: [[112.540918, 32.999082], [114.341447, 34.797049]]},
    {fromName: '南阳市', toName: '郑州市', numValue: 16, coords: [[112.540918, 32.999082], [113.665412, 34.757975]]},
    {fromName: '南阳市', toName: '新乡市', numValue: 14, coords: [[112.540918, 32.999082], [113.883991, 35.302616]]},
    {fromName: '南阳市', toName: '商丘市', numValue: 14, coords: [[112.540918, 32.999082], [115.650497, 34.437054]]},
    {fromName: '南阳市', toName: '焦作市', numValue: 14, coords: [[112.540918, 32.999082], [113.238266, 35.23904]]},
    {fromName: '南阳市', toName: '济源市', numValue: 13, coords: [[112.540918, 32.999082], [112.590047, 35.090378]]},
    {fromName: '南阳市', toName: '洛阳市', numValue: 14, coords: [[112.540918, 32.999082], [112.434468, 34.663041]]},
    {fromName: '南阳市', toName: '三门峡市', numValue: 13, coords: [[112.540918, 32.999082], [111.194099, 34.777338]]},
    {fromName: '南阳市', toName: '鹤壁市', numValue: 12, coords: [[112.540918, 32.999082], [114.295444, 35.748236]]},
    {fromName: '南阳市', toName: '安阳市', numValue: 14, coords: [[112.540918, 32.999082], [114.352482, 36.103442]]},
    {fromName: '南阳市', toName: '濮阳市', numValue: 14, coords: [[112.540918, 32.999082], [115.041299, 35.768234]]},
    {fromName: '南阳市', toName: '漯河市', numValue: 14, coords: [[112.540918, 32.999082], [114.026405, 33.575855]]},
    {fromName: '南阳市', toName: '周口市', numValue: 14, coords: [[112.540918, 32.999082], [114.649653, 33.620357]]},
    {fromName: '南阳市', toName: '许昌市', numValue: 14, coords: [[112.540918, 32.999082], [113.826063, 34.022956]]},
    {fromName: '南阳市', toName: '平顶山市', numValue: 14, coords: [[112.540918, 32.999082], [113.307718, 33.735241]]},
    {fromName: '南阳市', toName: '信阳市', numValue: 13, coords: [[112.540918, 32.999082], [114.075031, 32.123274]]},
    {fromName: '南阳市', toName: '驻马店市', numValue: 14, coords: [[112.540918, 32.999082], [114.024736, 32.980169]]},
  ];
   toFromelines16 = [
    {fromName: '周口市', toName: '开封市', numValue: 4, coords: [[114.649653, 33.620357], [114.341447, 34.797049]]},
    {fromName: '周口市', toName: '郑州市', numValue: 4, coords: [[114.649653, 33.620357], [113.665412, 34.757975]]},
    {fromName: '周口市', toName: '新乡市', numValue: 14, coords: [[114.649653, 33.620357], [113.883991, 35.302616]]},
    {fromName: '周口市', toName: '商丘市', numValue: 4, coords: [[114.649653, 33.620357], [115.650497, 34.437054]]},
    {fromName: '周口市', toName: '焦作市', numValue: 4, coords: [[114.649653, 33.620357], [113.238266, 35.23904]]},
    {fromName: '周口市', toName: '济源市', numValue: 3, coords: [[114.649653, 33.620357], [112.590047, 35.090378]]},
    {fromName: '周口市', toName: '洛阳市', numValue: 4, coords: [[114.649653, 33.620357], [112.434468, 34.663041]]},
    {fromName: '周口市', toName: '三门峡市', numValue: 3, coords: [[114.649653, 33.620357], [111.194099, 34.777338]]},
    {fromName: '周口市', toName: '鹤壁市', numValue: 3, coords: [[114.649653, 33.620357], [114.295444, 35.748236]]},
    {fromName: '周口市', toName: '安阳市', numValue: 4, coords: [[114.649653, 33.620357], [114.352482, 36.103442]]},
    {fromName: '周口市', toName: '濮阳市', numValue: 4, coords: [[114.649653, 33.620357], [115.041299, 35.768234]]},
    {fromName: '周口市', toName: '漯河市', numValue: 4, coords: [[114.649653, 33.620357], [114.026405, 33.575855]]},
    {fromName: '周口市', toName: '南阳市', numValue: 4, coords: [[114.649653, 33.620357], [112.540918, 32.999082]]},
    {fromName: '周口市', toName: '许昌市', numValue: 4, coords: [[114.649653, 33.620357], [113.826063, 34.022956]]},
    {fromName: '周口市', toName: '平顶山市', numValue: 4, coords: [[114.649653, 33.620357], [113.307718, 33.735241]]},
    {fromName: '周口市', toName: '信阳市', numValue: 3, coords: [[114.649653, 33.620357], [114.075031, 32.123274]]},
    {fromName: '周口市', toName: '驻马店市', numValue: 4, coords: [[114.649653, 33.620357], [114.024736, 32.980169]]},
  ];
  toFromelines17 = [
    {fromName: '信阳市', toName: '开封市', numValue: 3, coords: [[114.075031, 32.123274], [114.341447, 34.797049]]},
    {fromName: '信阳市', toName: '郑州市', numValue: 3, coords: [[114.075031, 32.123274], [113.665412, 34.757975]]},
    {fromName: '信阳市', toName: '新乡市', numValue: 3, coords: [[114.075031, 32.123274], [113.883991, 35.302616]]},
    {fromName: '信阳市', toName: '商丘市', numValue: 3, coords: [[114.075031, 32.123274], [115.650497, 34.437054]]},
    {fromName: '信阳市', toName: '焦作市', numValue: 3, coords: [[114.075031, 32.123274], [113.238266, 35.23904]]},
    {fromName: '信阳市', toName: '济源市', numValue: 3, coords: [[114.075031, 32.123274], [112.590047, 35.090378]]},
    {fromName: '信阳市', toName: '洛阳市', numValue: 3, coords: [[114.075031, 32.123274], [112.434468, 34.663041]]},
    {fromName: '信阳市', toName: '三门峡市', numValue: 3, coords: [[114.075031, 32.123274], [111.194099, 34.777338]]},
    {fromName: '信阳市', toName: '鹤壁市', numValue: 3, coords: [[114.075031, 32.123274], [114.295444, 35.748236]]},
    {fromName: '信阳市', toName: '安阳市', numValue: 3, coords: [[114.075031, 32.123274], [114.352482, 36.103442]]},
    {fromName: '信阳市', toName: '濮阳市', numValue: 3, coords: [[114.075031, 32.123274], [115.041299, 35.768234]]},
    {fromName: '信阳市', toName: '漯河市', numValue: 3, coords: [[114.075031, 32.123274], [114.026405, 33.575855]]},
    {fromName: '信阳市', toName: '南阳市', numValue: 3, coords: [[114.075031, 32.123274], [112.540918, 32.999082]]},
    {fromName: '信阳市', toName: '许昌市', numValue: 3, coords: [[114.075031, 32.123274], [113.826063, 34.022956]]},
    {fromName: '信阳市', toName: '平顶山市', numValue: 3, coords: [[114.075031, 32.123274], [113.307718, 33.735241]]},
    {fromName: '信阳市', toName: '周口市', numValue: 3, coords: [[114.075031, 32.123274], [114.649653, 33.620357]]},
    {fromName: '信阳市', toName: '驻马店市', numValue: 3, coords: [[114.075031, 32.123274], [114.024736, 32.980169]]},
  ];

  color = ['#9AFF9A'];
  public colors: any =  ['#9AFF9A',  '#ffde00','#f44336',];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.linesData = this.toFromelines1;
    this.echartsOption();
  }
  getDateFn(){
    let arr = [];
    arr.push({
      name: this.linesData[0].fromName,
      value: this.linesData[0].coords[0].concat(this.linesData[0].numValue)
    });
    this.linesData.forEach(item => {
      arr.push({
        name: item.toName,
        value: item.coords[1].concat(item.numValue)
      })
    });
    console.log(arr)
    return arr
  }
  // echarts配置方法
  echartsOption() {
    this.http.get('../../../assets/henan.json').subscribe(
      datachina => {
        echarts.registerMap('河南', datachina);
        this.optionsMap = {
          visualMap: {
            min: 0,
            max: 100,
            left: 100,
            top: 'bottom',
            text: ['多', '少'],
            realtime: true,
            calculable: false,
            textStyle: {
              color: '#fff'
            },
            inRange: {
              color: this.colors
            }
          },
          tooltip: {
            trigger: 'item',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            formatter: (params, ticket, callback) => {
              console.log(params);
              if(this.linesData[0].fromName === params.name) {
                return '';
              } else {
                return params.marker + '至' + params.name + '始发'+params.seriesName + '： ' + params.value[2];
              }
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
            scaleLimit: {
              min: 1,
              max: 1
            },
            roam: true,
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
          series: [   // 划过线条
            {
              name: '移动',
              type: 'lines',
              mapType: '河南',
              zlevel: 2,
              symbol: ['none', 'none'],
              // coordinateSystem: 'geo',
              // symbolSize: 10,
              tooltip: {
                show: false
              },
              effect: {
                show: true,
                period: 5,
                trailLength: 0.5,
                color: '#fff',
                symbolSize: 3
              },
              lineStyle: {
                normal: {
                  color: this.color[0],
                  width: 0.1,
                  opacity: 0.6,
                  curveness: 0.2
                }
              },
              data: this.linesData
            },
            {
              name: '专线数量',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 3,
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                normal: {
                  formatter: function(val) {
                    if (val.name.indexOf('市') != -1) {
                      return val.name;
                    } else {
                      return '';
                    }
                  },
                  position: 'right',
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              // symbolSize: function(val) {
              //   // return val[2] * (1 / 4);
              //   // return val[2] ;
              // },

              // 防止有的地区圆点显示过小
              symbolSize: 10,
              itemStyle: {
                normal: {
                  color: this.color[0]
                }
              },
              data: this.getDateFn()
            }]
        };
      },
      error => {}
    );
  }

  // 地图元素点击
  echartsClick(params) {
    console.log(params);

    // if(params.name==='郑州市'){
    //   this.linesData=this.toFromelines1

    // }else if(params.name==='开封市'){
    //   this.linesData=this.toFromelines2
    // }
    switch (params.name) {
      case '郑州市':
      this.linesData = this.toFromelines1;
      break;
      case '开封市':
      this.linesData = this.toFromelines2;
      break;
      case '新乡市':
      this.linesData = this.toFromelines3;
      break;
      case '商丘市':
      this.linesData = this.toFromelines4;
      break;
      case '焦作市':
      this.linesData = this.toFromelines5;
      break;
      case '济源市':
      this.linesData = this.toFromelines6;
      break;
      case '洛阳市':
      this.linesData = this.toFromelines7;
      break;
      case '三门峡市':
      this.linesData = this.toFromelines8;
      break;
      case '鹤壁市':
      this.linesData = this.toFromelines9;
      break;
      case '安阳市':
      this.linesData = this.toFromelines10;
      break;
      case '濮阳市':
      this.linesData = this.toFromelines11;
      break;
      case '许昌市':
      this.linesData = this.toFromelines12;
      break;
      case '漯河市':
      this.linesData = this.toFromelines13;
      break;
      case '平顶山市':
      this.linesData = this.toFromelines14;
      break;
      case '南阳市':
      this.linesData = this.toFromelines15;
      break;
      case '周口市':
      this.linesData = this.toFromelines16;
      break;
      case '信阳市':
      this.linesData = this.toFromelines17;
      break;
      };
    this.echartsOption();
    console.log(params.name);
    return params.name;
  }
}
