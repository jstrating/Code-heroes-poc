import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatTabsModule
    ],
    declarations: [WrapperComponent, NavbarComponent],
    exports: [WrapperComponent, NavbarComponent]
})
export class SharedModule {}