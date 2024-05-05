import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  address: string = '';
  formSubmitted: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  submitForm(): void {
    this.formSubmitted = true;
  
    if (this.name && this.email && this.phoneNumber && this.address) {
      const user = {
        id: uuidv4(),
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address
      };
  
      this.userService.addUser(user).subscribe((res: any) => {
        if (!res) {
          // Navigate to users page and reload
          this.router.navigate(['/users']).then(() => {
            window.location.reload();
          });
          // Show success toast message
          this.userService.successToast("User added successfully");
        } else {
          // Show error toast message
          this.userService.errorToast("Error adding user");
        }
      });
    } else {
      // Show error toast message for unfilled fields
      this.userService.errorToast("Please fill in all fields");
    }
  }
}
