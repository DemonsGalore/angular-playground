import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

import { Point } from '@charts/interfaces';

const EMIT_INTERVAL = 300;

@Injectable()
export class ChartDataService {
    constructor() { }

    watchChartData(n: number = 100, max: number = 10): Observable<Point[]> {
        return timer(EMIT_INTERVAL, EMIT_INTERVAL).pipe(
            map(() => this.generateRandomLineChartData(n, max))
        );
    }

    private generateRandomLineChartData(n: number = 100, max: number = 10): Point[] {
        const data: Point[] = [{ x: 0, y: 0 }];
        let y = 0;

        for (let x = 0; x < n; x++) {
            const rand = Math.floor(Math.random() * max);

            if (Math.random() < 0.5) {
                if (y - rand < 0) {
                    y += rand;
                } else {
                    y -= rand
                }
            } else {
                y += rand;
            }

            data.push({ x: x * 12.07, y });
        }

        return data;
    };
}
