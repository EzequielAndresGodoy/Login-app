import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading: boolean = false;

  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.formLogin = this.fb.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  ngOnInit(): void {
  }

  ingresar(){
    const usuario: string = this.formLogin.value.usuario;
    const password: string = this.formLogin.value.password

    if (usuario === 'egodoy' && password === "1234") {
      //Redireccionamos al dashboard
      this.fakeLoading()

    } else {
      //Mostramos un mensaje de error
      this.error()
      this.formLogin.reset()
    }
  }

  error() {
    this._snackBar.open("Usuario o contraseña ingresados son invalidos","",{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      //Redireccionamos al dashboard
      this.router.navigate(['dashboard'])
    }, 1000);
  }

}
