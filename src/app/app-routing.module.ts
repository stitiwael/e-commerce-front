import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UserListeComponent } from './user-liste/user-liste.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [

  {path:'subscribe', component: SubscribeComponent},
  {path:'', component: WelcomepageComponent},
  {path:'users', component:UserListeComponent},
  {path:'detail-produit', component:DetailProduitComponent}
  
];
/*const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'', component: LoginComponent},
  {path:'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  {path:'**', component: TestComponent}
];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
