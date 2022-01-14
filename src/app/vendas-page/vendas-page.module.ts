import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasPageRoutingModule } from './vendas-page-routing.module';
import { VendasComponent } from './vendas/vendas.component';


@NgModule({
  declarations: [
    VendasComponent
  ],
  imports: [
    CommonModule,
    VendasPageRoutingModule
  ]
})
export class VendasPageModule { }
