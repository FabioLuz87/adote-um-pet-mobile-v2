import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { inject } from "@angular/core";

@Service()
export class EntidadeAcolhedoraService {
    private http = inject(HttpClient);

}
