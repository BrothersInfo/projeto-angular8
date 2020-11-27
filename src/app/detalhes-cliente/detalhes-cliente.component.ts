import { Cliente } from '../cliente';
import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detalhes-cliente',
    templateUrl: './detalhes-cliente.component.html'
})
export class DetalhesClienteComponent implements OnInit {

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

    listagem() {
        this.router.navigate(['/listagemClientes']);
    }
}