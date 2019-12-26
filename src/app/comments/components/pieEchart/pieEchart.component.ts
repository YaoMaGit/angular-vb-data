import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-echart',
  templateUrl: './pieEchart.component.html',
  styleUrls: ['./pieEchart.component.scss']
})
export class PieEchart implements OnInit {
  @Input() title; // 大标题
  @Input() pieValue1;
  @Input() pieValue2;
  @Input() pieValue3;
  constructor() {}
  preValue: any;
  tabActive: Number;
  options: any;
  ngOnInit() {
    this.tab(1);
    this.options = this.optionFn();
  }
  optionFn() {
    let legendData = [];
    this.preValue.forEach(item => {
      legendData.push(item.name);
    });
    let options = { 
        tooltip: {
            trigger: 'item',
            // formatter:function (parms){
            //   var str=  parms.seriesName+"</br>"+
            //     parms.marker+""+parms.data.legendname+"</br>"+
            //     "数量："+ parms.data.value+"</br>"+
            //     "占比："+ parms.percent+"%";
            //     return  str ;
            // }
        },
        legend: {
          show:false,
            orient: 'vertical',
            left:'70%',
            align:'left',
            top:'middle',
            textStyle: {
                color:'#8C8C8C'
            },
            height:250
        },
        series: [
            {
                name:'',
                type:'pie',
                center:  ['50%', '31%'],
                radius: ['10%', '35%'],
                 clockwise: true, //饼图的扇区是否是顺时针排布
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outter',
                         formatter:function (parms){
                             return parms.data.legendname
                         }
                    }
                },
                labelLine: {
                    show:false,
                    normal: {
                      length:50,
                      length2:6,
                      smooth:false,
                    }
                },
                data:this.preValue
            }
        ]
    };
    return options;
  }
  tab(val: any) {
    this.tabActive = val;
    if (val === 1) {
      this.preValue = this.pieValue1;
    } else if (val === 2) {
      this.preValue = this.pieValue2;
    } else if (val === 3) {
      this.preValue = this.pieValue3;
    }
    this.options = this.optionFn();
  }
}
