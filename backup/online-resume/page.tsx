
import Resume from "@/components/Resume/Resume";
import content from "./content.json";

export default function Page() {

  return (
    <>
      <Resume content={content} />
    </>
  );
}
