import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxSpeedDialActionModule } from 'devextreme-angular/ui/speed-dial-action';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSpeedDialActionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
