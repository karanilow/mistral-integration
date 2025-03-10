import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

interface ProfilePicture{
  src: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-profile-picture-dialog',
  imports: [MatDialogTitle, MatDialogContent, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './profile-picture-dialog.component.html',
  styleUrl: './profile-picture-dialog.component.scss'
})
export class ProfilePictureDialogComponent {
  public profilePictures = ["user-1.jpg", "user-2.jpg", "user-3.jpg", "user-4.jpg"] 
  public profilePictureList : ProfilePicture[] = [];
  public selectedProfilePicture: ProfilePicture;

  constructor() {
    this.profilePictureList = this.profilePictures.map((src) => ({ src, isSelected: false }));
    this.profilePictureList[0].isSelected = true;
    this.selectedProfilePicture = this.profilePictureList[0];
  }

  public selectProfilePicture(profilePicture: ProfilePicture) {
    this.selectedProfilePicture.isSelected = false;
    profilePicture.isSelected = true;
    this.selectedProfilePicture = profilePicture;
  }

}
