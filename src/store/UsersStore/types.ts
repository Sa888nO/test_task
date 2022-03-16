import { ApiResponse } from "../../shared/store/ApiStore/types";

export type RepoItem = {};

export interface IUsersStore {
  getUsersList(): Promise<ApiResponse<RepoItem[], any>>;
}
