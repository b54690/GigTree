import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from "../config/songKick.config";
import {Observable} from "rxjs";

@Injectable()
export class SongkickApiService {

    constructor(
        private http: HttpClient,
    ) {
    }

    public get<T>(): Observable<T> {
        const apiUrl = (`https://api.songkick.com/api/3.0/users/${api.username}/calendar.json?reason=${api.reason}&apikey=${api.api_key}`);
        return this.getRequest<T>(apiUrl);
    }


    private getRequest<T>(
        url: string): Observable<T> {
        // this.ngProgress.start();
        return this.http.get<T>(url)
    }
}
