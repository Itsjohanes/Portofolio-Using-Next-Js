import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>I work Android Apps using Java and Kotlin.</>,
  },

  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => (
      <>I can code in Java. But I mainly use it for Android app development.</>
    ),
  },

  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>
        I have used Firebase for auth, database, analytics, & notification in my
        apps
      </>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
