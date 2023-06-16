import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email:string="";
  password:string="";

  constructor(private UserService: UserservicesService){}

  login(){

    this.UserService.login(this.email, this.password)

    console.log("email: ", this.email)
    console.log("password: ", this.password);
  }

}
