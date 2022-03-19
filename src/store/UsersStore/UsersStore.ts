import ApiStore from "../../shared/store/ApiStore";
import { ApiResponse, HTTPMethod } from "../../shared/store/ApiStore/types";
import { IUsersStore, RepoItem } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export default class UsersStore implements IUsersStore {
  private readonly apiStore = new ApiStore(BASE_URL);

  async getUsersList(): Promise<ApiResponse<RepoItem[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: "",
    });
  }
}
