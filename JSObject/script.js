let ar = [
  {
    "name": "Aarav Sharma",
    "contact": "+91-9876543210",
    "dob": "1998-04-15",
    "profession": "Software Engineer",
    "place": "Bhopal",
  },
  {
    "name": "Priya Verma",
    "contact": "+91-9123456780",
    "dob": "1995-09-22",
    "profession": "Graphic Designer",
    "place": "Indore",
  },
  {
    "name": "Rohan Mehta",
    "contact": "+91-9988776655",
    "dob": "2000-01-10",
    "profession": "Digital Marketer",
    "place": "Delhi",
  },
  {
    "name": "Sneha Patel",
    "contact": "+91-9012345678",
    "dob": "1997-07-30",
    "profession": "Teacher",
    "place": "Mumbai",
  },
  {
    "name": "Kunal Singh",
    "contact": "+91-9765432109",
    "dob": "1999-12-05",
    "profession": "Entrepreneur",
    "place": "Pune",
  }
];

console.log(ar);
console.log(ar[2].name);


ar.forEach((element) => {console.log(element.contact);
})


let bala = {
    "name": "Aarav Sharma",
    "contact": "+91-9876543210",
    "dob": "1998-04-15",
    "profession": "Software Engineer",
    "place": "Bhopal",
  };

  console.log(Object.keys(bala));
  console.log(Object.values(bala));
  console.log(bala.name);
  
  