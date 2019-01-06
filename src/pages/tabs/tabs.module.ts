import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TabsPage} from "./tabs.component";
import {TabsRoutingModule} from "./tabs.router.module";
import {WatchlistModule} from "../watchlist/watchlist.module";
import {GroupsModule} from "../groups/groups.module";
import {TicketsModule} from "../tickets/tickets.module";
import {AccountModule} from "../account/account.module";

@NgModule({
    declarations: [TabsPage],
    imports: [
        RouterModule,
        IonicModule,
        CommonModule,
        FormsModule,
        TabsRoutingModule,
        WatchlistModule,
        GroupsModule,
        TicketsModule,
        AccountModule
    ],
    exports: [TabsPage]
})
export class TabsModule {
}
