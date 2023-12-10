import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnDestroy{

  @Output()
  emitActionLogin:EventEmitter<any>  = new EventEmitter();

  signupForm!:FormGroup
  displayotpFlag:boolean = false;
  displayVerifyFlag:boolean = false;
  generateopt!:number
  otpCounter!:number
  obs:Subscription = new Subscription();

  constructor(private fb:FormBuilder,private http:HttpService){

  }
  
  ngOnInit(){
    this.getFormData();

  }
  
  getFormData(){
    this.signupForm = this.fb.group({
      'username':['',[Validators.required]],
      'email':['',[Validators.required]],
      'mobileno':['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      'otpVerified':[false],
      'password':['',[Validators.required]]
    })

  }
  navigateTologin(){
    this.emitActionLogin.emit('Login')
  }

  //otp related methods
  getotp(){
    this.displayotpFlag = true;
    this.displayVerifyFlag = true;
    this.generateopt = Math.floor(1000+Math.random()* 9000);
    console.log("otp is",this.generateopt);
    alert("Your otp is :  "+this.generateopt);
    
    
   this.obs =  interval(1000).subscribe((el:any)=>{
      this.otpCounter = 30 - el;
      if(this.otpCounter == 0){
        this.obs.unsubscribe();
      }
      console.log(" otp time :",this.otpCounter)
    })
  }
  //we can also unsubscribe in ondestroy
  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }
  verifyotp(){
    if(this.otpentered && (this.generateopt == this.otpentered)){
      this.displayVerifyFlag =false;
      this.displayotpFlag = false;
      
      this.signupForm.get('otpVerified')?.setValue(true);  
      this.obs.unsubscribe();
    }else{
      alert("Please enter valid OTP")
    }

  }

  otpentered!:number
  changeotp(data:any){
    this.otpentered = data.target.value;
    console.log("otp Entered",this.otpentered);
    
  }

  signupClickData(){

    const data= this.signupForm.value;
    this.http.postData('users',data).subscribe((el:any)=>{
      console.log("user Field data entered in form: ",el);

      alert("User Registered Successfully");
      
    })
  }
}
