import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  userName: string = "Mai Allam";
  userAge: number = 23;


  changeName(e: any) {
    this.userName = e.target.value;
  }
}
