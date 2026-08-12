import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Eriston Lima de Paula'),
      telefone: new FormControl('61 99225-9788'),
      email: new FormControl('eriston@email.com'),
      aniversario: new FormControl('18/05/1978'),
      redes: new FormControl(''),
      observacoes: new FormControl('Obrigado por tudo, Senhor!!')
    })
  }

  salvarContato() {
    console.log(this.contatoForm.value)
  }

  cancelar() {
    console.log('Submissão cancelada')
  }
}
