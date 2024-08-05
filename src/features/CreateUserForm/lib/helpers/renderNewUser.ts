import { userInfo } from "@/shared/consts";
import { createUser } from "./createUser";

export function renderNewUser(
  e: React.FormEvent<HTMLFormElement>, 
  userContext: userInfo[], 
  contextCallback: React.Dispatch<React.SetStateAction<userInfo[]>>,
  id?: number
) {
  let user = createUser(e.currentTarget, id);

  switch(localStorage.getItem('filter')) {
    case 'Присутствующим':
      if(user.online) contextCallback([...userContext, user]);
                
      break;
    case 'Отсутствующим':
      if(!user.online) contextCallback([...userContext, user]);
                  
      break;
    default:
      contextCallback([...userContext, user]);
  }
}