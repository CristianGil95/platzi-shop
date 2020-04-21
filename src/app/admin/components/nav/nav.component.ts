import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewChecked   {
  scrollToTop: number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private router: Router
    ) {}

    ngOnInit() {



    }
    onActivate(event) {
      window.scroll(0, 0);

  }
    ngAfterViewChecked() {


      }
    logout() {
      this.auth.logout()
      .then(() => {
        this.router.navigate(['./home']);
      });
    }

}
