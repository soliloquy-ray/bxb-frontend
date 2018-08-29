import {NgModule} from '@angular/core';
import { SortableTableComponent } from "./sortable-table";
import {IonicModule} from "ionic-angular/index";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports:[
        IonicModule,
        NgxPaginationModule
    ],
    declarations: [
        SortableTableComponent
    ],
    exports: [
        SortableTableComponent,
        NgxPaginationModule
    ]
})
export class SortableTableComponentModule {

}
