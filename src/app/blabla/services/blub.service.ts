import { Injectable } from '@angular/core';

@Injectable()
export class BlubService {
    blub(): void {
        console.log('blub');
    }
}