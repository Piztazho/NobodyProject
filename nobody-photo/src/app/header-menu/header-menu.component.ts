import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

	public logoUrl:string = '../../../assets/logo-01.png';
	public openMenu: boolean;
  public hideLogo: boolean;
  public route: string;

  public noLogo: string[] = ['home', 'project', 'bio'];

  	constructor( private location: Location, private router: Router ){
  		this.toggleMenu(true);
  	}

  	ngOnInit() {
      this.router.events.take(1).subscribe((val) => {
        this.route = this.location.path();
        this.checkIfLogo(this.route);
      });
  	}

  	toggleMenu(value){
      //if(value.isBoolean)

  		this.openMenu = value;
      
      if(this.openMenu)
        this.logoUrl = '../../../assets/logo-01.png';
      else
        this.logoUrl = '../../../assets/logo-01_white.png';

  	}

    checkIfLogo(route = ''){
      this.hideLogo = false;

      if(route == ''){
        this.hideLogo = this.hideLogo = true;
        return 0;
      }

      for(let item of this.noLogo){
        if(route.indexOf(item) !== -1){
          this.hideLogo = this.hideLogo = true;
          return 0;
        }
      }
    }

}
