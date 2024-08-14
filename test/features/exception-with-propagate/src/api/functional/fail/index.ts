/**
 * @packageDocumentation
 * @module api.functional.fail
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, IPropagation } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

/**
 * @throws 401
 * @controller FailController.get
 * @path GET /fail/:error_type
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection,
  error_type: "EXPIRED_PERMISSION" | "INVALID_PERMISSION",
): Promise<get.Output> {
  return PlainFetcher.propagate<any>(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...get.METADATA,
      template: get.METADATA.path,
      path: get.path(error_type),
    },
  );
}
export namespace get {
  export type Output = IPropagation<
    {
      200: number;
      401: "EXPIRED_PERMISSION" | "INVALID_PERMISSION";
    },
    200
  >;

  export const METADATA = {
    method: "GET",
    path: "/fail/:error_type",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (
    error_type: "EXPIRED_PERMISSION" | "INVALID_PERMISSION",
  ) => `/fail/${encodeURIComponent(error_type?.toString() ?? "null")}`;
}

/**
 * @throws 401
 * @controller FailController.composite
 * @path GET /fail/composite/:error_type
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function composite(
  connection: IConnection,
  error_type:
    | "EXPIRED_PERMISSION"
    | "INVALID_PERMISSION"
    | "REQUIRED_PERMISSION",
): Promise<composite.Output> {
  return PlainFetcher.propagate<any>(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...composite.METADATA,
      template: composite.METADATA.path,
      path: composite.path(error_type),
    },
  );
}
export namespace composite {
  export type Output = IPropagation<
    {
      200: number;
      401: "EXPIRED_PERMISSION" | "INVALID_PERMISSION" | "REQUIRED_PERMISSION";
    },
    200
  >;

  export const METADATA = {
    method: "GET",
    path: "/fail/composite/:error_type",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (
    error_type:
      | "EXPIRED_PERMISSION"
      | "INVALID_PERMISSION"
      | "REQUIRED_PERMISSION",
  ) =>
    `/fail/composite/${encodeURIComponent(error_type?.toString() ?? "null")}`;
}
