import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import invariant from "tiny-invariant";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import Joi from "joi";

import { load } from "ts-dotenv";

export const env = load({
  MAILER_SENDER_PASS: String,
  MAILER_SENDER_EMAIL: String,
  MAILER_RECIEVER_EMAIL: String,
  TRELLO_BOARD_ADDRESS: String,
});

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToStaticMarkup(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
