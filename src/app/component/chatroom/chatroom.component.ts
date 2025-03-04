import { Component, HostListener } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MistralApiService } from '../../services/mistral-api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface Message {
  message: string;
  author: string;
}

@Component({
  selector: 'app-chatroom',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  imports: [
    MessageComponent,
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.scss',
})
export class ChatroomComponent {
  public messages: Message[] = [];

  public questionInput = new FormControl('');

  constructor(private mistral: MistralApiService) {}

  // Behiour of submitting the question on pressing enter key
  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    event.preventDefault();
    this.prepareResponse();
  }

  public async prepareResponse() {
    if(!this.questionInput.value){
      return;
    }
    const question = this.questionInput.value;
    this.questionInput = new FormControl('');
    this.messages.push({ author: 'user', message: question });
    const response = await this.mistral.getMistralResponse(question);
    this.messages.push({ author: 'llm', message: response });
  }
}
