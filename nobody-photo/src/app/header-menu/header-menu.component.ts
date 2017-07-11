import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

	public logoUrl:string = '../../../assets/logo-01.png';
	public openMenu: boolean = false;

  	constructor() {
  		this.toggleMenu();
  	}

  	ngOnInit() {
  	}

  	toggleMenu(){
  		if(!this.openMenu)
  			this.logoUrl = '../../../assets/logo-01.png';
  		else
  			this.logoUrl = '../../../assets/logo-01_white.png';

  		this.openMenu = !this.openMenu;
  	}

}
