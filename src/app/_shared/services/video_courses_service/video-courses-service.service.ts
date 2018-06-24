import { Injectable } from '@angular/core';
import { VideoCourseItem } from '../../../model/video-course-item';

@Injectable()

export class VideoCoursesServiceService {

  constructor() { }

  public getVideoCourses() : VideoCourseItem[] {
    return [
      {
        id: 1,
        Title: "Practical LINQ",
        Description: "This course covers practical uses of Language Integrated Query (LINQ). With LINQ, you can search, sort, create, compare and analyze your data. And you can use LINQ to manipulate and shape your data for display in a user interface. With its common syntax, strong typing, Intellisense support, and transformational features, like the internet, you'll wonder how you ever coded without it. Enjoy!",
        Duration: 212,
        Creationdate: new Date(2013, 8, 17)
      },
      {
        id: 2,
        Title: "Using GitFlow",
        Description: "GitFlow is a set of rules that gives users of Git a set of best practices to use when using Git. The set rules govern how to setup Git branches, which branches to have, when to create feature branches, when and what to tag, and when to merge and to which branch. The idea being that with a set of rules to follow using any source control system becomes easier. GitFlow doesn't add anything new to established workflows such as the feature branch workflow. What it does, though, is to give specific roles to different branches and defines how and when they should interact. The workflow uses feature branches as well as individual branches for preparing, maintaining, and recording releases. You also get the benefits of the feature branch workflow such as pull requests and more efficient collaboration.",
        Duration: 64,
        Creationdate: new Date(2016, 2, 22)
      },
      {
        id: 3,
        Title: "ASP.NET Core Tag Helpers",
        Description: "Tag Helpers are one of the new technologies in ASP.NET Core that making building web pages (Razor view pages) much easier and more intuitive for both designers and developers. In this course, ASP.NET Core Tag Helpers, you'll learn the fundamentals of Tag Helpers. First, you'll explore how to effectively use the 17 Tag Helpers built into ASP.NET Core on your Razor view pages to build forms. Next, you'll explore cache images. Finally, you'll customize anchor tags and build a JavaScript manager that takes advantage of many Tag Helper and ASP.NET Core features. By the end of the course, you'll be able to efficiently author both simple and advanced Tag Helpers.",
        Duration: 168,
        Creationdate: new Date(2017, 1, 20)
      }
    ];
  }
}
