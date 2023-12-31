import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { MainComponent } from './componentes/main/main.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { CriarnotaComponent } from './componentes/criarnota/criarnota.component';
import { NotaComponent } from './componentes/nota/nota.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MainComponent,
    SidebarComponent,
    CriarnotaComponent,
    NotaComponent,
    ExcluirNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
