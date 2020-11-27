import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-salvar-cliente',
    templateUrl: './salvar-cliente.component.html'
})

export class SalvarClienteComponent implements OnInit {

    cliente: Cliente = new Cliente();
    submitted = false;

    constructor(private clienteService: ClienteService, private router: Router) { }

    ngOnInit() { }

    novoCliente(): void {
        this.submitted = false;
        this.cliente = new Cliente();
    }

    salvarCliente() {
        this.clienteService.salvarCliente(this.cliente).subscribe(data => {
            console.log(data);
            this.cliente = new Cliente();
            this.listarClientes();
        }, error => console.log(Error));
    }

    onSubmit() {
        this.submitted = true;
        this.salvarCliente();
    }

    listarClientes() {
        this.router.navigate(['/listagemClientes']);
    }
}