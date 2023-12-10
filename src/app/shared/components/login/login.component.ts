import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { LoginAuthService } from 'src/app/core/services/login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output()
  emitAction:EventEmitter<any> = new EventEmitter();
  
  loginForm!:FormGroup

  constructor(private fb:FormBuilder,private http:HttpService,private auth:LoginAuthService){


  }
  ngOnInit(){
    this.loginForm = this.fb.group({
      'email':['',[Validators.required]],
      'password':['',[Validators.required]],
    })
  }



  navigateTosignup(){
    this.emitAction.emit('SIGN-UP')

  }

  loginData(){
    if(this.loginForm.valid){
      const httppraram = new HttpParams()
              .set('email',this.loginForm.get('email')?.value)
              .set('password',this.loginForm.get('password')?.value)
      this.http.getData('users',httppraram).subscribe((el:any)=>{
        if(el && el.length >0){
          this.auth.addUserDetails(el[0]);
          alert("Login Successful ");
  
        }else{
          alert("Please enter valid crendentials");
        }
      })
  
    }else{
      alert("Email or Password is incorrect");
    }

    }

}

