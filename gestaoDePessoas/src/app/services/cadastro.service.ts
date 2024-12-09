import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Funcionario } from '../interfaces/funcionario/funcionario.module';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  

  constructor(private apiService:ApiService,) { }

  
  
}
