import { Component, ViewChild } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-converter',
  templateUrl: './qr-converter.component.html',
  styleUrls: ['./qr-converter.component.scss'],
})
export class QrConverterComponent {
  public isConverted = false;
  public Converting = false;
  public qrdata: string = '';


  @ViewChild(QRCodeComponent, { static: false }) qrcode!: QRCodeComponent ;

  public handleConvert() {
    if (this.qrdata.replace(/\s/g, '') === '') {
      alert("Enter URL");
    } else {
      this.isConverted = true;
      this.Converting = true;
      
      setTimeout(() => {
        this.Converting = false;
      }, 3000);
    }
  }

  public downloadQRCode() {
    const qrElement = this.qrcode.qrcElement.nativeElement.querySelector('canvas');
    const url = qrElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    a.click();
  }
}
