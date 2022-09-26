 
 import HomeIcon from '@mui/icons-material/Home';
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import MessageIcon from '@mui/icons-material/Message';
 import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
 import SettingsIcon from '@mui/icons-material/Settings';
 import AssignmentIcon from '@mui/icons-material/Assignment';
 import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
 import LogoutIcon from '@mui/icons-material/Logout';
 import Label from '../elements/Label';


function SideMenu() {

    const menuItem = [
        {
            name: 'Home',
            color: "#B2BEB5",
            Icon: HomeIcon,
        },
        {
            name: 'Dashboard',
            color: "#B2BEB5",
            Icon: DashboardIcon,
        },
        {
            name: 'Project',
            color: "#B2BEB5",
            Icon: AssignmentIcon,
        },
        {
            name: 'Organization',
            color: "#B2BEB5",
            Icon: AssuredWorkloadIcon,
        },
        {
            name: 'Messages',
            color: "#B2BEB5",
            Icon: MessageIcon,
        },
        {
            name: 'Documents',
            color: "#B2BEB5",
            Icon: DocumentScannerIcon,
        },
        {
            name: 'Settings',
            color: "#B2BEB5",
            Icon: SettingsIcon,
        },
        {
            name: 'Logout',
            color: "#B2BEB5",
            Icon: LogoutIcon,
        }
    ]

  return (
    <div className="sideMenu">
     { menuItem.map((item, index) => {
        return (
            <div key={item.name+index} className='menu'>
                <item.Icon />
                <Label css="marginL20" text={item.name} />
            </div>
        )
     })}
    </div>
  );
}

export default SideMenu;
