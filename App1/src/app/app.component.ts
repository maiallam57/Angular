import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { BindingComponent } from './components/binding/binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { NgforNgifComponent } from "./components/ngfor-ngif/ngfor-ngif.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, BindingComponent, ControlFlowComponent, NgforNgifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App1';
}
