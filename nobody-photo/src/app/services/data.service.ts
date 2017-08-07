import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class DataService {

	private _url:string = 'https://api.behance.net/v2/';
	private _queries:string = '?';
	private _id:string = 'client_id=mIgilYyFfuRqZhU3Q9xpBrR4BSTAIx3X';

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
 		console.log(this._url + dataRequest + '?' + queries + this._id);
    	//return this.http.get(this._url + dataRequest + '?' + queries + this._id) // define a variable server_url to assign the requested url
    	//return this.http.get('../assets/data/project.json') // define a variable server_url to assign the requested url
    	return this.http.get('../assets/data/project-detail.json') // define a variable server_url to assign the requested url
     		.map(this.extractData);
  	}
  	//requestData()

}
