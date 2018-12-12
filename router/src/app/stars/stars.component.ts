import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // 加一个input装饰器:星级评价组件StarsComponent的rating属性应该由它的父组件传递给它
  @Input()
  // 定义一个属性：用来接收产品组件传给它的星级评价数值，默认值是0
  private rating = 0;

  // 定义一个Boolean类型的数组：装5颗星
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);

    }
    // 初始化数组
    // this.stars=[false,false,true,true,true];
  }

}
