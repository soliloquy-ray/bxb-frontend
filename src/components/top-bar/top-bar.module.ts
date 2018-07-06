import {NgModule} from '@angular/core';
import { TopBarComponent } from "./top-bar";
import {IonicModule} from "ionic-angular/index";

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        TopBarComponent
    ],
    exports: [
        TopBarComponent
    ]
})
export class TopBarComponentModule {

}
