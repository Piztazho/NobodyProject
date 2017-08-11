import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class DataService {

	private _url:string = 'http://thenobodyphotography.com.mx/service/';
	/*private _queries:string = '?';
	private _id:string = 'client_id=mIgilYyFfuRqZhU3Q9xpBrR4BSTAIx3X';*/

  constructor(public http: Http) { }

  private extractData(res) {
    let serviceData;

    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    // console.log(res.json());
    serviceData = (res.json());
    return serviceData || {};
  }

  getData(dataRequest: any, queries: string = ''): Observable<any> {
    console.log('http://thenobodyphotography.com.mx/service/'+dataRequest+'.php?'+queries);
    //return this.http.get(this._url + dataRequest + '?' + queries + this._id, this.createAuthorizationHeader(headers)) // define a variable server_url to assign the requested url
    return this.http.get('http://thenobodyphotography.com.mx/service/'+dataRequest+'.php?'+queries) // define a variable server_url to assign the requested url
    //return this.http.get('../assets/data/project.json') // define a variable server_url to assign the requested url
    //return this.http.get('../assets/data/project-detail.json') // define a variable server_url to assign the requested url
    .map(this.extractData);
  }
  //requestData()

}
