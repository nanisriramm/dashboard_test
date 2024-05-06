import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  username = 'admin@hrvite.com';
  password = 'VijayHrviteV2Master@123';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const data = {
      username: this.username,
      password: this.password,
    };

    this.authService.signIn(data).subscribe(
      (response) => {
        console.log(response);
        const accessToken = response.accessToken;

        const existingToken = localStorage.getItem('accesstoken');
        if (!existingToken) {
          localStorage.setItem('accesstoken', accessToken);
        }

        localStorage.setItem('accesstoken', accessToken);

        this.router.navigate(['dashboard/department']);
      },
      (error) => {
        this.errorMessage = error;
        console.log(error);
      }
    );
  }
}
