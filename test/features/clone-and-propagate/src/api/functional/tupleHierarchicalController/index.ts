/**
 * @packageDocumentation
 * @module api.functional.tupleHierarchicalController
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type {
  IConnection,
  IPropagation,
  Resolved,
  HttpError,
} from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

/**
 * @controller TupleHierarchicalController.index
 * @path GET /tupleHierarchicalController
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(connection: IConnection): Promise<index.Output> {
  return !!connection.simulate
    ? index.simulate(connection)
    : PlainFetcher.propagate<any>(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...index.METADATA,
          template: index.METADATA.path,
          path: index.path(),
        },
      );
}
export namespace index {
  export type Output = IPropagation<
    {
      200: [
        boolean,
        null,
        number,
        [boolean, null, [number, [boolean, string]]],
        [number, [string, boolean, [number, number, [boolean, string]][]][]],
      ][];
    },
    200
  >;

  export const METADATA = {
    method: "GET",
    path: "/tupleHierarchicalController",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/tupleHierarchicalController";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<
    [
      boolean,
      null,
      number,
      [boolean, null, [number, [boolean, string]]],
      [number, [string, boolean, [number, number, [boolean, string]][]][]],
    ][]
  > =>
    typia.random<
      [
        boolean,
        null,
        number,
        [boolean, null, [number, [boolean, string]]],
        [number, [string, boolean, [number, number, [boolean, string]][]][]],
      ][]
    >(g);
  export const simulate = (connection: IConnection): Output => {
    return {
      success: true,
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    } as Output;
  };
}

/**
 * @controller TupleHierarchicalController.at
 * @path GET /tupleHierarchicalController/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: number,
): Promise<at.Output> {
  return !!connection.simulate
    ? at.simulate(connection, id)
    : PlainFetcher.propagate<any>(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...at.METADATA,
          template: at.METADATA.path,
          path: at.path(id),
        },
      );
}
export namespace at {
  export type Output = IPropagation<
    {
      200: [
        boolean,
        null,
        number,
        [boolean, null, [number, [boolean, string]]],
        [number, [string, boolean, [number, number, [boolean, string]][]][]],
      ];
    },
    200
  >;

  export const METADATA = {
    method: "GET",
    path: "/tupleHierarchicalController/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: number) =>
    `/tupleHierarchicalController/${encodeURIComponent(id?.toString() ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<
    [
      boolean,
      null,
      number,
      [boolean, null, [number, [boolean, string]]],
      [number, [string, boolean, [number, number, [boolean, string]][]][]],
    ]
  > =>
    typia.random<
      [
        boolean,
        null,
        number,
        [boolean, null, [number, [boolean, string]]],
        [number, [string, boolean, [number, number, [boolean, string]][]][]],
      ]
    >(g);
  export const simulate = (connection: IConnection, id: number): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(id),
      contentType: "application/json",
    });
    try {
      assert.param("id")(() => typia.assert(id));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return {
      success: true,
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    } as Output;
  };
}

/**
 * @controller TupleHierarchicalController.store
 * @path POST /tupleHierarchicalController
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
  connection: IConnection,
  body: store.Input,
): Promise<store.Output> {
  return !!connection.simulate
    ? store.simulate(connection, body)
    : PlainFetcher.propagate<any, any>(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...store.METADATA,
          template: store.METADATA.path,
          path: store.path(),
        },
        body,
      );
}
export namespace store {
  export type Input = [
    boolean,
    null,
    number,
    [boolean, null, [number, [boolean, string]]],
    [number, [string, boolean, [number, number, [boolean, string]][]][]],
  ];
  export type Output = IPropagation<
    {
      201: [
        boolean,
        null,
        number,
        [boolean, null, [number, [boolean, string]]],
        [number, [string, boolean, [number, number, [boolean, string]][]][]],
      ];
    },
    201
  >;

  export const METADATA = {
    method: "POST",
    path: "/tupleHierarchicalController",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = () => "/tupleHierarchicalController";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<
    [
      boolean,
      null,
      number,
      [boolean, null, [number, [boolean, string]]],
      [number, [string, boolean, [number, number, [boolean, string]][]][]],
    ]
  > =>
    typia.random<
      [
        boolean,
        null,
        number,
        [boolean, null, [number, [boolean, string]]],
        [number, [string, boolean, [number, number, [boolean, string]][]][]],
      ]
    >(g);
  export const simulate = (
    connection: IConnection,
    body: store.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    try {
      assert.body(() => typia.assert(body));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return {
      success: true,
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    } as Output;
  };
}
