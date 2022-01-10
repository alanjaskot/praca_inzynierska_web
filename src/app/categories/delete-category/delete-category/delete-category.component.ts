import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { CategoryModel } from 'src/app/models/categories/category-models';
import { ResponderModel } from 'src/app/models/responders/responder-model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  categoryId: string = '';
  respond = new ResponderModel;
  category: CategoryModel | any = new CategoryModel;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(data => {
      this.categoryId = data.id;
    });

    this.getCategory(this.categoryId);
  }

  getCategory(categoryId: string){
    return this.categoryService
    .getCategoryById(categoryId)
    .pipe(first())
    .subscribe(responder =>{
      this.respond = responder;
      this.category = this.respond.object;
      this.deleteCategory(this.category);
    },
    error =>{
      this.toastr.error('Błąd połączenia z bazą danych');
      console.error(`ErrorHttp: ${JSON.stringify(error)}`);
    });
  }

  deleteCategory(category: CategoryModel){
    return this.categoryService
      .softDeleteCategory(category)
      .pipe(first())
      .subscribe(responder =>{
        this.toastr.show("Kategoria została usunięta");
        this.router.navigate(['/categories'])
      },
      error =>{
        this.toastr.error("Błąd połączenia z bazą danych");
      })
  }

}
