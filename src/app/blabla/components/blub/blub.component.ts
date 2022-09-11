import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { BlubService } from '@blabla/services';
import { BasePageComponent } from '@shared/components';

@Component({
    standalone: true,
    providers: [
        BlubService
    ],
    selector: 'app-blub',
    template: '<h1>{{ title }}',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlubComponent extends BasePageComponent implements OnInit {
    private blubService = inject(BlubService);

    constructor() {
        super();
    }

    ngOnInit(): void {
        this.blubService.blub();
    }
}
