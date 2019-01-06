import {Component, OnInit} from '@angular/core';
import {SongkickApiService} from "../../services/songkick.api.service";

@Component({
    selector: 'app-watchlist',
    templateUrl: 'watchlist.component.html',
})
export class WatchlistComponent implements OnInit {
    public item: {};

    constructor(
        private http: SongkickApiService
    ) {
    }

    public async ngOnInit() {
        this.getSongKick()
    }

    private getSongKick(): void {
        this.http.get().subscribe(
            (result: {}) => {
                this.item = result;
                console.log(this.item)
            }
        )
    }

}
