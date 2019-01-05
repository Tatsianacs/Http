import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServerService {
    constructor(private  http: HttpClient) {
    }

    storeServers(servers: any[]) {
        return this.http.post('https://udemy-138f8.firebaseio.com/data.json', servers);
    }
}
