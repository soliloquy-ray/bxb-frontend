import {NgModule} from '@angular/core';
import { FootComponent } from "./foot";
import {IonicModule} from "ionic-angular/index";

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        FootComponent
    ],
    exports: [
        FootComponent
    ]
})
export class FootComponentModule {

}
