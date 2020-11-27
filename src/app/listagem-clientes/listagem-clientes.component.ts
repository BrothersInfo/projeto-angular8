
import { DetalhesClienteComponent } from './../detalhes-cliente/detalhes-cliente.component';
import { Observable } from 'rxjs';
import { ClienteService } from "./../cliente.service";
import { Cliente } from "./../cliente";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "app-listagem-clientes",
    templateUrl: "./listagem-clientes.component.html"
})
export class ListagemClientesComponent implements OnInit {
    clientes: Observable<Cliente[]>;

    constructor(private clienteService: ClienteService,
        private router: Router) { }

    ngOnInit() {
        this.recarregar();
    }

    recarregar() {
        this.clientes = this.clienteService.listarTodosClientes();
    }

    excluirCliente(id: number) {
        this.clienteService.excluirCliente(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.recarregar();
                },
                error => console.log(error));
    }

    detalhesCliente(id: number) {
        this.router.navigate(['detalhes/', id]);
    }

    editarCliente(id: number) {
        this.router.navigate(['editar/',id]);
    }
}