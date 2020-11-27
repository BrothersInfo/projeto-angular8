import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalvarClienteComponent } from './salvar-cliente/salvar-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    SalvarClienteComponent,
    ListagemClientesComponent,
    EditarClienteComponent,
    DetalhesClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
