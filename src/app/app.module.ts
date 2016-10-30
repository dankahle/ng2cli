import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MymodModule} from "./mymod/mymod.module";
import {CoreModule} from "./core/core.module";
import {HeroModule} from "./hero/hero.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    MymodModule,
    HeroModule
  ],
  providers: [{provide: 'MyVal', useValue: 'use this'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
