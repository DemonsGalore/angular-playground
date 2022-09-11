import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, TitleStrategy, withPreloading } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { CustomTitleStrategyService } from './app/shared/services';
import { environment } from './environments/environment';


if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            QuicklinkModule
        ),
        {
            provide: TitleStrategy,
            useClass: CustomTitleStrategyService
        },
        provideRouter(
            APP_ROUTES,
            withPreloading(QuicklinkStrategy) // QuicklinkStrategy not working satisfying with sub-routing-modules
        )
    ]
});
