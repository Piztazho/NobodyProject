import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

	public projects = [];
	public section:string = '';

  	constructor(private _service: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }

 	ngOnInit() {
  		this.activatedRoute.params.subscribe((params: Params) => {
      		this.section = params.section;
      
      		if((this.section == undefined) || ((this.section == '')) )
        		this.router.navigate(['/']);

      		this._service.getData('users/thenobodyphotography/projects/', this.getField(this.section)).take(1).map((res) => {
        		return res.projects;
      		}).subscribe(data => {
      			this.projects = data;
     			console.log(data);
      		});
    	});
  	}

  	getField(section): string{
  		let query: string = 'field=';
  		switch (section) {
  			case "personal":
  				query+='Personal';
  				break;

  			case "ads":
  				query+='Advertising';
  				break;

  			case "fashion":
  				query+='Fashion';
  				break;

  			case "beauty":
  				query+='MakeUp%20Arts%20(MUA)';
  				break;
  			
  			default:
  				query = '';
  				break;
  		}

  		return query;
  	}

}
