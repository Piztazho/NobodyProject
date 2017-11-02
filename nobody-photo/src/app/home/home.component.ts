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
  public notLoaded = '-';

  constructor( private _service: DataService, private _sanitizer: DomSanitizer ) {	}

  ngOnInit() {
    const self = this;

    this.projects = [
      {
        id: '53518003',
        currentImg: '-',
        url: {
          desktop: '../../../assets/home/desktop/1.jpg',
          tablet: '../../../assets/home/tablet/1.jpg',
          mobile: '../../../assets/home/mobile/1.jpg'
        }
      },
      {
        id: '51269875',
        currentImg: '-',
        url: {
          desktop: '../../../assets/home/desktop/2.jpg',
          tablet: '../../../assets/home/tablet/2.jpg',
          mobile: '../../../assets/home/mobile/2.jpg'
        }
      },
      {
        id: '43178183',
        currentImg: '-',
        url: {
          desktop: '../../../assets/home/desktop/3.jpg',
          tablet: '../../../assets/home/tablet/3.jpg',
          mobile: '../../../assets/home/mobile/3.jpg'
        }
      },
      {
        id: '36291327',
        currentImg: '-',
        url: {
          desktop: '../../../assets/home/desktop/4.jpg',
          tablet: '../../../assets/home/tablet/4.jpg',
          mobile: '../../../assets/home/mobile/4.jpg'
        }
      },
      {
        id: '42036141',
        currentImg: '-',
        url: {
          desktop: '../../../assets/home/desktop/5.jpg',
          tablet: '../../../assets/home/tablet/5.jpg',
          mobile: '../../../assets/home/mobile/5.jpg'
        }
      },
      {
        id: '50199283',
        currentImg: '-',
        url: {
          desktop: '../../../assets/home/desktop/6.jpg',
          tablet: '../../../assets/home/tablet/6.jpg',
          mobile: '../../../assets/home/mobile/6.jpg'
        }
      },
    ];

    /*this._service.getData('projects').take(1).map((res) => {

      if(res.projects.length < this.maxSlider)
        return res.projects
      else
        return res.projects.slice(0, 5);

    }).subscribe(data => {
      this.projects = data;
    });*/
  }

  initCarousel() {
    (<any>$('.owl-carousel')).owlCarousel({
      loop: true,
      items: 1,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      navText: ['', ''],
      lazyLoad: true
    });

  }

  correctURL(url) {
    if (url == ''){
      console.log('empty');
      return 
    } 
    return this._sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }

}
