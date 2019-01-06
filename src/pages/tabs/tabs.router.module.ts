import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from "./tabs.component";
import {WatchlistComponent} from "../watchlist/watchlist.component";
import {GroupsComponent} from "../groups/groups.component";
import {TicketsComponent} from "../tickets/tickets.component";
import {AccountComponent} from "../account/account.component";


const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'watchlist',
                outlet: 'watchlist',
                loadChildren: '../../pages/watchlist/watchlist.module#WatchlistModule',
                component: WatchlistComponent
            },
            {
                path: 'groups',
                outlet: 'groups',
                loadChildren: '../../pages/groups/groups.module#GroupsModule',
                component: GroupsComponent
            },
            {
                path: 'tickets',
                outlet: 'tickets',
                loadChildren: '../../pages/tickets/tickets.module#TicketsModule',
                component: TicketsComponent
            },
            {
                path: 'account',
                outlet: 'account',
                loadChildren: '../../pages/account/account.module#AccountModule',
                component: AccountComponent
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(watchlist:watchlist)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule {
}
