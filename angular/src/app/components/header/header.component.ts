import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private toastr : ToastrService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.toastr.success('Successfully Logged out')
    this.router.navigate(['/']);
    return false;
  }

}
