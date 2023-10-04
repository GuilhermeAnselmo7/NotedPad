import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CriarnotaComponent } from './componentes/criarnota/criarnota.component';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'criarnota',
    component: CriarnotaComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'excluirnota/:id',
    component: ExcluirNotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
