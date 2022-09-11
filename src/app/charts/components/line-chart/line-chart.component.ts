import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';

import { Point } from '@charts/interfaces';

@Component({
    standalone: true,
    imports: [
        JsonPipe
    ],
    selector: 'app-line-chart',
    templateUrl: 'line-chart.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartomponent {
    private changeDetectorRef = inject(ChangeDetectorRef);

    _data: Point[] = [];
    @Input() set data(data: Point[]) { this._data = data; }
    get data(): Point[] { return this._data; }
}
