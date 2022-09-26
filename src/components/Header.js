 
import Image from '../elements/Image'
import Logo from '../assets/images/KYRO-logo.jpg'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
      <div className="header">
        <div>
            <Image src={Logo} alt="KYRO" width="150px"/>
        </div>
        <MenuIcon />
      </div>
    );
  }
  
  export default Header;
  