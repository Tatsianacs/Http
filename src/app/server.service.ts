// import {Injectable} from "@angular/core";
// import {HttpClient, HttpHeaders} from "@angular/common/http";
// import { map } from 'rxjs/operators';
// import {Http} from "@angular/http";
//
// @Injectable()
// export class ServerService {
//     constructor(private  http: Http) {
//     }
//
//     storeServers(servers: any[]) {
//        // const headers = new HttpHeaders({'Context-Type': 'application/json'}); Angular 7
//         const headers = new Headers({'Context-Type': 'application/json'});
//          return this.http.post('https://udemy-138f8.firebaseio.com/data.json', servers, { headers: headers});
//         // return this.http.put('https://udemy-138f8.firebaseio.com/data.json', servers,
//         //     {headers: headers});
//     }
//
//
//
//     getServers() {
//         return this.http.get('https://udemy-138f8.firebaseio.com/data.json')
//             .pipe(map(data => { return data}));
//     }
// }
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";

// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
    constructor(private http: Http) {
    }

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://udemy-138f8.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.put('https://udemy-138f8.firebaseio.com/data.json',
            servers,
            {headers: headers});
    }

    getServers() {
        return this.http.get('https://udemy-138f8.firebaseio.com/data')
            .map((response: Response) => {
                    const data = response.json();
                    for (const server of data) {
                        server.name = 'FETCHED_' + server.name;
                    }
                    return data;
                }
            )
            .catch((error: Response) => {
                    console.log(error);
                    return Observable.throw('wrong');
                }
            )
            ;
    }

    getAppName() {
        return this.http.get('https://udemy-138f8.firebaseio.com/appName.json')
            .map((response: Response) => {return response.json()});
    }
}
