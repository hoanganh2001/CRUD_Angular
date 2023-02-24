import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  productForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    ) { }
  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product update Successfully");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record!");
      }
    })
  }
  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value).subscribe({
          next:(res)=>{
            alert("Product added successfully!");
            this.productForm.reset();
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
}
