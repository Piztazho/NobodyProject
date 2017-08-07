import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import * as jQuery from 'jquery';
//import * as $ from '@types/jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects = [];
  public maxSlider = 5;

  constructor( private _service: DataService, private _sanitizer: DomSanitizer ) {	}

  ngOnInit() {
    let self = this;

    this._service.getData('users/thenobodyphotography/').take(1).map((res) => {

      if(res.projects.length < this.maxSlider)
        return res.projects
      else
        return res.projects.slice(0, 5);
      
    }).subscribe(data => {
      this.projects = data;
    });
  }

  initCarousel(){
    (<any>$(".owl-carousel")).owlCarousel({
      loop:true,
      items:1,
      responsiveClass:true,
      nav: true,
      autoplay:false,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      navText: ['',''],
      lazyLoad: true          
    });

  }

  correctURL(url){
    return this._sanitizer.bypassSecurityTrustStyle('url('+url+')');
  }

}
