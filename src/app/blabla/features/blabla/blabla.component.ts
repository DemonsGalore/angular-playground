import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

import { BasePageComponent } from '@shared/components';

@Component({
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkWithHref
    ],
    selector: 'app-blabla',
    template: `
        <h1>{{ title }}</h1>
        <a routerLink="blub">blub</a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlaBlaComponent extends BasePageComponent {}
