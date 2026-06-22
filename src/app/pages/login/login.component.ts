import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    username: '',
    password: ''
  };
constructor(private router: Router){}
login() {
  if(this.user.username === 'admin' && this.user.password === '1234') {
    alert('login success');
    this.router.navigate(['/dashboard']);
  } else {
    alert('Invalid Login');
  }
}

}
