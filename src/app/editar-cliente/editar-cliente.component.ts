
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
    selector: 'app-editar-cliente',
    templateUrl: './editar-cliente.component.html'
})
export class EditarClienteComponent implements OnInit {

    id: number;
    cliente: Cliente;

    constructor(private route: ActivatedRoute, private router: Router,
        private clienteService: ClienteService) { }

    ngOnInit() {
        this.cliente = new Cliente();

        this.id = this.route.snapshot.params['codigo'];

        this.clienteService.obterCliente(this.id)
            .subscribe(data => {
                console.log(data)
                this.cliente = data;
            }, error => console.log(error));
    }

    editarCliente() {
        this.clienteService.editarCliente(this.id, this.cliente)
            .subscribe(data => {
                console.log(data);
                this.cliente = new Cliente();
                this.listagem();
            }, error => console.log(error));
    }

    onSubmit() {
        this.editarCliente();
    }

    listagem() {
        this.router.navigate(['/listagemClientes']);
    }
}