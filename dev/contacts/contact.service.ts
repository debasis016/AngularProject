import { Injectable } from 'angular2/core';
import { CONTACTS } from "./mockContact";

@Injectable()
export class contactService{
    getContacts(){
       return Promise.resolve(CONTACTS);
    }
}
