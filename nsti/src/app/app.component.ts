import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl,  ReactiveFormsModule, Validator, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CommonModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nsti';

  loginform= new FormGroup({
    Email:new FormControl('', [Validators.required, Validators.email]),
    Password :new FormControl('',[Validators.required,Validators.minLength(10)])
  })
  get Email(){
    return this.loginform.get('Email')
  }
  get Password(){
    return this.loginform.get('Password')
  }

  // Password =new FormControl('')
}
