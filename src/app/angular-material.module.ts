import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

const materialModules = [MatFormFieldModule, MatSelectModule, MatListModule];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class AngularMaterialModule {}
