import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaNotas = [
    {
      titulo: "Titulo",
      conteudo: "Texto",
      tipo: "tipo",
    }
  ]
}
