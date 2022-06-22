import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import invariant from "tiny-invariant";
import { renderToString } from "react-dom/server";
import Joi from "joi";



console.log(process.env.MAILER_SENDER_EMAIL, process.env.MAILER_SENDER_PASS);
// const idk = invariant.s({});
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
