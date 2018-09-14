import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* NPM packages */
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxCurrencyModule } from 'ngx-currency';
import { CURRENCY_MASK_CONFIG } from 'ngx-currency/src/currency-mask.config';
import { ArchwizardModule } from 'angular-archwizard';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoadingModule } from 'ngx-loading';
import { ModalModule } from 'ngx-modal';
import { ChartsModule } from 'ng2-charts';
import { ToasterModule } from 'angular2-toaster';
import { CustomCurrencyMaskConfig, NgbDateParserFormatterPtBr } from 'linx-dms-assets';

/* Components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    LoadingModule,
    Ng2SearchPipeModule,
    NgxCurrencyModule,
    ArchwizardModule,
    ModalModule,
    NgbModule.forRoot(),
    NgSelectModule,
    AngularFontAwesomeModule,
    ToasterModule.forRoot()
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: NgbDateParserFormatter, useClass:  NgbDateParserFormatterPtBr },
    { provide: NG_SELECT_DEFAULT_CONFIG, useValue: { notFoundText: 'Nenhum resultado encontrado.' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
