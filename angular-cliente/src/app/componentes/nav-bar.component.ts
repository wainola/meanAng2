import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent {

  constructor(
    private router:Router,
    private flashMsge: FlashMessagesService,
    private auth: AuthService
  ) { }

  onLogedOut(){
    this.auth.cierreSesion();
    this.flashMsge.show('Has cerrado sesión.', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/home']);
    return false;
  }

}
