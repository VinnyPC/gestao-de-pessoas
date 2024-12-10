import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common';
import { Funcionario } from '../../interfaces/funcionario/funcionario.module';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-modal',
  providers: [provideNativeDateAdapter(), DatePipe],
  imports: [MatInputModule, ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
  cadastroForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.cadastroForm = this.fb.group({
      nome: [data?.nome || '', [Validators.required]],
      cpf: [data?.cpf || '', [Validators.required]],
      nascimento: [data?.nascimento || '', [Validators.required]],
      endereco: [data?.endereco || '', [Validators.required]],
      admissao: [data?.admissao || '', [Validators.required]],
      funcao: [data?.funcao || '', [Validators.required]],
      salarioInicial: [data?.salarioInicial || 0, [Validators.required]],
      situacao: [data?.situacao || '', [Validators.required]],
      qualificacao: [data?.qualificacao || '', [Validators.required]]
    });
    const id = data.id;
  }



  //TODO: editar funcionario
  salvar(id:number) {
    if (this.cadastroForm.valid) {
      console.log('envio de funcionario', this.cadastroForm.value)
      const funcionario: Funcionario = this.cadastroForm.value;
      funcionario.nascimento = this.datePipe.transform(funcionario.nascimento, 'yyyy-MM-dd') || '';
      funcionario.admissao = this.datePipe.transform(funcionario.admissao, 'yyyy-MM-dd') || '';

      funcionario.salarioInicial = parseFloat(funcionario.salarioInicial.toString()) || 0;
      this.editarFuncionario(id, funcionario)
    } else {
      console.log('form invalido', this.cadastroForm.value)
    }
  }
  editarFuncionario(id:number, funcionario:Funcionario){
    const funcionarioPayload = {
      "id":id,
      "nome":funcionario.nome,
      "cpf":funcionario.cpf,
      "nascimento":funcionario.nascimento,
      "endereco":funcionario.endereco,
      "admissao":funcionario.admissao,
      "funcao":funcionario.funcao,
      "salarioInicial":funcionario.salarioInicial,
      "situacao":funcionario.situacao,
      "qualificacao":funcionario.qualificacao
    }
    this.apiService.put<Funcionario>('funcionarios', funcionarioPayload).subscribe(
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
