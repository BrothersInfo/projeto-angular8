import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalvarClienteComponent } from './salvar-cliente/salvar-cliente.component';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'novoCliente', component: SalvarClienteComponent },
  { path: 'listagemClientes', component: ListagemClientesComponent },
  { path: 'editar/:codigo', component: EditarClienteComponent },
  { path: 'detalhes/:codigo', component: DetalhesClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
