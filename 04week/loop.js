// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

let num = 1;
do {
	console.log(num);
	num++;
} while (num < 1001);

// create object like that below
// for...in loop

const persons = {
	firstName: "Jane",
	lastName: "Doe",
	birthDate: "Jan 5, 1925",
	gender: "female"
};

for (const val in persons) {
	console.log(val);
}

for (const val1 in persons) {
	if (val1 == "birthDate") {
		console.log(persons["birthDate"]);
	}
}

//Create an arrayOfPersons

let arrayOfPersons = [
	{
		firstName: "Jane",
		lastName: "Doe",
		birthDate: "Jan 5, 1925",
		gender: "female",

		firstName: "Matt",
		lastName: "Hartman",
		birthDate: "Jun 25, 1985",
		gender: "male",

		firstName: "Beth",
		lastName: "Hollingsworth",
		birthDate: "Mar 19, 1986",
		gender: "female",

		firstName: "Samahin",
		lastName: "Danzig",
		birthDate: "Oct 31, 1666",
		gender: "male"
	}
];

// array.prototype.map(arrayOfPersons);
// who kmows, i give up on this one
// console.log(arrayOfPersons);

arrayOfPersons.filter("male");

console.log(male);
