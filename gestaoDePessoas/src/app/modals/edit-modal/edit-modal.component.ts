import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-modal',
  providers: [provideNativeDateAdapter()],
  imports: [MatInputModule, ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
  cadastroForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.cadastroForm = this.fb.group({
      nome: [data?.nome || ''],
      cpf: [data?.cpf || ''],
      nascimento: [data?.nascimento || ''],
      endereco: [data?.endereco || ''],
      admissao: [data?.admissao || ''],
      funcao: [data?.funcao || ''],
      salarioInicial: [data?.salario_inicial || 0],
      situacao: [data?.situacao || ''],
      qualificacao: [data?.qualificacao || '']
    });
  }

}
