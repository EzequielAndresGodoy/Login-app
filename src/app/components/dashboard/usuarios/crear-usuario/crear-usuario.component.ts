import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  form: FormGroup;

  sexos: any[] = [
    {value: 'M', viewValue: 'Male'},
    {value: 'F', viewValue: 'Female'},
    {value: '-', viewValue: 'I prefer not to inform'},
  ];
  constructor(private fb: FormBuilder, private _usuarioService: UsuariosService, private router: Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ["", Validators.required],
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      sexo: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    this._usuarioService.setUsuario(this.form.value)
    this._snackBar.open("Usuario creado exitosamente!!", "", {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000
    });
    this.router.navigate(['/dashboard/usuarios'])
    
  }

}
