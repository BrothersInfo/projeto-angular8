import { from } from 'rxjs';
import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ClienteService {

    private baseUrl = 'http://localhost:8080/bancooriginal/api/v1/clientes';

    constructor(private http: HttpClient) {}

    obterCliente(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    salvarCliente(cliente: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, cliente);
    }

    editarCliente(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    excluirCliente(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

    listarTodosClientes(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}