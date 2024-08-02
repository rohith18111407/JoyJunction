// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { DynamicDialogModule } from 'primeng/dynamicdialog';
// import {DialogModule} from 'primeng/dialog';
// import { Product } from '../../../types';
// import { FormsModule} from '@angular/forms';
// import { RatingModule } from 'primeng/rating';
// import { ButtonModule } from 'primeng/button';

// @Component({
//   selector: 'app-edit-popup',
//   standalone: true,
//   imports: [DynamicDialogModule,CommonModule,DialogModule,FormsModule,RatingModule,ButtonModule],
//   templateUrl: './edit-popup.component.html',
//   styleUrl: './edit-popup.component.scss'
// })
// export class EditPopupComponent {
//   @Input() display:boolean=false;
//   @Output() confirm=new EventEmitter<Product>();
//   @Input() header!:string;

//   @Input() product:Product={
//     name:'',
//     image:'',
//     price:'',
//     rating:0
//   };

//   onConfirm(){
//     this.confirm.emit(this.product);
//   }

//   onCancel(){
//     this.display=false;
//   }
// }
