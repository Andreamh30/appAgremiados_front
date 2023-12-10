import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  NUE: string = '';
  password: string = '';
  loginForm!: FormGroup;

  constructor(private loginS: LoginService,
      private formBuilder: FormBuilder,
    private authS: AuthService, private router:Router) { }

  ngOnInit() {
    this.loginForm! = this.formBuilder.group({
      NUE: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login(){
    const { NUE, password } = this.loginForm.value;
    if (!NUE || !password) {
      console.log("ingresa los campooos");
      
    } else {
      this.loginS.login(NUE, password).subscribe(
        (response: any) => {
          const token = response.token;
          const user = response;

          console.log('Valor de objeto:', user);

          this.authS.setToken(token);
          this.authS.setUser(user);
          this.authS.setLoggedInFlag(true);

            console.log('¡Inicio de sesión exitoso!');
            this.router.navigate(['/tabs/tab1']);
            // Swal.fire({
            //   icon: 'success',
            //   title: 'Hola!',
            //   text: 'Bienvenido usuario Administrador',
            //   showConfirmButton: true
            // });
        },
        (error) => {
          console.error('Credenciales incorrectas', error);
          console.log('bienvenido');
          
         /*  Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Credenciales incorrectas',
            showConfirmButton: true
          }); */
        }
      );
    }
  }
}
