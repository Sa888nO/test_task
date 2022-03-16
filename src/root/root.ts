import { ApiResponse } from "../shared/store/ApiStore/types";
import UsersStore from "../store/UsersStore";
import { RepoItem } from "../store/UsersStore/types";

const usersStore = new UsersStore();

usersStore.getUsersList().then((result: ApiResponse<RepoItem[], any>) => {
  console.log(result);
});
