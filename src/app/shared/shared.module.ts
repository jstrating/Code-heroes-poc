import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivitySideNavComponent } from './activity-bar/activity-side-nav/activity-side-nav.component';
import { ActivityFeedItemComponent } from './activity-bar/activity-feed-item/activity-feed-item.component';


@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatTabsModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [WrapperComponent, NavbarComponent, ActivitySideNavComponent, ActivityFeedItemComponent],
    exports: [WrapperComponent, NavbarComponent]
})
export class SharedModule {}