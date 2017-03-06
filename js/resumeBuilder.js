/*
This is empty on purpose! Your code to build the resume will go here.

 */
/*
$("#header").append();


//$("#main").append("Charlie Chaplin");


var FirstName = "Muhammed";
var age = 23;

var Awesomethoughts = "I'm Muhammed Eltabakh & I'm awesome";

var email = "muha.eltabakh@gmail.com";

console.log(email);
console.log(FirstName);
console.log(Awesomethoughts);

var FunThoughts = Awesomethoughts.replace('awesome', 'fun');

console.log(FunThoughts);

$("#main").append(FunThoughts);
*/

//Header

var name = ("MUHAMMED MAHMOUD");
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = ("Data Scientist");
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);


//var skills = ["Machine Learning", "Data analysis", "Programming"];

//BIO

var bio = {

  "Name" : "Muhammed Mahmoud",
  "Role" : "Data Scientist",
  "Age" : "23",
  "Biopic" : "images/me.jpg",
  "skills" : [
    "Machine Learning", " Data analysis", " Data Visualization", " Deep Learning", " Natural language processing", " Big data"," Statistics",
    " Python", "Scala", "Haddop", "Spark"
  ],

  "contacts" : {

    "MobilePhone" : "+201026767029",
    "Email" : "muha.eltabakh@gmail.com",
    "Linkedin" : "muhammedeltabakh",
    "Github" : "muhammedeltabakh",
    "Twitter" : "Muhaeltabakh",
    "Location" : "Cairo, Egypt"
  },

   "WelcomeMessage" : "A junior data scientist taking my first steps. I believe in the power of data"

};

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.Location);
$("#header").append(formattedLocation);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.MobilePhone);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
$("#header").append(formattedEmail);

var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.Linkedin);
$("#header").append(formattedLinkedin);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
$("#header").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.Twitter);
$("#header").append(formattedTwitter);

var formattedPic =  HTMLbioPic.replace("%data%",bio.Biopic);
$("#header").prepend(formattedPic);

if(bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills);
  $("#skills").append(formattedSkill);
}

var formattedMes = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
$("#header").append(formattedMes);

//$("#header").append(HTMLskillsStart);
//var formattedSkills = HTMLskills.replace("%data%", bio.skills);
//$("#header").append(formattedSkills);

//$("#main").append(bio.Name+ " ", bio.Age+ " ", bio.Skills, bio.PictureURL);


//SCHOOL

var education = {
  "schools": [

    {
      "name": "School of communication & information technology, Nile University",
      "degree": "Diploma",
      "majors": ["Big data & Data science"],
      "dates": '2016 - current'
    },

    {
      "name": "Faculty of Computer & Information, Zagazig University",
      "degree": "B.S",
      "majors": ["Computer Science"],
      "dates": "2015"
    }
  ],

  "onlineCourses":[
    {
      "title": "Introduction to Computer Science & Programming",
      "school": "MIT",
      "dates": 2016,
      "url":"http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00sc-introduction-to-computer-science-and-programming-spring-2011/index.htm"
    },
    {
      "title": "Introduction To Machine Learning",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://classroom.udacity.com/courses/ud120"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://classroom.udacity.com/courses/ud804"
    },
    {
      "title": "Programming Foundations With Python",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://classroom.udacity.com/courses/ud036"
    },
    {
      "title": "Full Stack Foundations",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://classroom.udacity.com/courses/ud088"
    },
    {
      "title": "Machine Learning",
      "school": "Caltech",
      "dates":2016,
      "url": "https://classroom.udacity.com/courses/ud262"
    },
    {
      "title": "Deep Learning",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://classroom.udacity.com/courses/ud730"
    }
  ]
}

education.display = function() {

	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

 $("#education").append(HTMLonlineClasses);
        for (var course in education.onlineCourses) {

			  $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                  var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
};



education.display()

var work = {
  "jobs":[
    {
      "employer": "Oleeeh Sport Magazine",
      "title": "Translator",
      "dates": "June 2014 - April 2015",
      "description": "Translate International news into Arabic and publish them on the website, follow trends and create engageable content on different social media channels"
    },
    {
      "employer":"DB Group INTL",
      "title": "Social Media Specialist",
      "dates": "June 2015 - Aug 2015",
      "description": "Manage Advertisements on social media, Handle projects and Market requirements, Manage campaigns, prepare anlysis reports for clients"
    },
    {
      "employer": "Esmaar",
      "title": "Social Media Specialist",
      "dates": "Sep 2015 - April 2016",
      "description": "Handle Client requirements, manage campaigns, Analyse Social media data, create analytical reports for customers and give insights for better decision making"
    },
    {
      "employer": "Supermarket",
      "title": "sales-man",
      "dates": "May 2016 - February 2017",
      "description": "Handle sales operations in a super market dealing directly with clients"
    },
    {
      "employer": "GooAndBack",
      "title": "Social Media moderator",
      "dates": "February 2017 - current",
      "description": "Handle customer support operations through app and social media channels, analyze social media data and give make decisions regarding social media channels"
    }
  ]
}

function displayWork(){

  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

  }
}
displayWork();

var projects = {
  "projects":[
    {
    "title": "Sequence X Sequence",
    "dates": "2015",
    "description": "A bioinformatics desktop application that compares two dna sequences and calculates the similarities between them. You can enter data in manually, or upload the sequence file or by entering the sequence ID number and the program will calculate the percentage of similarity between the sequences. The idea is to help Scientists calculate the similarities between DNA sequences through a desktop app in a much easier way",
    "link": "https://github.com/muhammedeltabakh/SEQUENCE-X-SEQUENCE",
    "images": ["images/sequence_x_sequence.jpg"
    ]

    },

    {
      "title": "Enron Person of interest identifier",
      "dates": "2016",
      "description": "This is the final project of Udacity (Introduction to machine learning course).In 2000, Enron was one of the largest companies in the United States. By 2002, it had collapsed into bankruptcy due to widespread corporate fraud. In the resulting Federal investigation, there was a significant amount of typically confidential information entered into public record, including tens of thousands of emails and detailed financial data for top executives.In this project I will build a person of interest identifier based on financial and email data made public as a result of the Enron scandal. I use email and financial data for 146 executives at Enron to identify persons of interest in the fraud case. A person of interest (POI) is someone who was indicted for fraud, settled with the government, or testified in exchange for immunity. This report documents the machine learning techniques used in building a POI identifier.",
      "images":[
        "images/POI.jpg"
      ]

    },
    {
      "title": "Stock-Value regression",
      "dates": "2016",
      "description": "Apply linear regression on data from Quandl to predict stock values over a certain amount of time",
      "images": [
        "images/stock_value.jpg"
      ]
    },
    {
      "title": "Customer Segmentation",
      "dates":"2017",
      "description": "Customer Segmentation. At the core of customer segmentation is being able to identify different types of customers and then figure out ways to find more of those individuals so you can... you guessed it, get more customers!",
      "images": [
        "images/Customer-Segmentation.jpg"
      ]
    }
  ]
}

projects.display = function(){

    for(project in projects.projects){
      $("#projects").append(HTMLprojectStart);

      //var formattedTitle = HTMLprojectTitle.replace("%data%", "<a href=\""+ projects.projects[proj].link + "\" target=\"_bkank\">" + projects.projects[proj].title + "</a>");
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);
      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
}
projects.display()

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
