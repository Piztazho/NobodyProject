import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  constructor() { }

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

  }

}
