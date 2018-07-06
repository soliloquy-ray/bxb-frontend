import { NgModule } from '@angular/core';
import { SideBarComponentModule } from './side-bar/side-bar.module';
import { TopBarComponentModule } from './top-bar/top-bar.module';
@NgModule({
	declarations: [],
	imports: [],
	exports: [TopBarComponentModule,
    SideBarComponentModule]
})
export class ComponentsModule {}
