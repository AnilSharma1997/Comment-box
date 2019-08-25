import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService : AuthService,
    private router : Router,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      username:[null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onLogInClick(){
    if(this.LoginForm.invalid){
      return;
    }
    const loginData = {
      username : this.LoginForm.value.username,
      password : this.LoginForm.value.password
    }
    this.authService.authenticateUser(loginData).subscribe(response =>{
      if(response['success']){
        this.authService.storeUserData(response['token'], response['user']);
        this.toastr.success('Successfully Logged In');
        this.router.navigate(['/']);
      }
      else{
        this.toastr.error(response['msg']);
        this.router.navigate(['/login']);
      }
    },
    (err) =>{
      this.toastr.error('Username or password is incorrect');
    })
  }
}
