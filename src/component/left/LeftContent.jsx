import "./LeftContent.css"
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "@react-email/components";
import Resume from "./Resume";

export default function LeftContent(){
    return (
    <div className= "content-left">
        <div className= "welcome">
            Hi There, 
            <br/>I&apos;m Peiling Cai
        </div>
        <div className= "title">
            &lt; Software Developer &gt;
        </div>
        <br/>
        <div className="left-info">Master of Science in Computer Science with expertise in web development</div>
        <div className="left-info">Actively looking for Full time opportunities</div>
        <div className="icon-section">
             <Resume className= "resume" /> 
        </div>
        <div className='icon-section'> 
            <a href="https://www.linkedin.com/in/peiling-cai/" target="_blank"> <TiSocialLinkedin class='icon'/>   </a>
            <a href="https://github.com/PeilingCai8059" target="_blank"> <FaGithub class='icon'/>   </a>
            <Link href="mailto:peilingccai@gmail.com"><HiOutlineMail class='icon'/> </Link>
        </div>

     </div>
    );
}
