export class User {
  password:string;
  email:string;
  name:string;
  photo:string;
  id:string;
    constructor(
        password:string,
        email:string,
        name:string,
        id:string
      ){
        this.password=password;
        this.email=email;
        this.name=name;
        this.id=id;
      }
   
}
