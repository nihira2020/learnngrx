import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  haveaccess() {
    return false;
  }
}
