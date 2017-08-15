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

          let tag = this.getField(this.section);

      		this._service.getData('section' ).take(1)
          .map((res) => {
        		return res.projects;
      		})
          .subscribe(data => {
            this.projects = data.filter((item) =>{
              return item.fields[0] == tag;
            });
      		});
    	});
  	}

  	getField(section): string{
  		let query: string = '';
  		switch (section) {
  			case "personal":
  				query+='Architecture';
  				break;

  			case "ads":
  				query+='Advertising';
  				break;

  			case "fashion":
  				query+='Fashion';
  				break;

  			case "beauty":
  				query+='MakeUp Arts (MUA)';
  				break;
  			
  			default:
  				query = '';
  				break;
  		}

  		return query;
  	}

}
