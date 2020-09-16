import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  allUser: Object;



  isEdit = false;

  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: ''
  }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getLatestUser()
  }

  addUser(formData) {
    this.contactService.createUser(formData).subscribe((res) => {
      this.getLatestUser();
    })

  }

  getLatestUser() {
    this.contactService.getAllUser().subscribe((res) => {
      this.allUser = res;
    })
  }

  removeUser(user) {
    this.contactService.deleteUser(user).subscribe(() => {
      this.getLatestUser();
    })
  }

  editUser(user: any) {
    this.userObj = user;
    this.isEdit = true;
    this.isSelected = user;

  }

  isSelected: any;

  updateUser(user) {
    this.contactService.updateUser(this.userObj).subscribe(() => {
      this.isEdit = !this.isEdit;
      this.getLatestUser();
    })


  }
}
