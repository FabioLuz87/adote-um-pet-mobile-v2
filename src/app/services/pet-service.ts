import { inject, Service } from '@angular/core';
import { Animal } from '../models/animal.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagina } from '../models/pagina.model';

@Service()
export class PetService {
    private http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/api/v1/animais';
    
    listarPets(): Animal[] {
        const params = new HttpParams()
        .set('page', 0)
        .set('size', 50);

        var response: Animal[] = [];

        this.http.get<Pagina<Animal>>(this.apiUrl, { params })
            .subscribe(result => {
                result.content.forEach(element => {
                    response.push(element)
            });
        }); 
                    
        return response;
    }
}
