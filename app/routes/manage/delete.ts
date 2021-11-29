import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("id")?.toString();

  if (!id) throw new Error("No ID provided!");
  const targeted = await db.redirect.findUnique({ where: { id } });
  if (!targeted) throw new Error("Provided ID is invalid!");

  await db.redirect.delete({ where: { id } });
  return redirect("/manage");
};
