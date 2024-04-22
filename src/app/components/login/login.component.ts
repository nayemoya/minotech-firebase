import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;

  //usersService = inject(UsersService);
  router = inject(Router)

  constructor( private usuarioService: UsuariosService) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.usuarioService.login(this.formulario.value)
        .then(response => {
            console.log(response);
            this.router.navigate(['/home']);
            alert("Bienvenido de nuevo" + " " + this.formulario.value.email);
        })
        .catch(error => {
            console.error(error);
            alert("Upss... Parece que algo salió mal. Revisa que tu correo o tu contraseña sean correctos.");
        });
}


}
