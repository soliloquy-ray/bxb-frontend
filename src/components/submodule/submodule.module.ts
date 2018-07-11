import {NgModule} from '@angular/core';
import { SubmoduleComponent } from "./submodule";
import {IonicModule} from "ionic-angular/index";

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        SubmoduleComponent
    ],
    exports: [
        SubmoduleComponent
    ]
})
export class SubmoduleComponentModule {

}
