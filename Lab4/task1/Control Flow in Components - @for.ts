import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <ul>
      @for (user of users; track user.id) {
        <li>{{ user.name }}</li>
      }
    </ul>
  `,
})
export class App {
    users = [
        { id: 1, name: 'Sarah' },
        { id: 2, name: 'Amy' },
        { id: 3, name: 'Rachel' },
        { id: 4, name: 'Jessica' },
        { id: 5, name: 'Poornima' }
    ];
}
