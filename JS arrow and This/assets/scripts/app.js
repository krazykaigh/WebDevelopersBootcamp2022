/*jshint esversion: 8 */

const person = {
  firstName : 'Kaigh',
  lastName  : 'Taylor',
  fullName : function() {
    return `${this.firstName} ${this.lastName}`;
  },
  // The keyword this works differently in arrow functions
  // as compared to full functions
  wholeName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() =>{
      console.log(this);
      console.log(this.fullName());
    },3000);
  }
};

console.log(person.fullName());
console.log(person.wholeName());
person.shoutName();
// The Keyword this refers to the Window Object in Nested functions

