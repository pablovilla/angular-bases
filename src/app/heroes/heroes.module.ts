import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,  // Declara HeroesComponent solo aquí
  ],

  exports: [
    HeroComponent,
    ListComponent, // Exporta HeroesComponent si lo vas a utilizar en otros módulos
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
