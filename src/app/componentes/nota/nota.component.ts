import { Component, Input } from '@angular/core';
//import faltando
@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {
  @Input() nota = {
    titulo: "Titulo",
    conteudo: "Texto",
    tipo: "tipo"
  }
}
