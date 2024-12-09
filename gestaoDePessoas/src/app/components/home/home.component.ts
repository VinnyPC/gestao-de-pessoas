import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CadastroModalComponent } from '../../modals/cadastro-modal/cadastro-modal.component';
import { EditModalComponent } from '../../modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../../modals/delete-modal/delete-modal.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatDialogModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  tabelaColunas: string[] = ['Editar', 'Nome', 'CPF', 'Nascimento', 'Endereco', 'Admissao', 'Funcao', 'SalarioInicial', 'Situacao', 'Qualificacao', 'Excluir']

  pessoas: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pessoas = [
      {
        "nome": "Vinicius",
        "cpf": "123.456.789-98",
        "nascimento": "16/10/1999",
        "endereco": "Rua Batata, 123",
        "admissao": "11/04/2020",
        "funcao": "Engenheiro",
        "qualificacao": "Superior",
        "salario_inicial": 20000,
        "situacao": "ativo"
      },
      {
        "nome": "Ana Clara",
        "cpf": "987.654.321-00",
        "nascimento": "20/07/1995",
        "endereco": "Avenida Flores, 45",
        "admissao": "15/06/2018",
        "funcao": "Analista de Dados",
        "qualificacao": "Superior",
        "salario_inicial": 8000,
        "situacao": "desligado"
      },
      {
        "nome": "João Pedro",
        "cpf": "456.123.789-00",
        "nascimento": "12/03/1992",
        "endereco": "Rua dos Pinhais, 78",
        "admissao": "25/01/2015",
        "funcao": "Gerente de Projetos",
        "qualificacao": "Pós-Graduação",
        "salario_inicial": 15000,
        "situacao": "afastado"
      },
      {
        "nome": "Beatriz Souza",
        "cpf": "321.654.987-00",
        "nascimento": "10/11/1998",
        "endereco": "Travessa dos Limoeiros, 89",
        "admissao": "03/09/2021",
        "funcao": "Desenvolvedora",
        "qualificacao": "Superior",
        "salario_inicial": 9000,
        "situacao": "ativo"
      },
      {
        "nome": "Carlos Eduardo",
        "cpf": "789.123.456-00",
        "nascimento": "30/05/1987",
        "endereco": "Praça Central, 101",
        "admissao": "17/02/2010",
        "funcao": "Diretor Financeiro",
        "qualificacao": "MBA",
        "salario_inicial": 35000,
        "situacao": "ativo"
      },
      {
        "nome": "Fernanda Lima",
        "cpf": "654.789.321-00",
        "nascimento": "22/09/1990",
        "endereco": "Alameda das Palmeiras, 56",
        "admissao": "10/12/2013",
        "funcao": "Especialista em Marketing",
        "qualificacao": "Mestrado",
        "salario_inicial": 12000,
        "situacao": "desligado"
      },
      {
        "nome": "Ricardo Alves",
        "cpf": "741.258.963-00",
        "nascimento": "15/01/1985",
        "endereco": "Rua das Oliveiras, 32",
        "admissao": "01/08/2008",
        "funcao": "Coordenador de TI",
        "qualificacao": "Pós-Graduação",
        "salario_inicial": 18000,
        "situacao": "afastado"
      },
      {
        "nome": "Gabriela Santos",
        "cpf": "963.852.741-00",
        "nascimento": "27/02/1994",
        "endereco": "Rua Nova Esperança, 65",
        "admissao": "08/07/2019",
        "funcao": "Designer",
        "qualificacao": "Superior",
        "salario_inicial": 7500,
        "situacao": "ativo"
      },
      {
        "nome": "Lucas Martins",
        "cpf": "852.963.147-00",
        "nascimento": "10/04/1989",
        "endereco": "Rua das Cerejeiras, 88",
        "admissao": "03/11/2014",
        "funcao": "Administrador de Sistemas",
        "qualificacao": "Superior",
        "salario_inicial": 14000,
        "situacao": "ativo"
      },
      {
        "nome": "Mariana Oliveira",
        "cpf": "753.159.846-02",
        "nascimento": "01/12/1991",
        "endereco": "Avenida Paulista, 900",
        "admissao": "22/05/2016",
        "funcao": "Arquiteta de Software",
        "qualificacao": "Pós-Graduação",
        "salario_inicial": 25000,
        "situacao": "afastado"
      }
    ]

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
