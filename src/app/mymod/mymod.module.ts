import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MymodComponent } from './mymod.component';
import { CompComponent } from './comp/comp.component';
import { DirDirective } from './shared/dir.directive';
import { PipPipe } from './shared/pip.pipe';
import {ServService} from "./shared/serv.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MymodComponent, CompComponent, DirDirective, PipPipe],
  providers: [ServService],
  exports: [MymodComponent, CompComponent, DirDirective, PipPipe]
})
export class MymodModule { }
