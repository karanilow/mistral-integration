import { Component, HostListener, inject } from '@angular/core';
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
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePictureDialogComponent } from '../../profile-picture-dialog/profile-picture-dialog.component';


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
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '500px'
        }),
      ),
      state(
        'closed',
        style({
          height: '200px'
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
  ])]
})
export class ChatroomComponent {
  public messages: Message[] = [];
  public isOpen = false;
  public questionInput = new FormControl('');
  readonly dialog = inject(MatDialog);

  constructor(private mistral: MistralApiService) {
    this.openDialog();
  }

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
    this.isOpen = true;
    const question = this.questionInput.value;
    this.questionInput = new FormControl('');
    this.messages.push({ author: 'user', message: question });
    this.messages.push({ author: 'llm', message: 'I am thinking...' });
    const response = await this.mistral.getMistralResponse(question);
    this.messages.pop();
    this.messages.push({ author: 'llm', message: response });
  }

  openDialog() {
    let dialogRef = this.dialog.open(ProfilePictureDialogComponent);
  }
}
