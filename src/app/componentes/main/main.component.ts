import { Component } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaNotas:Nota [] = [
    {
      titulo: "Titulo",
      conteudo: "Texto",
      tipo: "tipo",
    }
  ]
}
