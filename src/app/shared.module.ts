import { ZeroToValPipe } from './util/pipes/zerotoval.pipe';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSliderModule, MatSelectModule, MatRadioModule, MatSlideToggleModule, MatExpansionModule, MatDatepickerModule, MatCardModule, MatToolbarModule, MatNativeDateModule, MatTooltipModule, MatTableModule, MatMenuModule, MatPaginatorModule, MatSortModule, MatChipsModule, MatButtonToggleModule, MatSidenavModule, MatListModule, MatCheckboxModule, MatAutocompleteModule, MatProgressBarModule, MatBottomSheetModule, MatProgressSpinnerModule, MatDialogModule, MAT_DATE_LOCALE, MatSnackBarModule, MatBadgeModule, MatTabsModule } from '@angular/material';
import { IonicStorageModule } from '@ionic/storage';
import { NullToQuotePipe } from './util/pipes/null-quote.pipe';
import { NullToZeroPipe } from './util/pipes/null-zero.pipe';
import { NullToDashPipe } from './util/pipes/null-dash.pipe';
import { NullToNaPipe } from './util/pipes/null-na.pipe';
import { CheckBooleanPipe } from './util/pipes/check-boolean.pipe';
import { SupDatePipe } from './util/pipes/sup-date.pipe';
import { CustomPipe } from './util/pipes/keys.pipe';
import { UrlidPipe } from './util/pipes/url-id.pipe';
import { SafePipe } from './util/pipes/safe-html.pipe';
import { EscapeHtmlPipe } from './util/pipes/keep-html.pipe';
import { DayWeekPipe } from './util/pipes/day-week.pipe';
import { NoNullPipe } from './util/pipes/nonull.pipe';
import { TruncatePipe } from './util/pipes/truncate.pipe';

const components = [

  NullToQuotePipe,
  NullToZeroPipe,
  NullToDashPipe,
  NullToNaPipe,
  CheckBooleanPipe,
  SupDatePipe,
  CustomPipe,
  NoNullPipe,
  TruncatePipe,
  UrlidPipe,
  SafePipe,
  EscapeHtmlPipe,
  DayWeekPipe,
  ZeroToValPipe
];

const matcomponents = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSliderModule,
  MatSelectModule,
  MatRadioModule,

  MatSlideToggleModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatCardModule,
  MatNativeDateModule,

  MatToolbarModule,
  MatTooltipModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatButtonModule,

  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatTabsModule

];

@NgModule({
  declarations: [...components,

     ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   // IonicStorageModule.forRoot(),
    ...matcomponents,

    IonicModule,

  ],
  exports: [
    ...matcomponents, ...components, IonicModule,
  ],
  entryComponents: [

  ]
})
export class SharedModule { }

