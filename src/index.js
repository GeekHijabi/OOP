class nuclearFamily {
    constructor(firstName,lastName, age, sex,position) {
      this._age = age;
      this._sex = sex;
      this._lastName = lastName;
      this._firstName = firstName;
      this._position = position;
      
    }

    getlastName () {
      return `${this._lastName} is the family name`;

    }

    get position () {
      return this._position;
    }
    get fullName () {
      return `${this._firstName} ${this._lastName}`;
    }

    getStatus () {
      return `${this._firstName} is the number ` + `${this._position}` + ' child' ;
    }


    getCategory () {
      if(this._sex === 'male') {
        return `${this.fullName} is a Son`;
      }
      else if (this._sex === 'female') {
        return `${this.fullName} is a Daughter`;
      }
      else if(this._age >= 45){
        return `${this.fullName} is a Father`;
      }
      else{
        return `${this.fullName} is an Mother`;
      }
    }


    getBasicInformation () {
      return `${this._firstName} is ${this._age} years old, a ${this._sex} and the ${this._position} in the family.`
    }
    
  }

class extendedFamily extends nuclearFamily {
    constructor(firstName,lastName, age, sex, relation) {
      super(firstName,lastName, age, sex, relation)
      this._relation = 'is related';
    }
   
    familytree () {
      return `${this.firstName} is `+`${this._relation}` ;
    }

  }

class Friends extends nuclearFamily {
    constructor(firstName,lastName, age) {
      super(firstName,lastName, age)
      this._firstName = 'is a friend';
    
    }
    relationship() {
      return `${this._lastName} is a friend`;
    }
  }


class Employee extends nuclearFamily {
    constructor(employeeName, role) {
      super(employeeName, role)
      this._employeeName = 'is a cook';
      this._role = 'cook';
    }
  }
module.exports = {
  nuclearFamily:nuclearFamily,
  extendedFamily:extendedFamily,
  Friends:Friends,
  Employee:Employee
}