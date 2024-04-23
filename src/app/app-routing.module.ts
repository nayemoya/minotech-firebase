import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { map } from 'rxjs/operators';
import { canActivate } from '@angular/fire/compat/auth-guard';

const uidAdmin = 'TIdGkwFzztT66rxgnNNCd2QUPRj1';
const onlyAdmin =  () => map( (user: any) => !!user && user.uid === uidAdmin );

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'agregar-curso',component:AgregarCursoComponent, ...canActivate(onlyAdmin)},
  {path:'cursos',component:CursosComponent}, //, canActivate: [AngularFireAuthGuard]
  {path:'registro',component:RegistroComponent},
  {path: 'login', component: LoginComponent, pathMatch: "full" },
  {path: 'preguntas', component: PreguntasComponent},
 // { path: 'cursos/:_id', component: CursoDetalleComponent },
  { path: '**', component:PaginaErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
