import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // private imgUrl='http://placehold.it/320x150';

  // ProductComponent控制器中：声明一个数组存储页面上展示商品信息的数据
  private products: Array<Product>;

  constructor() { }

  // ngOnInit()方法是组件生命周期钩子中的一个钩子，这个方法会在组件被实例化后调用一次，初始化组件中的数据
  ngOnInit() {
    // 初始化数组
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学习angular时创建的', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，是我在学习angular时创建的', ['图书', '硬件设备']),
      new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，是我在学习angular时创建的', ['电子产品', '硬件设备']),
      new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是我在学习angular时创建的', ['电子产品']),
      new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品，是我在学习angular时创建的', ['电子产品', '硬件设备']),
      new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，是我在学习angular时创建的', ['图书', '硬件设备'])
    ];
  }

}

// 封装产品信息
export class Product {
  constructor(
    // 商品id
    public id: number,
    // 商品名称
    public title: string,
    // 商品价格
    public price: number,
    // 星级评价
    public rating: number,
    // 商品描述
    public desc: string,
    // 商品类别:数组型
    public categories: Array<string>
  ) {

  }
}
