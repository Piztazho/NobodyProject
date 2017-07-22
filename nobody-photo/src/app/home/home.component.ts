import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as jQuery from 'jquery';
//import * as $ from '@types/jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  	constructor( private _service: DataService ) {	}

  	ngOnInit() {

  		 (<any>$(".owl-carousel")).owlCarousel({
    		  loop:true,
    		  items:1,
    		  responsiveClass:true,
    		  nav: true,
          autoplay:false,
          autoplayTimeout:5000,
          autoplayHoverPause:true,
          navText: ['','']
    		});

  		this._service.getData('projects').then( r =>{
  			console.log(r.json());
  		});

  	}

}
