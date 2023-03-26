let movieData = {
    
    "The Darjeeling Limited": {
        year: 2007,
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      
    },
    "The Royal Tenenbaums": {
        year: 2001,
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      
      rating: 7.6,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 160,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
        year: 2014,
      rating: 8.1,
      
      runtime: 159,
      
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };
  addEventListener('DOMContentLoaded', (event) => {
    console.log('This works');
    
    const yr = document.getElementById('yr');
   
   
    let movieArray = Object.entries(movieData);

    //Sort the array based on the year of each movie
    movieArray.sort((a, d) => a[1].year - d[1].year);
    
    // Convert the sorted array back into an object
    let sortedMovieData = Object.fromEntries(movieArray);
    
    console.log(sortedMovieData);

        yr.addEventListener('click', function (){
            console.log(sortedMovieData)
        }); 
    });
    
//the user clicks on the movie and the details of the movie are displayed
    const movie1 = document.getElementById('movie1');
    const ul1 = document.getElementById('demo').innerText;
    console.log(movie1);
  
    movie1.addEventListener('click', function () {
      movie1.innerText = ('The Darjeeling Limited' + ul1);
    });
    const movie2 = document.getElementById('movie2');
    const ul2 = document.getElementById('demo2').innerText;
    console.log(movie2);
  
    movie2.addEventListener('click', function () {
      movie2.innerText = ('The Royal Tenenbaums' + ul2);
    });
    const movie3 = document.getElementById('movie3');
    const ul3 = document.getElementById('demo3').innerText;
    console.log(movie3);
  
    movie3.addEventListener('click', function () {
      movie3.innerText = ('Mr Fox' + ul3);
    });

 //the user adds the movie of their choice
  var button = document.getElementById('addMovie');
  var input = document.getElementById('userInput');
  var body = document.querySelector('body');
  button.addEventListener('click', function(event){
    if (input.value != ''){
    var para= document.createElement('para');
    var delButton = document.createElement('button');
    delButton.innerText= 'Delete';
    para.appendChild(document.createTextNode(input.value));
    body.appendChild(para);
    para.appendChild(delButton);
    //when the user clicks the delButton, the movie dissapears 
    delButton.addEventListener("click", function () {
      console.log('works');
        para.parentNode.removeChild(para);
      });
  }
  })

  //the user adds their movie of their choice by pressing 'enter'
  input.addEventListener('keypress', function(event){
    if (input.value != '' && event.keyCode ===13){
    var para= document.createElement('para');
    var delButton = document.createElement('button');
    delButton.innerText= 'Delete';
    para.appendChild(document.createTextNode(input.value));
    body.appendChild(para);
    para.appendChild(delButton); 
    //when the user clicks the delButton, the movie dissapears 
    delButton.addEventListener("click", function () {
      console.log('works');
        para.parentNode.removeChild(para);
      });
  }    
  })

    
    
    
    