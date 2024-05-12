import { IconType } from "react-icons";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
  FaDiscord,
  FaUnity,
  FaSpotify,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandFiverr, TbBrandLeetcode } from "react-icons/tb";
import { SiCodeforces, SiCodewars } from "react-icons/si";
import { PiCatDuotone } from "react-icons/pi";

export interface ContactMethod {
  name: string;
  description?: string;
  icon: IconType;
  link: string;
}

const contactMethods: ContactMethod[] = [
  {
    name: "Email",
    description:
      "My primary contact method - email! You can contact it anytime.",
    icon: MdOutlineMailOutline,
    link: "mailto:peanutandscuffy1@gmail.com",
  },
  {
    name: "Telegram",
    description: "I use Telegram on a daily basis! You can contact me there.",
    icon: FaTelegram,
    link: "https://t.me/p55d2k",
  },
  {
    name: "Instagram",
    description:
      "My personal and social profile - Instagram! You can drop me a message, or send a follow request.",
    icon: FaInstagram,
    link: "https://instagram.com/p55d2k",
  },
  {
    name: "Github",
    description:
      "My code repository, GitHub. You can find my projects, contributions, and profile there.",
    icon: FaGithub,
    link: "https://github.com/p55d2k",
  },
  {
    name: "LinkedIn",
    description:
      "My professional profile, LinkedIn. I don't check it regularly though.",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/zk-w-68507a273/",
  },
  {
    name: "X",
    description: "Another social profile, X. I don't use it much though.",
    icon: FaXTwitter,
    link: "https://twitter.com/p55d2k",
  },
];

export const otherContactMethods: ContactMethod[] = [
  {
    name: "Fiverr",
    icon: TbBrandFiverr,
    link: "https://www.fiverr.com/zk_p55d2k",
  },
  {
    name: "LeetCode",
    icon: TbBrandLeetcode,
    link: "https://leetcode.com/u/p55d2k_/",
  },
  {
    name: "CodeForces",
    icon: SiCodeforces,
    link: "https://codeforces.com/profile/p55d2k",
  },
  {
    name: "Codebreaker",
    icon: PiCatDuotone,
    link: "https://codebreaker.xyz/profile/P55D2K",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@p55d2k",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    link: "https://discordapp.com/users/812219026473746453",
  },
  {
    name: "Unity",
    icon: FaUnity,
    link: "https://forum.unity.com/members/p55d2k.9499362/",
  },
  {
    name: "Spotify",
    icon: FaSpotify,
    // link: "https://www.codewars.com/users/p55d2k",
    link: "https://open.spotify.com/playlist/5UOkmsZSQi9uZEEQOrvew2?si=54c0f7dc065f4027",
  },
];

export default contactMethods;
