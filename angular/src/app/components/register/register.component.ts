import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  passwordRegExp = environment.passwordPattern;

  constructor(private formBuilder: FormBuilder,
      private authService : AuthService,
      private toastr : ToastrService,
      private router : Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name:[null,Validators.required],
      username:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(this.passwordRegExp)]]
    })
  }
  
  get password() {
    return this.registerForm.get('password');
  }

  onSignupClick(){
    // if(this.registerForm.invalid){
    //   return;
    // }
    const signupData = {
      name : this.registerForm.value.name,
      username : this.registerForm.value.username,
      email : this.registerForm.value.email,
      password : this.registerForm.value.password
    }

    this.authService.registerUser(signupData).subscribe(response =>{
        if(response['success']){
          this.toastr.success('You are now registered and can now login');
          this.router.navigate(['/login']);
        }
        else{
          this.toastr.error('Something went wrong');
          this.router.navigate(['/register']);
        }
    })
  }

}
