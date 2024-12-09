import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CadastroModalComponent } from '../../modals/cadastro-modal/cadastro-modal.component';
import { EditModalComponent } from '../../modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../../modals/delete-modal/delete-modal.component';
import { MatIcon } from '@angular/material/icon';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatDialogModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  tabelaColunas: string[] = ['Editar', 'Nome', 'CPF', 'Nascimento', 'Endereco', 'Admissao', 'Funcao', 'SalarioInicial', 'Situacao', 'Qualificacao', 'Excluir']

  pessoas:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllPessoas();
  }

  getAllPessoas(){
    this.apiService.get('funcionarios').subscribe((data:any) => {
      this.pessoas = data;
      console.log(this.pessoas);
    });
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
  openEditDialog(pessoa:any){
    const dialogRef = this.dialog.open(EditModalComponent, {
      minWidth: '50vw',
      minHeight: '10vw',
      data: pessoa
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDeleteDialog(pessoa:any){
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      minWidth: '30vw',
      minHeight: '10vw',
      data: pessoa
    });
  }








}
