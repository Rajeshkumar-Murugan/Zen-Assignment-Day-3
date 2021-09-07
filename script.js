let Resume  = [
    {
      Personal_Profile:{
        Name:"Rajesh Kumar",
        Address: "No. 111/75, Palla Street, Korattur, Chennai - 600 076, Tamil Nadu, India.",
        ContactNo: "9551052326",
        EmailID:"rajeshkumarmurugan1@gmail.com.",
        Father_Name:"R.N.Murugan",
        Mother_Name: "Lalitha",
        Date_Of_Birth: "30 July 1996",
        Marital_Status: "Unmarried",
        Nationality: "Indian",
        Hobbies: "Painting, Running, Reading.",
        Sports_Activity: "Tae Kwon Do player",
        Language_proficiency:"English, Tamil"
      },
      Education_Profile:[
      {
      Course: "SSLC",
      Institution: "Kulapathi Dr.S. Balakrishan Joshi Gurrukulam",
      Year: "2012",
      Percentage:"73%"
    },
    {
      Course: "HSC",
      Institution: "Kulapathi Dr.S. Balakrishan Joshi Gurrukulam",
      Year: "2014",
      Percentage:"61.5"
    },
     {
      Course: "B.E.CSE",
      Institution: "St. Peter’s University",
      Year: "2018",
      Percentage:"7.1"
    }],
    Additional_course:[{
    Course : "Computer Hardware",
    Institution: "Cyber Soft Solution",
    Year : "2016",
    Percentage_Status: "82.2%",
    },
      {
    Course : "Software TestingManual and Selenium Automation Tool",
    Institution: "St. Peter’s University",
    Year : "2017",
    Status: "Completed",
    },
      {
    Course : "Java, SQL, Manual testing",
    Institution: "Qspiders",
    Year : "2018",
    Status: "Completed",
    }],
    Workshop_attend:[{
      Course : "RoboHack-In vspart",
      Institution: "KaaShiv Info Tech",
      Date: "08.03.2015",
    },
      {
      Course : "Cyber Security & Malware",
      Institution: "St. Peter’s University",
      Date: "29.09.2015",
    },
      {
      Course : "Android Mobile Application Development",
      Institution: "St. Peter’s University",
      Date: "11.03.2016",
    },
    {
      Course : "Android Mobile Application Development",
      Institution: "UNIQ technologies",
      Date: "19.06.2016",
    },
    
      {
      Course : "Adobe After Effect Animation Tool ",
      Institution: "St. Peter’s University",
      Date: "23.02.2016",
    },
          {
      Course : "Python Programming ",
      Institution: "St. Peter’s University",
      Date: "12.10.2017",
    },
              {
      Course : "Data Analytics & R Programming",
      Institution: "St. Peter’s University",
      Date: "20.03.2018",
    },
       {
      Course : "Android Mobile Application Development",
      Institution: "Adhityaa Infomedia Technologies",
      Date: "11.12.2017 - 10.2.2018",
    }],
     Work_History:{
       Company_Name: "ProtechSoft Technologies Pvt. LTd.",
       Domain: "Software Testing engineer (Manual)",
       Date: "1.8.2018 – Pursuing",
       Experience: "3yrs"
     }
   
    }];

  // console.log(Resume);
console.log( "===========For Loop Starts===========");
for( let i=0; i<Resume.length; i++){
  console.log(Resume);
}

console.log( "======For in Loop start=======");
  for(let key in Resume[0]['Workshop_attend']){
    console.log(key, Resume[0]['Workshop_attend'][key]);
  }

console.log( "======For of Loop start=======");  
    for(let value of Resume){
      console.log(value);
    }

console.log( "=====Foreach loop======")
Resume.forEach((e)=>(console.log(e)))