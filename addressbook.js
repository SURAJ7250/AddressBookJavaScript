class Contact
{
    firstName;
    lastname;
    address;
    city;
    state;
    zip;
    phoneno;
    email;


    consturctor(firstName,lastName,address,city,state,zip,phoneno,email)
    {
        this.firstName=firstName;
        this.lastname=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneno=phoneno;
        this.email=email;
    }
}
let conta1= new Contact('Suraj','Sinha','Karve Nagar','Pune','Maharashtra','411025','7558570105','surajnsinha@gmail.com');
console.log(conta1);