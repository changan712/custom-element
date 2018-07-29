import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PopupComponent} from './popup/popup.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        PopupComponent,

    ],
    entryComponents: [PopupComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
