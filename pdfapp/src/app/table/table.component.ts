import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { PdfService } from '../services/pdf.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  userList: User[] = [];
  pdfUrl: string = "http";
  userId: string = ''; // Initialize with the user's ID
  updatedUserData: any = {}; // Initialize with the updated user data

  constructor(private userService: UserService, public dialog: MatDialog ,private pdfService: PdfService, private router: Router) {
    this.getUserList();
  }

  getUserList(): void {
    this.userService.getUserList().subscribe((res: any) => {
      try {
     
        if (res) {
   
          this.userList = res; // Assuming res.data contains the user list
        } else {
          this.userService.errorToast("Server Error");
        }
      } catch (error) {
        console.error("Error in getUserList():", error);
        this.userService.errorToast("An error occurred while fetching user list.");
      }
    });
  }
  

  generatePdf(): void {
    this.pdfService.generatePdf(this.userList);
  }

  downloadPdf(): void {
    this.pdfService.downloadPdf(this.userList);
  }
  viewPdf(pdfUrl: string): void {
    this.router.navigate(['/pdf-viewer'], { queryParams: { pdfUrl: pdfUrl } });
  }
  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(() => {
      // Refresh user list after deletion
      this.getUserList();
      
      // Show toast message for successful deletion
      this.userService.successToast("User deleted successfully");
    }, (error) => {
      // Show toast message for error
      console.error("Error deleting user:", error);
      this.userService.errorToast("An error occurred while deleting user.");
    });
  }
  



  
  openUserDialog(user: any): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
