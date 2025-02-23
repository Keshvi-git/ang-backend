import { Component, inject } from '@angular/core';
import { Route, Router, RouterLink, Routes } from '@angular/router';
import { FetchService } from '../fetch.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [RouterLink,NgFor,NgIf],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
      selectedCategory: any = null
      private _api = inject(FetchService)
      private _router = inject(Router)
       
      category:any = [
        {
          name:'',
          images:''
        }
      ]

      ngOnInit(){
        this._api.getAll().subscribe((res)=>{
          this.category=res
        })
      }

      viewCategory(categoryId: string) {
        console.log("Navigating to category:", categoryId);
        this._router.navigate(['/products', categoryId]);
      }


      // viewCategory(categoryId: string) {
      //   console.log("Navigating to products page with ID:", categoryId);
      //   this._router.navigate(['/products', categoryId]); 
      // }
      // selectCategory(id: number) {
      //   this._api.getById(id).subscribe(
      //     (res) => {
      //       this.selectedCategory = res;
      //     })
      // }

      // navigateToCategory(categoryName: string) {
      //   this._router.navigate(['/products', categoryName.toLowerCase()])
      // }
      
}
