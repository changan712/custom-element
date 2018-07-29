import {Component, Injector} from '@angular/core';
import {PopupService} from "./popup.service";
import {createCustomElement} from "@angular/elements";
import {PopupComponent} from "./popup/popup.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {


    constructor(injector: Injector, public popup: PopupService) {

        const PopupElement = createCustomElement(PopupComponent, {injector});

        customElements.define('popup-element', PopupElement);
    }

}
