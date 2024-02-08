import { BiHeart, BiStar } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { postService } from "../../../services/client-api/postService";
import { authService } from "../../../services/client-api/authService";

const CardHoverIcons = ({id}) => {

  const clickedHeart=async ()=>{
    let email = await authService.getEmailFromLocalStorage();
    debugger
    postService.favourtie({
      "email": email,
      "propertyId": id
    })
  }


  return (
    <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:block gap-x-3">
      <div className="text-white flex-align-center gap-x-2">
        <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
          <BiHeart onClick={clickedHeart} />
        </div>
        <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
          <FiEye />
        </div>
        <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
          <BiStar />
        </div>
      </div>
    </div>
  );
};

export default CardHoverIcons;
