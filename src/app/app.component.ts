import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

@Component({
    standalone: true,
    imports: [
        RouterModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        QuicklinkModule
    ],
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'angular playground';
}
