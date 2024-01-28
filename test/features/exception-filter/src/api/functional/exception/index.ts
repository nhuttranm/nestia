/**
 * @packageDocumentation
 * @module api.functional.exception
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type {
  IBbsArticle,
  IAttachmentFile,
} from "../../structures/IBbsArticle";

/**
 * @controller ExceptionController.typedBody
 * @path POST /exception/typedBody
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typedBody(
  connection: IConnection,
  input: typedBody.Input,
): Promise<typedBody.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...typedBody.METADATA,
      path: typedBody.path(),
    },
    input,
  );
}
export namespace typedBody {
  export type Input = Primitive<IBbsArticle.IStore>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "POST",
    path: "/exception/typedBody",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/exception/typedBody";
}

/**
 * @controller ExceptionController.typedManual
 * @path GET /exception/typedManual
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typedManual(connection: IConnection): Promise<void> {
  return PlainFetcher.fetch(connection, {
    ...typedManual.METADATA,
    path: typedManual.path(),
  });
}
export namespace typedManual {
  export const METADATA = {
    method: "GET",
    path: "/exception/typedManual",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/exception/typedManual";
}

/**
 * @controller ExceptionController.typedParam
 * @path GET /exception/:id/typedParam
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typedParam(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<void> {
  return PlainFetcher.fetch(connection, {
    ...typedParam.METADATA,
    path: typedParam.path(id),
  });
}
export namespace typedParam {
  export const METADATA = {
    method: "GET",
    path: "/exception/:id/typedParam",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/exception/${encodeURIComponent(id ?? "null")}/typedParam`;
}

/**
 * @controller ExceptionController.typedQuery
 * @path GET /exception/typedQuery
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typedQuery(
  connection: IConnection,
  file: typedQuery.Query,
): Promise<typedQuery.Output> {
  return PlainFetcher.fetch(connection, {
    ...typedQuery.METADATA,
    path: typedQuery.path(file),
  });
}
export namespace typedQuery {
  export type Query = Resolved<IAttachmentFile>;
  export type Output = Primitive<IAttachmentFile>;

  export const METADATA = {
    method: "GET",
    path: "/exception/typedQuery",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (file: typedQuery.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(file as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = "/exception/typedQuery";
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
}

/**
 * @controller ExceptionController.internal
 * @path GET /exception/internal
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function internal(connection: IConnection): Promise<void> {
  return PlainFetcher.fetch(connection, {
    ...internal.METADATA,
    path: internal.path(),
  });
}
export namespace internal {
  export const METADATA = {
    method: "GET",
    path: "/exception/internal",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/exception/internal";
}
