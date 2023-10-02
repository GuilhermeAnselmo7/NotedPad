import { Component } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criarnota',
  templateUrl: './criarnota.component.html',
  styleUrls: ['./criarnota.component.css']
})
export class CriarnotaComponent {
  constructor (
    private service: NotaService,
    private router: Router
    ){}


  nota: Nota = {
    titulo: "",
    conteudo: "",
    tipo: "tipo1"
  }

  criarNota() {
    this.service.criar(this.nota).subscribe(() => {
      this.router.navigate(['/main'])
    })
  }
}
