import { userInfo, userList } from "@/shared/consts"

export const deleteOldUser = (
  oldUserId: number,
  userContext: userInfo[], 
  contextCallback: React.Dispatch<React.SetStateAction<userInfo[]>>
) => {
  userList.map((user, index) => {
    if(user.id === oldUserId) userList.splice(index, 1);
  });

  userContext.map((user, index) => {
    if(user.id === oldUserId) userContext.splice(index, 1);
  });

  contextCallback([...userContext]);
}