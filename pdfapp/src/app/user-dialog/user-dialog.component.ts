import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialize userData with the data passed to the dialog
    this.userData = { ...data };
  }


  ngOnInit(): void {
  }
userData: any;

updateUserData(): void {
  // Call the updateUser method from the UserService to update the user's data
  this.userService.updateUser(this.userData.id, this.userData).subscribe(
    (response) => {
      console.log('User updated successfully:', response);
      // Optionally, perform any actions after successful update
      this.dialogRef.close();
    },
    (error) => {
      console.error('Error updating user:', error);
      // Optionally, handle the error
    }
  );
}


  closeDialog(): void {
    this.dialogRef.close();
  }
}
