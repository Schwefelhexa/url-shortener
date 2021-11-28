import { PrimaryButton } from "~/components/button";
import Input, { InputLabel } from "~/components/input";

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
