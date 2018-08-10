import {NgModule} from '@angular/core';
import { LoanComponent } from "./loan";
import {IonicModule} from "ionic-angular/index";

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        LoanComponent
    ],
    exports: [
        LoanComponent
    ]
})
export class LoanComponentModule {

}
