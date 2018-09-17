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
import { ChartsModule } from 'ng2-charts';
import { ToasterModule } from 'angular2-toaster';
import { CustomCurrencyMaskConfig, NgbDateParserFormatterPtBr } from 'linx-dms-assets';

/* Components */
import { AppComponent } from './app.component';
import { LinxDmsPrototypeProjectModule } from 'projects/linx-dms-prototype-project/src/public_api';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    LoadingModule,
    Ng2SearchPipeModule,
    NgxCurrencyModule,
    ArchwizardModule,
    NgbModule.forRoot(),
    NgSelectModule,
    AngularFontAwesomeModule,
    ToasterModule.forRoot(),

    LinxDmsPrototypeProjectModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: NgbDateParserFormatter, useClass:  NgbDateParserFormatterPtBr },
    { provide: NG_SELECT_DEFAULT_CONFIG, useValue: { notFoundText: 'Nenhum resultado encontrado.' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
