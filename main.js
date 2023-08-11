class Human {
    name;
    sex;


    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
}


class Apartment{
    
    residents= [];

    resident (val) {
        if (val) {
            this.residents.push(val);
            return this.residents
        }
    }
}


class House {

    apartments = [];
    maxApartments;

    constructor (maxApartments) {
        this.maxApartments = maxApartments;
    }


    maxApartmentsValue (val) {
        if (this.apartments.length < this.maxApartments) {
                this.apartments.push(val);
                return console.log(this.apartments)
        } else {
            console.log ("Кількість квартир перевищує максимальне значення")
        } 
    }


}


const human1 = new Human ("John", "men");
const human2 = new Human ("Anna", "women");
const human3 = new Human ("Ben", "men");


const apartment1 = new Apartment ();
const apartment2 = new Apartment ();
const apartment3 = new Apartment ();

apartment1.resident(human1);
apartment2.resident(human2);
apartment3.resident(human3);

const house = new House (2);

house.maxApartmentsValue(apartment1);
house.maxApartmentsValue(apartment2);
house.maxApartmentsValue(apartment3);


