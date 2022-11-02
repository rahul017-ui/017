import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isResultsLoading: false | undefined;
  snackBar: any;

  constructor(private userservice:UserService ,private router:Router) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {

    this.userservice.googleAuth().subscribe(
      data => {
      console.log(data);
      this.router.navigate(["/fileupload"])
   }
  )}
  
  googleAuthHandler() {
    this.userservice.googleAuth().subscribe(
      data => {
        console.log(data);
      },
      //err => this.errorHandler(err, 'Opps, something went wrong')
    );
  }





  private errorHandler(error: any, message: string) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }
 




  


}
