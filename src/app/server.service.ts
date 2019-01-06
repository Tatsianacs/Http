import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ServerService {
    constructor(private  http: HttpClient) {
    }

    storeServers(servers: any[]) {
        const headers = new HttpHeaders({'Context-Type': 'application/json'});
        // return this.http.post('https://udemy-138f8.firebaseio.com/data.json', servers,
        //     {headers: headers});
        return this.http.put('https://udemy-138f8.firebaseio.com/data.json', servers,
            {headers: headers});
    }

    getServers() {
        return this.http.get('https://udemy-138f8.firebaseio.com/data.json');
    }
}
