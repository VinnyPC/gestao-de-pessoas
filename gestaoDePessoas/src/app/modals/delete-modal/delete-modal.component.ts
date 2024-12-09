import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-delete-modal',
  imports: [MatIcon],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,){
    const nome = data.nome;
  }

}
