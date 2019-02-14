import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ServersService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    // return this.http.post('https://http-angular-78aec.firebaseio.com/data.json', servers);
    return this.http.put('https://http-angular-78aec.firebaseio.com/data.json', servers);
  }

  getServers() {
    return this.http.get('https://http-angular-78aec.firebaseio.com/data')
      .pipe(map(
        (response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'Fetched_' + server.name;
          }
          return data;
        }
      ));
  }

  getAppName() {
    return this.http.get('https://http-angular-78aec.firebaseio.com/appName.json').pipe(map(
      (response) => {
        return response.json();
      }
    ));
  }

}
