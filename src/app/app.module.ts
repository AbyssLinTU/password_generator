import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordCreatorComponent } from './password-creator/password-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { QrConverterComponent } from './qr-converter/qr-converter.component';
import { QRCodeModule } from 'angularx-qrcode';
import { BarcodeConvertorComponent } from './barcode-convertor/barcode-convertor.component';

@NgModule({
  declarations: [AppComponent, PasswordCreatorComponent, HeaderComponent, QrConverterComponent, BarcodeConvertorComponent],
imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,QRCodeModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
