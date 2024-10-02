import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordCreatorComponent } from './password-creator/password-creator.component';
import { QrConverterComponent } from './qr-converter/qr-converter.component';

const routes: Routes = [
  {
    path: 'password-generator',
    component: PasswordCreatorComponent,
  },
  {
    path: 'QRCode-converter',
    component: QrConverterComponent,
  },
  {
    path: '**',
    redirectTo: 'password-generator',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
