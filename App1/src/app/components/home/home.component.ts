import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [RouterOutlet, FormsModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})
export default class HomeComponent {


    userName: string = "Mai Allam";
    userAge: number = 23;
}
