import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sala } from '../models';

@Injectable({
    providedIn: 'root'
})
export class SalaService {
    private http = inject(HttpClient);
    private apiUrl = 'http://192.168.2.159:8080/salas';

    listarSalas(): Observable<Sala[]> {
        return this.http.get<Sala[]>(this.apiUrl);
    }

    buscarSalaporId(id: number): Observable<Sala>{
        return this.http.get<Sala>(`${this.apiUrl}/${id}/por-Id`);
    }

    salvarSala(sala : Sala ): Observable<Sala> {
        if(sala.id) {
            return this.http.put<Sala>(
                `${this.apiUrl}/${sala.id}`,
                sala
            );
        }

        return this.http.post<Sala>(
            this.apiUrl,
            sala
        );
    }

    excluirSala(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}