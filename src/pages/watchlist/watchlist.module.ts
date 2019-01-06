import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {WatchlistComponent} from "./watchlist.component";

const routes: Routes = [
    {path: '', component: WatchlistComponent}
];

@NgModule({
    declarations: [WatchlistComponent],
    imports: [
        RouterModule,
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    exports: [WatchlistComponent]
})
export class WatchlistModule {
}
