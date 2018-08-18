import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" id="header">
      <img id="header-background" />
      <img width="300" src="/assets/logo.png">
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})

export class AppComponent {
}
