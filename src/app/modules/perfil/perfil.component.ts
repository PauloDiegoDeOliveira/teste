import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPerfil } from '../../models/interfaces/perfil/IPerfil';
import { PerfilService } from '../../services/perfil/perfil.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  imports: [CommonModule],
})
export class PerfilComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public perfil: IPerfil = {} as IPerfil;

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.obterPerfil();
  }

  obterPerfil(): void {
    this.perfilService
      .obterPerfil()
      .pipe(takeUntil(this.destroy$))
      .subscribe((dados) => {
        console.log('Perfil: ', dados);
        this.perfil = dados;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
