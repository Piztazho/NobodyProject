import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as jQuery from 'jquery';
// import * as $ from '@types/jquery';

@Component({
  selector: 'app-info-screen',
  templateUrl: './info-screen.component.html',
  styleUrls: ['./info-screen.component.scss']
})
export class InfoScreenComponent implements OnInit {

  public logoUrl: string = '../../../assets/logo-01_white.png';

  constructor( private _service: DataService ) { }

  ngOnInit() {
  }

}
