import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LineChartomponent } from '@charts/components';
import { Point } from '@charts/interfaces';
import { ChartDataService } from '@charts/services';
import { BasePageComponent } from '@shared/components';


@Component({
    standalone: true,
    imports: [
        LineChartomponent
    ],
    providers: [
        ChartDataService
    ],
    selector: 'app-charts',
    styleUrls: ['charts.component.scss'],
    templateUrl: 'charts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent extends BasePageComponent implements OnDestroy, OnInit {
    private changeDetectorRef = inject(ChangeDetectorRef);
    private chartDataService = inject(ChartDataService);
    chartData: Point[] = [];
    chartDataSubscription = Subscription.EMPTY;

    ngOnInit(): void {
        this.subscribeToChartData();
    }

    subscribeToChartData(): void {
        this.chartDataSubscription = this.chartDataService.watchChartData(1023, 100).subscribe((data) => {
            this.chartData = data;
            this.changeDetectorRef.detectChanges();
        });
    }

    unsubscribeFromChartData(): void {
        this.chartDataSubscription.unsubscribe();
    }

    ngOnDestroy(): void {
        this.unsubscribeFromChartData();
    }
}
