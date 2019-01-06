import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GroupsComponent} from "./groups.component";

const routes: Routes = [
    {path: '', component: GroupsComponent}
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    exports: [GroupsComponent],
    declarations: [GroupsComponent],
    providers: []
})
export class GroupsModule {
}
