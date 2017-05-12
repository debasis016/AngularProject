import { Component } from 'angular2/core';

@Component({
    selector: "contact",
    template: `
    <input [(ngModel)] = "contact.firstName" type="text">
    <div>
        First Name: {{contact.firstName}}<br>
        Last Name:  {{contact.lastName}}
    </div>`,
    inputs:["contact"]
})

export class ContactComponent {
    public contact = {};
}