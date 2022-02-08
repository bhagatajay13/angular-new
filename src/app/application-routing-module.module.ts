import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'about', component: HelloWorldComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModuleModule {}
export const routingComponents = [HelloComponent, HelloWorldComponent];
