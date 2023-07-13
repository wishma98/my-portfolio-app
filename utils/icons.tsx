import {
  RiMapPinLine,
  RiSearchLine,
  RiArrowRightLine,
  RiArrowDropDownLine,
  RiCheckFill,
  RiDashboardLine,
  RiEyeOffLine,
  RiFundsBoxLine,
  RiHome5Line,
  RiLock2Line,
  RiMapPin2Line,
  RiPaintBrushLine,
  RiPhoneLine,
  RiPriceTag2Line,
  RiSafe2Line,
  RiShoppingBasketLine,
  RiStoreLine,
  RiUser2Fill,
  RiUserSmileLine,
  RiBuilding4Fill,
  RiShoppingBagLine,
  RiLogoutCircleLine,
  RiStarLine,
  RiRestaurantLine,
  RiStore3Line,
  RiCupLine,
  RiFileList3Line,
  RiGlobalLine,
  RiFunctionLine,
  RiUserFill,
  RiMailSendLine,
  RiWhatsappLine,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiPhoneFill,
  RiBook3Line,
  RiMenuFoldFill,
  RiMenuUnfoldFill,
  RiCamera2Line,
  RiKey2Line,
  RiTimeLine,
  RiCupFill,
  RiUserHeartLine,
  RiUserHeartFill,
  RiEmotionLine,
  RiEmotionFill,
  RiEmotionUnhappyLine,
  RiEmotionUnhappyFill,
  RiArrowLeftLine,
  RiHeartFill,
  RiHeartLine,
  RiStarFill,
  RiFileCopyLine,
  RiDirectionLine,
  RiMenuFill,
  RiGitBranchLine,
  RiGithubLine,
  RiMailLine,
  RiWhatsappFill,
} from "react-icons/ri";

import {
  FiAlertCircle,
  FiAlertTriangle,
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiCopy,
  FiEdit2,
  FiEye,
  FiGrid,
  FiLock,
  FiMinus,
  FiMoreHorizontal,
  FiPlus,
  FiPrinter,
  FiRotateCcw,
  FiSearch,
  FiSettings,
  FiShoppingCart,
  FiSmile,
  FiTag,
  FiTrash2,
  FiTrendingUp,
  FiUploadCloud,
  FiUsers,
  FiX,
} from "react-icons/fi";

export const GetIconByName = (iconName) => {
  switch (iconName) {
    case "location":
      return <RiMapPinLine />;
    case "search":
      return <RiSearchLine />;
    case "rightArrow":
      return <RiArrowRightLine />;
    case "leftArrow":
      return <RiArrowLeftLine />;
    case "sales":
      return <RiShoppingBasketLine />;
    case "purchasing":
      return <RiPriceTag2Line />;
    case "inventory":
      return <RiSafe2Line />;
    case "report":
      return <RiFundsBoxLine />;
    case "team":
      return <FiUsers />;
    case "users":
      return <RiUserSmileLine />;
    case "home":
      return <RiHome5Line />;
    case "tag":
      return <FiTag />;
    case "trend-up":
      return <FiTrendingUp />;
    case "plus":
      return <FiPlus />;
    case "chevronDown":
      return <FiChevronDown />;
    case "chevron-up":
      return <FiChevronUp />;
    case "lock":
      return <FiLock />;
    case "cloud-up":
      return <FiUploadCloud />;
    case "alertCircle":
      return <FiAlertCircle />;
    case "chevron-left":
      return <FiChevronLeft />;
    case "chevron-right":
      return <FiChevronRight />;
    case "cross":
      return <FiX />;
    case "alert-triangle":
      return <FiAlertTriangle />;
    case "calender":
      return <FiCalendar />;
    case "search":
      return <FiSearch />;
    case "dots":
      return <FiMoreHorizontal />;
    case "cart":
      return <FiShoppingCart />;
    case "copy":
      return <FiCopy />;
    case "printer":
      return <FiPrinter />;
    case "eye":
      return <FiEye />;
    case "pencil":
      return <FiEdit2 />;
    case "rotate":
      return <FiRotateCcw />;
    case "arrow-left":
      return <FiArrowLeft />;
    case "arrow-right":
      return <FiArrowRight />;
    case "dashboard":
      return <FiGrid />;
    case "settings":
      return <FiSettings />;
    case "smile":
      return <FiSmile />;
    case "category":
      return <RiDashboardLine />;
    case "check":
      return <RiCheckFill />;
    case "paintbrush":
      return <RiPaintBrushLine />;
    case "eyeOff":
      return <RiEyeOffLine />;
    case "logout":
      return <RiLock2Line />;
    case "profile":
      return <RiUser2Fill />;
    case "trash":
      return <FiTrash2 />;
    case "minus":
      return <FiMinus />;
    case "store":
      return <RiStoreLine />;
    case "phone":
      return <RiPhoneLine />;
    case "map-pin":
      return <RiMapPin2Line />;
    case "point":
      return <RiMapPin2Line />;
    case "arrow-down":
      return <RiArrowDropDownLine />;
    case "warehouse":
      return <RiBuilding4Fill />;
    case "order":
      return <RiShoppingBagLine />;
    case "logout-circle":
      return <RiLogoutCircleLine />;
    case "star":
      return <RiStarLine />;
    case "starFill":
      return <RiStarFill />;
    case "restaurant-menu":
      return <RiRestaurantLine />;
    case "restaurant-store":
      return <RiStore3Line />;
    case "cup":
      return <RiCupLine />;
    case "file":
      return <RiFileList3Line />;
    case "copy":
      return <RiFileCopyLine />;
    case "glob":
      return <RiGlobalLine />;
    case "direction":
      return <RiDirectionLine />;
    case "function":
      return <RiFunctionLine />;
    case "user":
      return <RiUserFill />;
    case "mail":
      return <RiMailSendLine />;
    case "email":
      return <RiMailLine />;
    case "facebook":
      return <RiFacebookCircleLine />;
    case "github":
      return <RiGithubLine />;
    case "whatsapp":
      return <RiWhatsappFill />;
    case "instagram":
      return <RiInstagramLine />;
    case "youtube":
      return <RiYoutubeLine />;
    case "phone-fill":
      return <RiPhoneFill />;
    case "wallet":
      return <RiBook3Line />;
    case "hide-menu":
      return <RiMenuFoldFill />;
    case "show-menu":
      return <RiMenuUnfoldFill />;
    case "camera":
      return <RiCamera2Line />;
    case "key":
      return <RiKey2Line />;
    case "time":
      return <RiTimeLine />;
    case "heart":
      return <RiHeartLine />;
    case "heartFill":
      return <RiHeartFill />;
    case "cup-fill":
      return <RiCupFill />;
    case "heart":
      return <RiUserHeartLine />;
    case "heart-fill":
      return <RiUserHeartFill />;
    case "happy":
      return <RiEmotionLine />;
    case "happy-fill":
      return <RiEmotionFill />;
    case "unhappy":
      return <RiEmotionUnhappyLine />;
    case "unhappy-fill":
      return <RiEmotionUnhappyFill />;
    case "menu":
      return <RiMenuFill />;
    default:
      return;
  }
};
