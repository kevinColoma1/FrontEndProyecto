import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatHomeComponent } from './views/chat-home/chat-home.component';
import { PerfilComponent } from './views/perfil/perfil.component';

const routes: Routes = [
  {path:'chat',component: ChatHomeComponent},
  {path:'perfil', component: PerfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
