import { HttpClient, HttpParams } from '@angular/common/http';
import { Service } from '@angular/core';
import { inject } from "@angular/core";
import { EntidadeAcolhedora } from '../models/entidade-acolhedora.model';
import { Pagina } from '../models/pagina.model';

@Service()
export class EntidadeAcolhedoraService {
    private http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/api/v1/entidades';
    
    listarEntidades(): EntidadeAcolhedora[] {
      const params = new HttpParams()
        .set('page', 0)
        .set('size', 50);

        var response: EntidadeAcolhedora[] = [];

        this.http.get<Pagina<EntidadeAcolhedora>>(this.apiUrl, { params })
            .subscribe(result => {
                result.content.forEach(element => {
                    response.push(element)
            });
        }); 
                    
        return response;
    }

}
