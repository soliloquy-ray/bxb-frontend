import {NgModule} from '@angular/core';
import { HeaderTitleComponent } from "./header-title";
import {IonicModule} from "ionic-angular/index";

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        HeaderTitleComponent
    ],
    exports: [
        HeaderTitleComponent
    ]
})
export class HeaderTitleComponentModule {

}
