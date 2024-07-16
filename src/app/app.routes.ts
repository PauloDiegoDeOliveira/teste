import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './modules/perfil/perfil.component';

export const routes: Routes = [
  { path: '', redirectTo: 'perfil', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', redirectTo: 'perfil', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // Cache dos módulos da aplicação para melhorar a performance
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
