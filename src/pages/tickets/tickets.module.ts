import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TicketsComponent} from "./tickets.component";

const routes: Routes = [
    {path: '', component: TicketsComponent}
];

@NgModule({
    declarations: [TicketsComponent],
    imports: [
        RouterModule,
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    exports: [TicketsComponent]
})
export class TicketsModule {
}
