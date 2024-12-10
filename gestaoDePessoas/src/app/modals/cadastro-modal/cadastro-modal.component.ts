import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../services/api.service';
import { Funcionario } from '../../interfaces/funcionario/funcionario.module';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-modal',
  providers: [provideNativeDateAdapter(), DatePipe],
  imports: [MatInputModule, ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './cadastro-modal.component.html',
  styleUrl: './cadastro-modal.component.css'
})
export class CadastroModalComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private datePipe: DatePipe
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      nascimento: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      admissao: ['', [Validators.required]],
      funcao: ['', [Validators.required]],
      salarioInicial: [0, [Validators.required]],
      situacao: ['', [Validators.required]],
      qualificacao: ['', [Validators.required]]
    });
  }

  //TODO: está cadastrando e retornando 200, porem aparece como erro no navegador
  salvar() {
    if (this.form.valid) {
      console.log('envio de funcionario', this.form.value)
      const funcionario: Funcionario = this.form.value;
      funcionario.nascimento = this.datePipe.transform(funcionario.nascimento, 'yyyy-MM-dd') || '';
      funcionario.admissao = this.datePipe.transform(funcionario.admissao, 'yyyy-MM-dd') || '';

      funcionario.salarioInicial = parseFloat(funcionario.salarioInicial.toString()) || 0;
      this.cadastrarFuncionario(funcionario)
    } else {
      console.log('form invalido', this.form.value)
    }
  }
  cadastrarFuncionario(funcionario: Funcionario) {
    this.apiService.post<Funcionario>('funcionarios', funcionario).subscribe(
      response => {
        console.log('cadastrado com sucesso', response)
      },
      error => {
        // Verificando o erro detalhadamente
        console.error('Erro ao cadastrar funcionário', error);

        // Mostrando o corpo da resposta de erro para depuração
        if (error instanceof HttpErrorResponse) {
          console.error('Erro HTTP: ', error.status);
          console.error('Detalhes do erro: ', error.error);  // Verifique o corpo do erro
        } else {
          console.error('Erro desconhecido: ', error);
        }
      }

    )


  }
}
