import {NgModule} from '@angular/core';
import { SortableTableComponent } from "./sortable-table";
import {IonicModule} from "ionic-angular/index";

@NgModule({
    imports:[
        IonicModule
    ],
    declarations: [
        SortableTableComponent
    ],
    exports: [
        SortableTableComponent
    ]
})
export class SortableTableComponentModule {

}
