import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Funcionario } from '../interfaces/funcionario/funcionario.module';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  constructor(private http: HttpClient, private apiService:ApiService) { }
  pessoas: Funcionario[] = [];
  getAllPessoas(): void {
    this.apiService.get<Funcionario[]>('funcionarios').subscribe(
      (data) => {
        this.pessoas = data;
        console.log(this.pessoas);
      },
      (error) => {
        console.error('Erro ao buscar os dados', error);
      }
    );
  }


}
