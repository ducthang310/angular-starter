import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    ModalConfirmComponent, LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalConfirmComponent, LoadingComponent
  ]
})
export class UiModule { }
