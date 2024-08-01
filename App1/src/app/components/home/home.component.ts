import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})
export default class HomeComponent {


    userName: string = "Mai Allam";
    userAge: number = 23;


    changeName(e: any) {
        this.userName = e.target.value;
    }
}
