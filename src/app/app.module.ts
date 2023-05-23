import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { HeadComponent } from './head/head.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';

const routes :Routes =[
  { path: 'login', component : LoginComponent},
  { path: 'detalle/:codigo', component : DetalleProductoComponent},
  { path: 'home', component :HomeComponent},
  { path: 'contacto', component :ContactFormComponent},
  { path: 'productos', component :ProductosComponent},
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    DetalleProductoComponent,
    HeadComponent,
    LoginComponent,
    ProductosComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
