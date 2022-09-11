import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class CustomTitleStrategyService extends TitleStrategy {
    constructor(@Inject(DOCUMENT) private readonly document: Document) {
        super();
    }

    updateTitle(snapshot: RouterStateSnapshot): void {
        const title = this.buildTitle(snapshot);

        if (typeof title !== 'undefined') {
            this.document.title = `Angular Playground | ${title}`;
        }
    }
}