import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CadastroModalComponent } from '../../modals/cadastro-modal/cadastro-modal.component';
import { EditModalComponent } from '../../modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../../modals/delete-modal/delete-modal.component';
import { MatIcon } from '@angular/material/icon';
import { ApiService } from '../../services/api.service';
import { Funcionario } from '../../interfaces/funcionario/funcionario.module';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatDialogModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  tabelaColunas: string[] = ['Editar', 'Nome', 'CPF', 'Nascimento', 'Endereco', 'Admissao', 'Funcao', 'SalarioInicial', 'Situacao', 'Qualificacao', 'Excluir']

  pessoas:Funcionario[] = [];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllPessoas();
  }

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

  openCadastroDialog() {
    const dialogRef = this.dialog.open(CadastroModalComponent, {
      minWidth: '50vw',
      minHeight: '10vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  openEditDialog(pessoa:Funcionario){
    const dialogRef = this.dialog.open(EditModalComponent, {
      minWidth: '50vw',
      minHeight: '10vw',
      data: pessoa
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDeleteDialog(pessoa:Funcionario){
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      minWidth: '30vw',
      minHeight: '10vw',
      data: pessoa
    });
  }








}
