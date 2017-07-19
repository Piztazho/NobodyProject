import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

	private _url:string = 'https://api.behance.net/v2/users/thenobodyphotography/';
	private _id:string = '?client_id=mIgilYyFfuRqZhU3Q9xpBrR4BSTAIx3X';

  	constructor() { }

 	getData(dataRequest: any): Promise<any> {
    	//return fetch(this._url + dataRequest + this._id);
    	return fetch('../assets/data/project.json');
  	}
  	//requestData()

}
