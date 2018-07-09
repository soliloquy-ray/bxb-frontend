import { NgModule } from '@angular/core';
import { SideBarComponentModule } from './side-bar/side-bar.module';
import { TopBarComponentModule } from './top-bar/top-bar.module';
import { FootComponentModule } from './foot/foot.module';
@NgModule({
	declarations: [],
	imports: [],
	exports: [TopBarComponentModule,
    SideBarComponentModule,
    FootComponentModule]
})
export class ComponentsModule {}
