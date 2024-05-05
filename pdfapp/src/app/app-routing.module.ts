import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'home' },
  { path: "login", component: LoginComponent },
  { path: "home", component: FormComponent },
  { path: "sidebar", component: SidebarComponent },
  { path: 'pdf-viewer', component: PdfViewerComponent },
  { path: 'users', component: TableComponent }
  
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
