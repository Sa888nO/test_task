import { type } from "os";

export enum HTTPMethod {
  POST = "POST",
  GET = "GET",
}

export type RequestParams<ReqT> = {
  method: HTTPMethod;
  endpoint: string;
  headers: Record<string, string>;

  data: ReqT;
};

export enum StatusHTTP {
  UNEXPECTED_ERROR = "UNEXPECTED_ERROR",
  OK = 200,
}

export type ApiResponse<SuccessT, ErrorT> =
  | {
      success: true;
      data: SuccessT;
      status: number;
    }
  | {
      success: false;
      data: ErrorT;
      status: number;
    }
  | {
      success: false;
      data: any;
      status: StatusHTTP;
    };

export interface IApiStore {
  readonly baseUrl: string;
  request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>>;
}
