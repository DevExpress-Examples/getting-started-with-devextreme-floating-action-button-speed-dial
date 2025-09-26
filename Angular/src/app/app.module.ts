import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DxSpeedDialActionModule } from 'devextreme-angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxSpeedDialActionModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }