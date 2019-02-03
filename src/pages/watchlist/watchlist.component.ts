import {Component, OnInit} from '@angular/core';
import {SongkickApiService} from "../../services/songkick.api.service";
import * as moment from 'moment'
import {SongkickEvent} from "../../models/songkickEvent";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector: 'app-watchlist',
    templateUrl: 'watchlist.component.html',
})
export class WatchlistComponent implements OnInit {
    public songKickEvents: Array<SongkickEvent> = [];
    public items: any;
    public eventMonth: [];
    public eventDay: string;

    constructor(
        private http: SongkickApiService
    ) {
    }

    public async ngOnInit() {
        this.getEvents()
    }

    private getEvents() {
        this.http.get().subscribe((result: Array<SongkickEvent>) => {
            this.songKickEvents = result;
            console.log(this.songKickEvents)
        })
    }
    // private getSongKick(): void {
    //     this.http.get().subscribe(
    //         (result: any) => {
    //             this.items = result.resultsPage.results.calendarEntry;
    //             if (this.items) {
    //                 this.items.forEach(res => {
    //
    //                 })
    //             }
    //         })
    // }


}
