import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ApiService } from '../../services/api.service';
import { Funcionario } from '../../interfaces/funcionario/funcionario.module';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeComponent } from '../../components/home/home.component';

@Component({
  selector: 'app-delete-modal',
  imports: [MatIcon],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService:ApiService){
   
  }

  excluirFuncionario(id: number): void {
    const payload = { id };
    this.apiService.delete<Funcionario>('funcionarios', payload).subscribe(
      (response: Funcionario) => {
        console.log('Funcionário excluído com sucesso:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Erro ao excluir funcionário:', error);
      }
    );
  }
}
