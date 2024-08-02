import { Component, NgModule, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule,ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  //ProductsService interacts with the apiService and the home component imports the productsService to invoke functions into the service
  private productsService = inject(ProductsService);

  products: Product[]=[];

  totalRecords:number=0;

  rows:number=5;

  displayEditPopup:boolean=false;
  displayAddPopup:boolean=false;

  selectedProduct:Product={
    id:0,
    name:'',
    image:'',
    price:'',
    rating:0,
  };

  toggleEditPopup(product:Product){
    this.selectedProduct=product;
    this.displayEditPopup=true;
  }

  toggleAddPopup(){
    this.displayAddPopup=true;
  }

  toggleDeletePopup(product:Product){

  }

  onConfirmEdit(product:Product){
    if(!this.selectedProduct.id){
      return;
    }
    this.editProduct(product,this.selectedProduct.id);
    this.displayEditPopup=false;
  }

  onConfirmAdd(product:Product){
    this.addProduct(product);
    this.displayAddPopup=false;
  }

  onProductOutput(product:Product){
    console.log(product,'Output');
  }

  onPageChange(event:any) {
    this.fetchProducts(event.page,event.row);
  }

  fetchProducts(page:number,perPage:number)
  {
        //importing getProducts function from the productsService and subscribing
        this.productsService
        .getProducts('http://localhost:3000/toys',{page,perPage})
        .subscribe({
          next:(data:Products)=>{
            this.products=data.items;
            this.totalRecords=data.total;
          },
          error:(error)=>{
            console.log(error);
          },
    });
  }


  editProduct(product:Product,id:number)
  {
    this.productsService.editProduct(`http://localhost:3000/toys/${id}`,product).subscribe(
    {
      next:(data)=>{
        console.log(data);
        this.fetchProducts(0,this.rows);
      },
      error:(error)=>{
        console.log(error);
      },
    }  
    );
  }

  deleteProduct(id:number)
  {
    this.productsService.deleteProduct(`http://localhost:3000/toys/${id}`).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.fetchProducts(0,this.rows);
        },
        error:(error)=>{
          console.log(error);
        }
      }
    );
  }

  addProduct(product:Product)
  {
    this.productsService.addProduct(`http://localhost:3000/toys`,product).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.fetchProducts(0,this.rows);
        },
        error:(error)=>{
          console.log(error);
        }
      }
    );
  }

  //this is called whenever home component is initialized
  ngOnInit(){
    this.fetchProducts(0,this.rows);
  }
}
