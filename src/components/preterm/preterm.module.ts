import {NgModule} from '@angular/core';
import { PretermComponent } from "./preterm";
import {IonicModule} from "ionic-angular/index";

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        PretermComponent
    ],
    exports: [
        PretermComponent
    ]
})
export class PretermComponentModule {

}
