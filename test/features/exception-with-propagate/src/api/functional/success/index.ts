/**
 * @packageDocumentation
 * @module api.functional.success
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, IPropagation } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

/**
 * @throws 401
 *
 * @controller SuccessController.get
 * @path GET /success
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return PlainFetcher.propagate(connection, {
    ...get.METADATA,
    path: get.path(),
  });
}
export namespace get {
  export type Output = IPropagation<{
    200: number;
    401: "INVALID_PERMISSION";
  }>;

  export const METADATA = {
    method: "GET",
    path: "/success",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/success";
}

/**
 * @throws 401
 *
 * @controller SuccessController.union
 * @path GET /success/:error_type
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function union(
  connection: IConnection,
  error_type: "EXPIRED_PERMISSION" | "REQUIRED_PERMISSION",
): Promise<union.Output> {
  return PlainFetcher.propagate(connection, {
    ...union.METADATA,
    path: union.path(error_type),
  });
}
export namespace union {
  export type Output = IPropagation<{
    200: number;
    401: "EXPIRED_PERMISSION" | "REQUIRED_PERMISSION";
  }>;

  export const METADATA = {
    method: "GET",
    path: "/success/:error_type",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (
    error_type: "EXPIRED_PERMISSION" | "REQUIRED_PERMISSION",
  ) => `/success/${encodeURIComponent(error_type ?? "null")}`;
}
