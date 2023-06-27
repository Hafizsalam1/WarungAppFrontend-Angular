import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abc',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      abc works!
    </p>
  `,
  styleUrls: ['./abc.component.css']
})
export class AbcComponent {

}
