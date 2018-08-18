import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <div>
      <mat-card>
        <mat-card-title><h1>404 Not Found</h1></mat-card-title>
        <mat-card-content>
          <p>  
            Could not find the path: <b>{{path}}</b>
          </p>

          <p>
            <i>(You will be redirected in {{redirectTime / 1000}} seconds)</i>
          </p>

        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./page-not-found.component.scss']
})

export class PageNotFoundComponent implements OnInit {

  path: string
  redirectTime: number = 2000

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.path = this.route.snapshot.url.join('')
    setTimeout(() => {this.router.navigate([''])}, 2000)
  }

}
