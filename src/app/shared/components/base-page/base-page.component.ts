import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
    standalone: true,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasePageComponent {
    route = inject(ActivatedRoute);
    title = '';

    constructor() {
        // https://blog.ninja-squad.com/2022/08/26/what-is-new-angular-14.2/#router
        // not working like in the example
        this.route.title.pipe(
            take(1)
        ).subscribe((title) => {
            if (typeof title !== 'undefined') {
                this.title = title;
            }
        });
    }
}
