import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../Model/Product';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  paginator: any;
  sort: any;
  dataSource!: MatTableDataSource<any>;
  dialogRef: any;

  constructor(private formBuilder : FormBuilder,
    private api : ApiService,) { }

  getAllProducts(
    ) {
    this.api.getProduct().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the Records!");
      }
    })
  }

  updateProduct(productForm: any, editData : any){
    this.api.putProduct(productForm.value,editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product update Successfully");
        productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record!");
      }
    })
  }
  addProduct(productForm: any, editData : any){
    if(!editData){
      if(productForm.valid){
        this.api.postProduct(productForm.value).subscribe({
          next:(res)=>{
            alert("Product added successfully!");
            productForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while add product!")
          }
        })
      }
    } else {
      this.updateProduct();
    }
  }
  delProduct(row : any){
    this.api.deleteProduct(row.id).subscribe({
      next:(res)=>{
        alert("Product delete Successfully")
      },
      error:()=>{
        alert("Error while deleting the record!");
      }
    });
    this.getAllProducts();
  }
}
