import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.component.html',
})
export class TabsPage {
    constructor(
        public router: Router
    ) {
    }

    public redirect(uri: string): void {
        this.router.navigateByUrl(uri);
    }
}
