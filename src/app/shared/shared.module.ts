import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { WikiComponent } from './wiki/wiki.component';
import { UserComponent } from './user/user.component';
import { DoublerPipe } from './doubler.pipe';
import { ChildComponent } from './child/child.component';
import { DkUnlessDirective } from './dk-unless.directive';
import { DkDynamicComponent } from './dk-dynamic.component';
import {FormsModule} from "@angular/forms";
import { DkModalComponent } from './dk-modal/dk-modal.component';
import {DemoComponent} from "./parentchild/demo/demo.component";
import { DemoAlertComponent } from './parentchild/demo-alert/demo-alert.component';
import { NgDemoChildComponent } from './parentchild/demo-child/demo-child.component';
import { Ng2DemoChildComponent } from './parentchild/demo-child/demo-child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SharedComponent, WikiComponent, UserComponent, DoublerPipe, ChildComponent, DkUnlessDirective, DkDynamicComponent, DkModalComponent, DemoComponent, DemoAlertComponent, NgDemoChildComponent, Ng2DemoChildComponent],
  exports: [WikiComponent, DoublerPipe, ChildComponent, DkUnlessDirective, DkDynamicComponent, DkModalComponent, DemoComponent, DemoAlertComponent],
  entryComponents: [DkModalComponent]
})
export class SharedModule { }
