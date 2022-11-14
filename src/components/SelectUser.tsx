import { useAbility } from "@casl/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AbilityContext } from "../config/Can";
import updateAbility from "../config/UpdateAbility";
import { UserContext } from "../context/UserContext";

const SelectUser = () => {
   const { setUserRole } = useContext(UserContext);

   const ability = useAbility(AbilityContext);
   const navigate = useNavigate();

   const handleChange = (role: string) => {
      setUserRole(role);
      updateAbility(ability, role);
      navigate("/");
   };

   return (
      <div className='flex flex-col w-fit p-4 m-auto my-auto justify-center h-[80vh] gap-3 text-gray-100 font-bold [&>button]:p-3 [&>button]:rounded-lg [&>button]:w-2/3 [&>button]:mx-auto'>
         <p className='text-black'>
            View src/config/PermissionsMap.ts to see user roles & permissions
         </p>
         <button onClick={() => handleChange("admin")} className='bg-red-500'>
            Switch to Admin
         </button>
         <button onClick={() => handleChange("user")} className='bg-blue-500'>
            Switch to User
         </button>
         <button
            onClick={() => handleChange("teamLead")}
            className='bg-slate-500'
         >
            Switch to Team Lead
         </button>
         <button
            onClick={() => handleChange("manager")}
            className='bg-green-500'
         >
            Switch to Manager
         </button>
      </div>
   );
};

export default SelectUser;
