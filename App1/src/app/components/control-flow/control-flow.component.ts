import { Product } from './../../interfaces/product';
import { Component } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  productList: Product[] = [
    { id: 1, name: "Toshiba", image: 'assets/images/testimonial-2.jpg', price: 2999, model: 2022, count: 1 },
    { id: 2, name: "Iphone", image: 'assets/images/testimonial-1.jpg', price: 59999, model: 2024, count: 93 },
    { id: 3, name: "Htc", image: 'assets/images/testimonial-2.jpg', price: 12000, model: 2023, count: 100 },
    { id: 4, name: "Oppo", image: 'assets/images/testimonial-2.jpg', price: 7000, model: 2023, count: 0 },
    { id: 5, name: "Xiami", image: 'assets/images/testimonial-1.jpg', price: 10000, model: 2020, count: 101 },
    { id: 6, name: "Realme", image: 'assets/images/testimonial-2.jpg', price: 6599, model: 2022, count: 131 },
    { id: 7, name: "Toshiba", image: 'assets/images/testimonial-1.jpg', price: 25896, model: 2021, count: 111 },
    { id: 8, name: "Iphone", image: 'assets/images/testimonial-2.jpg', price: 52572, model: 2022, count: 0 },
  ];

  recommenedList: Product[] = [
    { id: 1, name: "Toshiba", image: 'assets/images/testimonial-2.jpg', price: 2999, model: 2022, count: 1 },
    { id: 2, name: "Iphone", image: 'assets/images/testimonial-1.jpg', price: 59999, model: 2024, count: 93 },
    { id: 3, name: "Htc", image: 'assets/images/testimonial-2.jpg', price: 12000, model: 2023, count: 100 },
  ];

}