import {NgModule} from '@angular/core';
import { SideBarComponent } from "./side-bar";
import {IonicModule} from "ionic-angular/index";

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        SideBarComponent
    ],
    exports: [
        SideBarComponent
    ]
})
export class SideBarComponentModule {

}
