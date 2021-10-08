// Logos
import logoBlue from "./images/tgc_logo_blue.jpg";
import logoRed from "./images/tgc_logo_red.jpg";

// Show Covers
import people from "./images/people.jpg";
import micsAreOpen from "./images/mics-thumbnail.jpg";
import micsAreOpenSquad from "./images/mics-squad.jpg";
import theCookBook from "./images/the-cook-book.jpg";
import daDing from "./images/dading-different.jpg";
import lockdownSession from "./images/lockdown-session.jpg";
import wakeUpCall from "./images/wake-up-call.jpg";

// Landing Sides
import nairobi from "./images/Nairobi.jpg";
// import skyline from "./images/Nairobi-Night-Skyline.jpg";
import silverArrow from "./images/silver-arrow.jpg";
import laptop from "./images/laptop.jpg";
import party from "./images/party.jpg";

// Team
import GMoney from "./images/GMoney.jpg";
import Andy from "./images/Andy.jpg";
import Kevin from "./images/Kevin.jpg";
import Michael from "./images/Michael.png";
import Ramadhani from "./images/Ramadhani.png";
import Calvin from "./images/Calvin.jpg";
import Neville from "./images/Neville.jpg";
import Grauchi from "./images/Grauchi.jpg";
import Ashley from "./images/ashley.jpg";
import Quellie from "./images/quellie.jpg";

// Shop Products
import coffeeMug from "./images/Coffee-Mug-1.jpg";
import coffeeMugWhite from "./images/Coffee-Mug-White.jpg";
import coffeeMugBlack from "./images/Coffee-Mug-Magic.jpg";
import maoBlack from "./images/mics-shirt-black.jpg";
import maoWhite from "./images/mics-shirt-white.jpg";
import coasters from "./images/Round-Coasters-White.jpg";
import coastersRound from "./images/Round-Coasters.jpg";
import bottleNewBlack from "./images/New-Bottles-Black.jpg";
import bottleNewBlue from "./images/New-Bottles-Blue.jpg";
import bottleBlue from "./images/Water-Bottle-Blue.jpg";
import bottleCharcoal from "./images/Water-Bottle-Charcoal.jpg";
import bottleLime from "./images/Water-Bottle-Lime.jpg";
import bottleRed from "./images/Water-Bottle-Red.jpg";
import bottleWhite from "./images/Water-Bottle-White.jpg";

export const logos = {
  logoRed,
  logoBlue,
};
export const landingTemplates = [
  {
    index: 1,
    image: nairobi,
    title: "WE ARE THE GOOD COMPANY",
    desc: "a creative agency located in Nairobi, Kenya.",
    button: "About Us",
    startAnimation: true,
    url: "#about",
  },
  {
    index: 2,
    image: silverArrow,
    title: "WE BUILD BRANDS",
    desc: "We specialize in enhancing and building brand equity through tailored strategies & campaigns",
    button: "Learn More",
    startAnimation: "",
    url: "#quote",
  },
  {
    index: 3,
    image: party,
    title: "WE CREATE EXPERIENCES",
    desc: "We have over 20 years of event management experience. From concept to delivery, we have got you covered.",
    button: "Learn More",
    startAnimation: "",
    url: "podcast",
  },
  {
    index: 4,
    image: laptop,
    title: "WE CREATE FOR THE WEB",
    desc: "We design and develop websites and mobile apps to achieve the specific declared goals set by our clients.",
    button: "Learn More",
    startAnimation: "",
    url: "#services",
  },
  {
    index: 5,
    image: people,
    title: "WE ARE GOOD COMPANY",
    desc: "After all you are the company you keep",
    button: "About Us",
    startAnimation: "",
    url: "team",
  },
];

export const shows = [
  {
    id: "micsareopen",
    category: "podcast",
    title: "The Mics Are Open",
    host: ["G Money", "Andy", "Calvin", "Neville"],
    date: "Friday @ 10am",
    cover: micsAreOpenSquad,
    logo: micsAreOpen,
    tagline: "The Mics Are Bloodclat Open",
  },
  {
    id: "lockdown",
    category: "mixes",
    title: "Lockdown Session",
    host: ["Dj Grauchi"],
    date: "Friday @ 10pm",
    cover: lockdownSession,
    tagline: "Must Be Nice",
  },
  {
    id: "wakeupcall",
    category: "mixes",
    title: "The Wake Up Call",
    host: ["Dj Grauchi"],
    date: "Saturday @ 9am",
    cover: wakeUpCall,
    tagline: "Plug Someone",
  },
  {
    id: "queshley",
    category: "podcast",
    title: "The Cookbook",
    host: ["Ashley", "Quellie"],
    date: "Monday @ 10am",
    cover: theCookBook,
    tagline: "Premium Laughter",
  },
  {
    id: "dading",
    category: "podcast",
    title: "DADing Different ",
    host: ["Some Dads"],
    date: "Wednesday @ 12pm",
    cover: people,
    logo: daDing,
    tagline: "A Space For Young Dads ",
  },
];

