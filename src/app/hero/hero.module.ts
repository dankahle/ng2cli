import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {HeroService} from "./hero.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeroComponent, HeroListComponent],
  exports: [HeroListComponent],
  providers: [HeroService]
})
export class HeroModule { }
