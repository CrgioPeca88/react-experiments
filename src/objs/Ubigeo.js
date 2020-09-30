import {Component} from 'react';

export class Ubigeo extends Component{
  constructor(code, name){
    super();
    this.code = code;
    this.name = name;
  }

  getCode(){
    return this.code;
  }

  getName(){
    return this.name;
  }
}

export class Department extends Ubigeo {
  constructor(code, name, containParent, parent){
    super(code, name);
    this.containParent = containParent;
    this.parent = parent;
  }
}

export class Province extends Ubigeo {
  constructor(code, name, containParent, parent){
    super(code, name);
    this.containParent = containParent;
    this.parent = parent;
  }
}

export class District extends Ubigeo {
  constructor(code, name, containParent, parent){
    super(code, name);
    this.containParent = containParent;
    this.parent = parent;
  }
}
