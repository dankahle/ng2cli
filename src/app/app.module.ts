import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HttpModule, JsonpModule,
} from '@angular/http';

import { AppComponent } from './app.component';
import {MymodModule} from "./mymod/mymod.module";
import {CoreModule} from "./core/core.module";
import {HeroModule} from "./hero/hero.module";
import {SharedModule} from "./shared/shared.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DkModalComponent} from "./shared/dk-modal/dk-modal.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    MymodModule,
    HeroModule
  ],
  providers: [{provide: 'MyVal', useValue: 'use this'}],
  bootstrap: [AppComponent]
})
export class AppModule {}

