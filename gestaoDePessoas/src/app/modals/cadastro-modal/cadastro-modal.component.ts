import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cadastro-modal',
  providers: [provideNativeDateAdapter()],
  imports: [MatInputModule, ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './cadastro-modal.component.html',
  styleUrl: './cadastro-modal.component.css'
})
export class CadastroModalComponent {
  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private dialogRef: MatDialogRef<CadastroModalComponent>
  ){
    this.form = this.fb.group({
      nome: [''],
      cpf: [''],
      nascimento: [''],
      endereco: [''],
      admissao: [''],
      funcao: [''],
      salarioInicial: [''],
      situacao: [''],
      qualificacao: ['']
    });
  }

}
