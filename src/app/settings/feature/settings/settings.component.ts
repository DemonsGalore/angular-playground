import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BasePageComponent } from '@shared/components';

@Component({
    standalone: true,
    selector: 'app-settings',
    template: '<h1>{{ title }}</h1>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent extends BasePageComponent {}
