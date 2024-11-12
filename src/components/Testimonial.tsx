/** @format */
"use client";

import clsx from "clsx";
import Image from "next/image";

// Colors
const color_ModerateViolet = "hsl(263, 55%, 52%)";
const color_VeryDarkGrayishBlue = "hsl(217, 19%, 35%)";
const color_VeryDarkBlackishBlue = "hsl(219, 29%, 14%)";
const color_White = "hsl(0, 0%, 100%)";
const color_LightGray = "hsl(0, 0%, 81%)";
const color_LightGrayishBlue = "hsl(210, 46%, 95%)";

// Data type definition
interface DataType {
  className?: string;
  bgColor?: string;
  textColor?: string;
  name: string;
  heading: string;
  description: string;
}

// Data array
const data: DataType[] = [
  {
    className: "md:col-span-2",
    bgColor: color_ModerateViolet,
    textColor: color_LightGray,
    // avatarImg: imageDaniel,
    name: "Daniel Clifford",
    heading:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    description:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
  },
  {
    // avatarImg: imageJonathan,
    bgColor: color_VeryDarkGrayishBlue,
    textColor: color_LightGray,
    name: "Jonathan Walters",
    heading: "The team was very supportive and kept me motivated",
    description:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
  },
  {
    className: "md:row-span-2",
    bgColor: color_White,
    textColor: color_VeryDarkGrayishBlue,
    // avatarImg: imageKira,
    name: "Kira Whittle",
    heading: "Such a life-changing experience. Highly recommended!",
    description:
      "Before joining the bootcamp, I’ve never written a line of code. The agile team project, in particular, was outstanding. It helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
  },
  {
    bgColor: color_White,
    textColor: color_VeryDarkGrayishBlue,
    // avatarImg: imageJeanette,
    name: "Jeanette Harmon",
    heading: "An overall wonderful and rewarding experience",
    description:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  },
  {
    className: "md:col-span-2",
    // avatarImg: imagePatrick,
    bgColor: color_VeryDarkBlackishBlue,
    textColor: color_LightGray,
    name: "Patrick Abrams",
    heading:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them was easy.",
    description:
      "The program gave me the confidence necessary to present myself as a capable junior developer. You will get the personal attention you need from an incredible community.",
  },
];

// Home component
export default function Home() {
  return (
    <main
      style={{ background: color_LightGrayishBlue }}
      className="flex justify-center items-center min-h-screen p-8 font-BarlowSemiCondensed"
    >
      <div className="grid gap-6 md:grid-cols-4 md:grid-rows-2 max-w-[960px]">
        {data.map((item, index) => (
          <Card
            key={index}
            bgColor={item.bgColor}
            textColor={item.textColor}
            // avatarImg={item.avatarImg}
            description={item.description}
            heading={item.heading}
            name={item.name}
            className={item.className}
          />
        ))}
      </div>
    </main>
  );
}

// Card component
function Card(props: DataType) {
  return (
    <div
      style={{ color: props.textColor, background: props.bgColor }}
      className={clsx(
        "p-6 rounded-lg h-auto flex flex-col gap-4 max-w-[400px] md:max-w-none",
        props.className
      )}
    >
      <section className="flex gap-2">
        <Image
          // src={props.avatarImg}
          src={"/download.png"}
          alt={`${props.name}-avatar`}
          width={200}
          height={200}
          className="rounded-full h-9 w-9 border-2"
        />
        <div>
          <div className="text-xs font-semibold">{props.name}</div>
          <p className="text-[10px] opacity-50">Verified Graduate</p>
        </div>
      </section>
      <h3 className="font-semibold text-lg">{props.heading}</h3>
      <p className="text-xs opacity-70 leading-relaxed">
        “ {props.description} ”
      </p>
    </div>
  );
}
