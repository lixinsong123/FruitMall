import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';


import { PageNotFoundComponent }   from './not-found.component';
import {loginComponent}    from './login/login.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}