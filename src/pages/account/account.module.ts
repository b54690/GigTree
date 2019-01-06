import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AccountComponent} from "./account.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: AccountComponent}
];
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    exports: [AccountComponent],
    declarations: [AccountComponent],
    providers: []
})
export class AccountModule {
}
