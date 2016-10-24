import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {Logger} from "./logger.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent],
  providers: [Logger]
})
export class CoreModule { }
