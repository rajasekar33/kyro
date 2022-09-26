import Button from "../elements/Button";
import Image from "../elements/Image";
import ProfileImg from '../assets/images/profile.png'
import Heading from '../elements/Heading' 
import Paragraph from "../elements/Paragraph";
import Span from "../elements/Span";


function ProfilePreview(props) {
    const { user } = props
    return (
      <div className="profilePreview">
        <div className="profileHeader">
            <div className="marginR10">
                <Button css="kyroBtn" text="ADD PROJECT"/>
            </div>
            <div className="marginR10">
                <Image src={ProfileImg} alt="Profile" width="40px" />
            </div>
            <div>
                <Heading css="margin0" level={3} text={user?.display_name} />
                <Span text={user?.roles[0]}/>
            </div>
        </div>
        <div className="profileDetail">
            <div>
                <Image css="userImage" src={ProfileImg} alt="PROFILE"/>
                <Paragraph text={`${user?.first_name} ${user?.last_name}`} />
                <Paragraph css="disabled" text={user?.email}/>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProfilePreview;
  