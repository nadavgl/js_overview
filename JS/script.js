// const str = 'some-string';
// const num = 10;
// const bool = true;
// const arr = ['John', 'Bob', 'Steve'];

// const data = {
//     name: 'Nadav',
//     age: 33

// };

// data.name = 'Bob'
// data.age ++


// console.log(data.name);

//Dot notation can ONLY be used on Obejcts

const data = {
    name: 'JD',
    age: 44,
    info: {
      location: 'Atl',
      hobbies: [
        {
          name: 'Fishing',
          frequency: 'once every two weeks'
        },
        {
          name: 'Pickleball',
          frequency: 'once a week'
        },
        
        {
            name: 'Another',
            frequency: 3
        }
      ]
    }
  };

  console.log(data.info.hobbies[1,2].frequency)




