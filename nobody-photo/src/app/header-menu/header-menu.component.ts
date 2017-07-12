import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

	public logoUrl:string = '../../../assets/logo-01.png';
	public openMenu: boolean;

  	constructor() {
  		this.toggleMenu(true);
  	}

  	ngOnInit() {
  	}

  	toggleMenu(value){
      console.log(value);
      //if(value.isBoolean)

  		this.openMenu = value;
      
      if(this.openMenu)
        this.logoUrl = '../../../assets/logo-01.png';
      else
        this.logoUrl = '../../../assets/logo-01_white.png';

  	}

}
