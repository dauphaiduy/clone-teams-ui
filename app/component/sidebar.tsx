import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faComment, 
  faCalendar, 
  faPhone, 
  faCloud, 
  faRobot, 
  faCheckCircle, 
  faClock, 
  faEllipsisH, 
  faTh 
} from '@fortawesome/free-solid-svg-icons';

const sidebarItems = [
  { icon: <FontAwesomeIcon icon={faBell} className='size-6!'/>, label: "Hoạt động" },
  { icon: <FontAwesomeIcon icon={faComment} className='size-6!'/>, label: "Trò chuyện" },
  { icon: <FontAwesomeIcon icon={faCalendar} className='size-6!'/>, label: "Lịch Outlook" },
  { icon: <FontAwesomeIcon icon={faPhone} className='size-6!'/>, label: "Các cuộc gọi" },
  { icon: <FontAwesomeIcon icon={faCloud} className='size-6!'/>, label: "OneDrive" },
  { icon: <FontAwesomeIcon icon={faRobot} className='size-6!'/>, label: "Copilot" },
  { icon: <FontAwesomeIcon icon={faCheckCircle} className='size-6!'/>, label: "Phê duyệt" },
  { icon: <FontAwesomeIcon icon={faClock} className='size-6!'/>, label: "Ca Làm Việc" },
  { icon: <FontAwesomeIcon icon={faEllipsisH} className='size-6!'/>, label: "" },
  { icon: <FontAwesomeIcon icon={faTh} className='size-6!'/>, label: "Ứng dụng" },
];

export default function Sidebar() {

  return (
    <div className="p-2 border-r border-gray-300 h-screen bg-black">
      <div className="flex flex-col ">
        {sidebarItems.map((item, index) => (
          <div key={index} className="sidebar-item font-light text-gray-400">
            {item.icon}
            <p className="text-xxs text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
