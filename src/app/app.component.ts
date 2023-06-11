import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
    <h1>Warung
    <img class="brand-logo" src="/assets/icon.png" alt="logo" aria-hidden="true">
    </h1>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
}
