import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})
export default class HomeComponent {
    userName: string = "Mai Allam";
    productList: Product[] = [
        { name: "Toshiba", price: 1234, onSale: true },
        { name: "Toshiba", price: 1234 }
    ]
    productListType: SuperProductType[] = [
        { name: "Toshiba", price: 1234, onSale: true },
        { name: "Toshiba", price: 1234 }
    ]

}

interface Product {
    name: string,
    price: number
}

interface Product {
    onSale?: boolean,
    hi?(): string
}

type ProductType = {
    name: string,
    price: number
}
type SuperProductType = ProductType & {
    onSale?: boolean
}