export const team = [
  {
    userid: 1,
    username: "G Money",
    fullName: "Anthony Gray",
    title: "Chief Executive Officer",
    bio: "Bringing more than 25 years of international experience to the Good Company is something Anthony Gray aka G Money does with aplomb! Having been an integral part of the radio and music industry in the UK, his decade of working in Kenya has given him a unique perspective into what works for the local market. As a media brand himself, he has worked with major local and international brands from Safaricom to Ciroc he has brought his know how to the fore in all his endeavors. As the Head of Presenters of 103.5 Homeboyz Radio, he has used his knowledge to help shape the sound of Nairobi. Whether it’s dropping jams in the hottest clubs or training the next generation of presenters, G Money has always had his finger on the pulse of the next trend. G Money has also had a hand in some of the biggest events in Kenya, whether it’s concert management or club events, his knowledge of event management is highly sought after and he recently works on the hugely successful Chronixx event and most recently Jameson Live. The only question left for us to ask him is “when do you sleep”?",
    image: GMoney,
    social: {
      instagram: "gmoneyizme",
      facebook: "",
      twitter: "GMONEYizME",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 2,
    username: "Mike",
    fullName: "Michael Atema",
    title: "Chief Operating Officer",
    bio: "Michael carries a degree in Music Business from The International College of Music. He has worked as a content curator for the past 8 years with Callback Dreams Studios in South Africa. In his time there, he handled the licensing of content for award-winning shows such as; The Hustle, Stripped Down & Creative Union that aired on the following Multichoice channels; M-Net, Vuzu & Mzansi Magic respectively. Michael also handled the Samsung “Kleek” project under Universal music group from 2015 – 2016. Channel O acquired his services as the artist liaison for the Channel O Music Awards in 2013 and 2014 and currently produces his own show on Channel O titled “The Mix Up”. Michael lives and breathes content and is extremely passionate about the industry.",
    image: Michael,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 3,
    username: "KO",
    fullName: "Kevin Okeyo",
    title: "Chief Technology Officer",
    bio: "Kevin is a BSc. in Information Technology graduate from the Jomo Kenyatta University of Agriculture and Technology. He worked at AMREF, which is a health- based INGO based in Nairobi before getting into entrepreneurship to co-found an up an coming digital marketing agency that also provided I.T based solutions for their clients. Kevin has also worked with various wildlife conservation organizations as a private consultant on ways of using emerging technologies and their digital assets to complement their efforts in wildlife conservation. Outside of technology, Kevin is also passionate about rugby and plays for a local rugby club, Impala Saracens.",
    image: Kevin,
    social: {
      instagram: "kevinokeyo",
      facebook: "",
      twitter: "kevinokeyo_",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 4,
    username: "Ramadahani",
    fullName: "Ramadahani Abubakar",
    title: "Legal Affairs",
    bio: "Ramadhani holds a Bachelor of Laws Degree LLB (Hons) from the Catholic University of Eastern Africa, Kenya, and also holds a Post Graduate Diploma in Law from the Kenya School of Law.He is a Commissioner for Oaths.",
    image: Ramadhani,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 5,
    username: "Dj Grauchi",
    fullName: "Grauchi",
    title: "Lockdown Session's Captain",
    bio: "",
    image: Grauchi,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 6,
    username: "Big C",
    fullName: "Calvin",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Calvin,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 7,
    username: "Andy Young",
    fullName: "Andy Young",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Andy,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 8,
    username: "Neville",
    fullName: "Neville",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Neville,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 9,
    username: "ashley",
    fullName: "Ashley",
    title: "Queshley Cast",
    bio: "",
    image: Ashley,
    social: {
      instagram: "",
      facebook: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 10,
    username: "Quellie",
    fullName: "Quellie",
    title: "Queshley Cast",
    bio: "",
    image: Quellie,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    userid: 11,
    username: "Shammah",
    fullName: "Steve Shammah",
    title: "Developer",
    bio: "",
    image: logoRed,
    social: {
      instagram: "steveshammah",
      facebook: "",
      twitter: "steveshammah_",
      github: "Shammah08",
      linkedin: "shammah",
    },
  },
];

export const services = [
  {
    title: "Brand Equity Development",
    content:
      "Your brand isn’t static, or at least it shouldn’t be. Without continual analysis and strategy, your brand can easily lose its shine and that means reduced profits. At the core of what we do is an open and honest brand analysis complete with best practice brand strategy. A brand is not a product or a promise or a feeling. It’s the sum of all the experiences you have with a company. We act before you need to.",
  },
  {
    title: "Marketing",
    content:
      "The consumer is ever changing, every day there is a new challenge and a new way of communicating with your customers and potential customers. At the Good Company, we believe that marketing never stops even when the campaign is over. We provide joined-up marketing concepts and solutions and analysis. In this digital age, you are the company you keep.",
  },
  {
    title: "Talent Management",
    content:
      "Hard work beats talent, especially when talent doesn’t work hard. At the Good Company, we want our talent to hone their “talent” while we manage. With some of Kenya’s top sports and media personalities on our book, we offer career development assistance and financial management advice, to make sure that your finances last longer than your career (Roster available on request)",
  },
  {
    title: "Event Planning and Execution",
    content:
      "A successful event doesn’t happen by accident but is the result of meticulous planning. At the Good Company we have over 20 years of event management experience. From concept to delivery, we have got you covered.",
  },
  {
    title: "Web Development",
    content:
      "One of the reasons we created the Good Company was because we had such negative experience with developers that when we found some great ones, we gave them jobs and put them on the board. We offer timely web solutions that work, after all that’s all you really need.",
  },
  {
    title: "App Development",
    content:
      "Does you business need an app? Do you need an app. This is a question we can help you answer. Apps aren’t for everyone, but if you need one , then talk to us.",
  },
  {
    title: "Radio Production",
    content:
      "With radio production experience spanning more than 20 years, the Good Company is in a unique position to provide broadcast strategy, analysis and execution in this digital era. Media is ever changing and the good company has been at the forefront go the changes in broadcasting both locally and internationally. Whether you need data driven output analysis, newsroom training, feature development or day part segmentation ideas, the Good company is your one stop shop for all things radio related.",
  },
];

export const products = [
  {
    id: 1,
    name: "Coffee Mug - Black Inside",
    img: coffeeMug,
    price: 750,
    details: "The Mics Are Open Coffee Mug - Black Inside",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 2,
    name: "Coffee Mug - White Inside",
    img: coffeeMugWhite,
    price: 700,
    details: "The Mics Are Open Coffee Mug - White Inside",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 15,
  },
  {
    id: 4,
    name: "Coffee Mug - Black",
    img: coffeeMugBlack,
    price: 700,
    details: "The Mics Are Open Coffee Mug - Black",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
  {
    id: 5,
    name: "Mics Are Open Tee - Black",
    img: maoBlack,
    price: 1200,
    details: "The Mics Are Open T/Shirt",
    by: "The Mics Are Open",
    new: false,
    soldOut: true,
  },
  {
    id: 6,
    name: "Mics Are Open Tee - White",
    img: maoWhite,
    price: 1100,
    details: "The Mics Are Open T/Shirt",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Water Bottle - Black",
    img: bottleNewBlack,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Black",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
  {
    id: 8,
    name: "Water Bottle - Blue",
    img: bottleNewBlue,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Blue",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
  },
  {
    id: 9,
    name: "Water Bottle - Charcoal",
    img: bottleCharcoal,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Charcoal",
    by: "The Mics Are Open",
    new: false,
    soldOut: true,
    discount: 0,
  },
  {
    id: 10,
    name: "Water Bottle - Blue",
    img: bottleBlue,
    price: 950,
    details: "The Mics Are Open Water Bottle - Blue",
    by: "The Mics Are Open",
    new: false,
    soldOut: true,
    discount: 0,
  },

  {
    id: 11,
    name: "Water Bottle - Lime",
    img: bottleLime,
    price: 950,
    details: "The Mics Are Open Water Bottle - Lime",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 12,
    name: "Water Bottle - Red",
    img: bottleRed,
    price: 950,
    details: "The Mics Are Open Water Bottle - Red",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 13,
    name: "Water Bottle - White",
    img: bottleWhite,
    price: 950,
    details: "The Mics Are Open Water Bottle - White",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 14,
    name: "Coaster - Round",
    img: coasters,
    price: 1000,
    details: "The Mics Are Open Caster - Round",
    new: false,
    soldOut: false,
    discount: 10,
  },
  {
    id: 15,
    name: "Coaster - Rounded Edges",
    img: coastersRound,
    price: 1100,
    details: "The Mics Are Open Caster - Rounded Edges",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
];
