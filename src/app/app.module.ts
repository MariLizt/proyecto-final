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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes :Routes =[
  { path: 'login', component : LoginComponent},
  { path: 'detalle/:codigo', component : DetalleProductoComponent},
  { path: 'home', component :HomeComponent},
  { path: 'contacto', component :ContactFormComponent},
  { path: 'productos', component :ProductosComponent},
  { path: 'sobre-nosotros', component :SobreNosotrosComponent},
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
    ContactFormComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
