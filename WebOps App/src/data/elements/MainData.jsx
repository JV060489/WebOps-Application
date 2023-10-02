import {
  HouseDoorFill,
  PersonWorkspace,
  Controller,
  FileEarmarkRichtext,
  Mailbox,
  Link45deg,
  HandThumbsUp,
  At,
} from "react-bootstrap-icons";

import aboutImg from "../../assets/images/about.png";
import contactImg from "../../assets/images/contact.png";
import linksImg from "../../assets/images/links.png";
import thanksImg from "../../assets/images/thanks.png";
import welcomeImg from "../../assets/images/welcome.png";
import workImg from "../../assets/images/resume.png";

const MainData = [
  /*************************************************************************
   * HOME
   */
  {
    name: "Welcome",
    path: "/Welcome",
    icon: <HouseDoorFill />,
    image: welcomeImg,
    dialoge: <p>Welcome to metsa.</p>,
    view: {
      target: [7.33513, 11.7962, 2.40599],
      camera: [8.31507, 11.99548, 2.40491],
      fov: 50,
    },
  },
  /*************************************************************************
   * Events
   */
  {
    name: "Work",
    path: "/Work",
    icon: <PersonWorkspace />,
    image: workImg,
    dialoge: <p>Events</p>,
    view: {
      target: [-1.92181, 7.78659, 0.47349],
      camera: [-1.14332, 8.11401, -0.06199],
      fov: 50,
    },
  },
  /*************************************************************************
   * About
   */
  {
    name: "About",
    path: "/About",
    icon: <At />,
    image: aboutImg,
    dialoge: <p>Metsa</p>,
    view: {
      target: [0.40943, 5.17102, 0.8664],
      camera: [1.28875, 5.49114, 0.5138],
      fov: 50,
    },
  },

  /*************************************************************************
   * Contact
   */
  {
    name: "Contact",
    path: "/Contact",
    icon: <Mailbox />,
    image: contactImg,
    dialoge: <p>Contact</p>,
    view: {
      target: [12.89833, 1.34919, 2.75675],
      camera: [13.55846, 1.59686, 2.0476],
      fov: 50,
    },
  },
  /*************************************************************************
   * Links
   */
  {
    name: "Links",
    path: "/Links",
    icon: <Link45deg />,
    image: linksImg,
    dialoge: <p>Link To social media handle of metsa</p>,
    view: {
      target: [5.01952, 2.36291, -4.69971],
      camera: [5.98916, 2.44372, -4.4689],
      fov: 50,
    },
  },
  /*************************************************************************
   * Thanks
   */
  {
    name: "Thanks",
    path: "/Thanks",
    icon: <HandThumbsUp />,
    image: thanksImg,
    dialoge: (
      <p>
        Thank you for visiting do drop by our metallurgical department to know
        more about metsa.see you there ;)
      </p>
    ),
    view: {
      target: [17.3747, 5.72281, -14.73754],
      camera: [18.2447, 5.89639, -15.19901],
      fov: 50,
    },
  },
];

export default MainData;
