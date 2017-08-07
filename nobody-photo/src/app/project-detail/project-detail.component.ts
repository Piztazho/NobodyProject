import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  public id: string = '';
  public title:string = '';
  public items = [];

  constructor(private _service: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      
      if((this.id == undefined) || ((this.id == '')) )
        this.router.navigate(['/']);

      this._service.getData('projects/'+this.id).take(1).map((res) => {
        return res.project;
      }).map((res) =>{
        this.title = res.name;

        return res.modules;
      }).subscribe(data => {
        this.items = data.filter((elem) => {
          return (elem.type == 'image');
        });
        console.log(this.items);
      });
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
}
