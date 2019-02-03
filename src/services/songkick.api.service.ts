import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from "../config/songKick.config";
import {Observable} from "rxjs";
import {SongkickEvent} from "../models/songkickEvent";
import {map} from "rxjs/operators";


@Injectable()
export class SongkickApiService {
    public items?: any;

    constructor(
        private http: HttpClient,
    ) {
    }

    public get(): Observable<Array<SongkickEvent>> {
        const apiUrl = (`https://api.songkick.com/api/3.0/users/${api.username}/calendar.json?reason=${api.reason}&apikey=${api.api_key}`);
        return this.getRequest<any>(apiUrl).pipe(
            map(results => {
                this.items = results.resultsPage.results.calendarEntry;
                if (this.items) {
                    console.log(this.items);
                    let events: Array<SongkickEvent> = [];
                    this.items.forEach(res => {
                        let event: SongkickEvent = new SongkickEvent(
                            res.event.displayName,
                            res.event.location.city,
                            res.event.start.date,
                            res.event.uri
                        );
                        events.push(event)
                    });
                    return events
                }
            })
        );
    }


    private getRequest<T>(
        url: string): Observable<T> {
        // this.ngProgress.start();
        return this.http.get<T>(url)
    }
}
