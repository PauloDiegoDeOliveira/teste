import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { IPerfil } from '../../features/interfaces/IPerfil';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent implements OnInit {
  public imagem: string | any;
  public incricoes: Subscription = new Subscription();
  public url_api = 'https://api.github.com/users/paulodiegodeOliveira';
  public dado: IPerfil = { } as IPerfil;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.obterImagem();
  }

  obterImagem(): void {
    this.incricoes = this.http.get<IPerfil>(this.url_api).subscribe((data) => {
      console.log('Dados', data);
      this.dado = data;
    });
  }

  ngOnDestroy() {
    if (this.incricoes) {
      this.incricoes.unsubscribe();
    }
  }
}
