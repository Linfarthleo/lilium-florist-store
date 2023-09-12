import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ImageLoaderService} from "../../image-loader.service";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  logoUrl: string = '';

  constructor(private router: Router,private formBuilder: FormBuilder,private imageLoader: ImageLoaderService, 
    private authService: AuthService) {
    
  }

  ngOnInit(): void {
    this.loadLogo();
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  loadLogo() {
    const logoUrl = 'https://static.thenounproject.com/png/1018551-200.png';
    this.imageLoader.loadImage(logoUrl).subscribe((blob: Blob) => {
      this.logoUrl = URL.createObjectURL(blob);
    });
  }
  login(): void {
    console.log('submit method');
    if (this.loginForm.valid) {

      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService
        .loginWithEmail(
          email, password
        )
        .then((result) => {
          this.router.navigate(['/inicio']);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log('Login form submitted');
    } else {
      console.log('Formulario es invalido');
    }
  }

  

  get loginFormControls() {
    return this.loginForm.controls
  }

}


