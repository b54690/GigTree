import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: '../pages/tabs/tabs.module#TabsModule'},
    {path: 'tabs', loadChildren: '../pages/tabs/tabs.module#TabsModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
