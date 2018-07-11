import { NgModule } from '@angular/core';
import { SideBarComponentModule } from './side-bar/side-bar.module';
import { TopBarComponentModule } from './top-bar/top-bar.module';
import { FootComponentModule } from './foot/foot.module';
import { SubmoduleComponentModule } from './submodule/submodule.module';
@NgModule({
	declarations: [],
	imports: [],
	exports: [TopBarComponentModule,
    SideBarComponentModule,
    FootComponentModule,
    SubmoduleComponentModule]
})
export class ComponentsModule {}
