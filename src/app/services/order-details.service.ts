import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

// historydetails

historyDetails = [
    {
      id:1,
      historyName:"The Beginning",
      historyDetails:"On a cozy evening of Christmas, back in 2004, I opened up my gift, unaware of the profound influence that it will have on my life from then on: It was my first computer. Ever since then, electronics, games, and after gaining access to it a few years later, The Internet, have been one of my lifelong passions which last even up until now, as I read, study, learn, play and browse on the Web, communicate with dear friends and spend time on Forums and sites, studying and socializing. The digital domain is truly, and honestly, one of my greatest passions. Therefore, one could confidently say that this is where my passion for the world of Software Engineering stems from.",
      historyYear:2004,
      historyImg:'../../../assets/img/histo1.jpg'
    },
    {
      id:2,
      historyName:"Studies",
      historyDetails:"Ever since general school, I aspired to go to high school and study at the Computer Science branch. Although I couldn't make it, that didn't stop me from studying alone JavaScript, and later C++. I would sometimes pick up a course, learn off of it, and then try to make small simple apps, such as some text program that gave out answers, or perhaps a calculator that could do multiplications, additions or substractions. Over and over again, I am always drawn back to my roots, dreaming of working in an environment in which I've spent countless hours and days in.",
      historyYear:"2006 - 2018",
      historyImg:'../../../assets/img/histo2.jpg'
    },
    {
      id:3,
      historyName:"Bachelor's Degree",
      historyDetails:"As for my Bachelor's studies, I followed Automation and Computer Science Engineering, after being eager to study engineering, but never letting go of Software Engineering. Automation Engineering entails study in all the major subject required for Computer Science: Programming (mainly in C++ and Python), databases (SQL), artificial intelligence, operating systems, OOP concepts, and so on. I graduated with a final project based on a prototype of implementing Artificial Intelligence in a light control system.",
      historyYear:"2018 - 2022",
      historyImg:'../../../assets/img/histo3.jpg'
    },
    {
      id:4,
      historyName:"The present",
      historyDetails:"Now, after having graduated, as I study International Business Administration, with a desire to learn how money, companies, management and working in a team works. All of this, I am doing while pursuing my dream to work as a Developer. However, as is often said, starting out in the IT domain is often the hardest. I am actively looking for a job, while following my Master's, as well as preparing and studying Computer Science on my own.",
      historyYear:"2022 - now",
      historyImg:'../../../assets/img/histo4.jpg'
    },
    {
      id:5,
      historyName:"Hobbies, passions",
      historyDetails:"As was already mentioned, having an online presence and spending time there is one of my major hobbies. I've always played games, socialized and studied online. Expanding on the studying part, I also greatly enjoy reading. I've started actively doing so ever since general school, and more often than not, I am engaged in reading something, ranging from medieval fantasy novels, to philosophy and ancient or medieval literature. Besides reading books, I also greatly enjoy reading comics, cinematography when we're talking about a good movie, or even watching art and following artists in the musical or digital drawing industry through platforms such as ArtStation. I've also taken a liking to travelling ever since moving to Cluj, I've started enjoying train riding because of it, and I've always liked walking, whether in a city, forests or mountains; as well as hiking in nature when such an opportunity arises. Reaching the Moldoveanu Peak, as well as the Negoiu Peak are one of the achievements that I am prouder of.",
      historyYear:"",
      historyImg:'../../../assets/img/histo5.jpg'
    },
    {
    id:6,
    historyName:"Outlook on the future",
    historyDetails:"The future is ever so unpredictable. We can, however, make choices and choose our path in life. When it comes to the way I envision myself in the upcoming years, I would say that I see myself working hard to further my career and make a name for myself. I am confident in my ability to learn, I see myself as very approachable and sociable, therefore I'm aiming for a position of leadership. For starters, I want to delve into everything Software Engineering has to offer, and see for myself what brings out the most of my passion. Later on, I have plans to prove myself worthy of being called a team leader, or at the very least a highly reliable and consistent team member. Whether in Cluj or Targu Mures, I'm open to either option depending on where the conditions are most favourable, and the prospect of moving to another city, country or even continent does not intimidate me, so long as the conditions are right. The future is uncertain, however I have dreams and plans that I would gladly make a reality one day, if the conditions are going to be right. I'm certainly aiming to finish my Master's in International Business Administration and I never intend to stop learning new things and expand my base of knowledge.",
    historyYear:"",
    historyImg:'../../../assets/img/histo6.jpg'
    
    }
  ]

}