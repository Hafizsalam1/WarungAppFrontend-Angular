import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
  <main>
  <a [routerLink]="['/']">
    <header class="brand-name">
    <h1>Warung
    <img class="brand-logo" src="/assets/icon.png" alt="logo" aria-hidden="true">
    </h1>
    </header>
    </a>
    <section class="content">
    <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
}
