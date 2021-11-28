import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { PrimaryButton } from "~/components/button";
import Input, { InputLabel } from "~/components/input";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const slug = form.get("slug")?.toString();
  const target = form.get("target")?.toString();

  if (!slug || !target) throw new Error("Invalid form submission!");

  await db.redirect.create({ data: { slug, target } });
  return redirect("/manage");
};

export default function CreateRedirect() {
  return (
    <main>
      <form method="post" className="space-y-6">
        <div>
          <InputLabel htmlFor="slug">Slug</InputLabel>
          <div className="mt-1">
            <Input
              name="slug"
              id="slug"
              type="text"
              placeholder="helloworld-123"
            />
          </div>
        </div>
        <div>
          <InputLabel htmlFor="target">Target</InputLabel>
          <div className="mt-1">
            <Input
              name="target"
              id="target"
              type="url"
              placeholder="https://google.com/"
            />
          </div>
        </div>
        <PrimaryButton type="submit">Create</PrimaryButton>
      </form>
    </main>
  );
}
