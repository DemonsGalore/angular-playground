import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-not-found',
    template: '<h1>404</h1>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {}
