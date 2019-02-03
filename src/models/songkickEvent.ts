export class SongkickEvent {
    public displayName: string;
    public location: string;
    public start: string;
    public uri: string;

    constructor(
        displayName: string,
        location: string,
        start: string,
        uri: string
    ) {
        this.displayName = displayName;
        this.location = location;
        this.start = start;
        this.uri = uri;
    }
}
