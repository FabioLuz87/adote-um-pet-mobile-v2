import { inject, Service } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagina } from '../models/pagina.model';

@Service()
export class UsuarioService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/api/v1/usuarios';


    listarUsuarios(): Usuario[] {
        const params = new HttpParams()
        .set('page', 0)
        .set('size', 50);

        var response: Usuario[] = [];

        this.http.get<Pagina<Usuario>>(this.apiUrl, { params })
            .subscribe(result => {
                result.content.forEach(element => {
                    response.push(element)
            });
        }); 
                    
        return response;
    }
}
