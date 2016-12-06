import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {Logger} from "./logger.service";
import {WikiService} from "./wiki.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent],
  providers: [Logger, WikiService]
})
export class CoreModule { }
