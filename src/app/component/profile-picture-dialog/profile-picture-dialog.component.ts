import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-profile-picture-dialog',
  imports: [MatDialogTitle, MatDialogContent, CommonModule],
  templateUrl: './profile-picture-dialog.component.html',
  styleUrl: './profile-picture-dialog.component.scss'
})
export class ProfilePictureDialogComponent {
  public profilePictures = ["user-1.jpg", "user-2.jpg", "user-3.jpg", "user-4.jpg"] 
  
}
