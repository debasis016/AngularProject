import {Component} from 'angular2/core';
import { ContactComponent } from "./contact.component";

@Component({
    selector:"contact-List",
    template:`
    <ul>
        <li *ngFor = "#contact of contacts"
            (click)="onSelect(contact)"
            [class.clicked]="showDetail === true">
            {{contact.firstName}} {{contact.lastName}}
        </li>
    </ul>
    <contact contact="selectedContact"></contact>`,
    directives:[ContactComponent],
    styleUrls: ["../src/css/app.css"]
})

export class ContactListComponent{
public contacts = [{ firstName: "Debasis", lastName: "Parida", phone: "1111111111" },
    { firstName: "Debasis2", lastName: "Parida2", phone: "2222222222" },
    { firstName: "Debasis3", lastName: "Parida3", phone: "3333333333" }];
    public showDetail = false;
    public selectedContact = {};
    onSelect(contact) {
        this.selectedContact = contact;
    }
}