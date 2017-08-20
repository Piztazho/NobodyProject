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
  public customProj: boolean;

  constructor(private _service: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;

      if ((this.id == undefined) || ((this.id == '')) )
        this.router.navigate(['/']);
        this.customProj = this.id == '12343212';

      if(!this.customProj){
        this._service.getData('projects-detail', 'id=' + this.id).take(1).map((res) => {
          return res.project;
        }).map((res) =>{
          this.title = res.name;
          return res.modules;
        }).subscribe(data => {
          this.items = data.filter((elem) => {
          return (elem.type == 'image');
        });
      });
    }else{

      for(let i = 1; i <= 42; i++){
        let src = {src: `../../../assets/CustomProject/${i}.jpg`};
        this.items.push(src)
      }
    }
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
