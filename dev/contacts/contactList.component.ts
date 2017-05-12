import {Component} from 'angular2/core';
import { ContactComponent } from "./contact.component";
import { contactService } from "../../app/contacts/contact.service";
import { contact } from "../../app/contacts/contact";
import {OnInit} from 'angular2/core';

@Component({
    selector:"contact-List",
    template:`
    <ul>
        <li *ngFor = "#contact of contacts"
            (click)="onSelect(contact)"
            [class.clicked]="selectedContact === contact">
            {{contact.firstName}} {{contact.lastName}}
        </li>
    </ul>
    <contact contact="selectedContact"></contact>`,
    directives:[ContactComponent],
    providers:[contactService],
    styleUrls: ["../src/css/app.css"]
})

export class ContactListComponent implements OnInit {
    ngOnInit() {
        this.getcontacts();
    }
    public contacts: contact[];
    public showDetail = false;
    public selectedContact = {};

    constructor(private _contactService:contactService){}

    onSelect(contact) {
        this.selectedContact = contact;
    }

    getcontacts(){
        this._contactService.getContacts().then((contacts:contact[]) => this.contacts = contacts);
    }
}