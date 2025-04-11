import { Section } from "@/components/Section"
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import CONTENT from "@/lib/content/en_us.json"
import { cn } from "@/lib/utils";

export const Contact = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.CONTACT.TITLE;
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.CONTACT.TITLE;
  const FORM_CONTENT = CONTENT.PUBLIC.MAIN.HOME.CONTACT.FORM_CONTENT;

  // FIELDS
  const textArea = FORM_CONTENT.NAMEFIELD.TEXTAREA
  const inputFields = FORM_CONTENT.NAMEFIELD.INPUTS.map((data) => {
    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor={data.ID} className={cn(data.LABELHIDDEN ? "sr-only" : "")}>{data.LABEL}</Label>
        <Input defaultValue={data.DEFAULT_VALUE} placeholder={data.PLACEHOLDER} id={data.ID} required={data.REQUIRED} />
      </div>
    )
  });



  return (
    <Section title={TITLE} subTitle={SUBTITLE}>
      <form className="bg-tertiary p-6 rounded-4xl">
        <fieldset>
          <legend className="sr-only">Name, Email and Message Fields</legend>

          <div>

          </div>

          <div className="space-y-4">
            {inputFields}

            <div className="flex flex-col gap-2">
              <Label htmlFor={textArea.ID} className={cn(textArea.LABELHIDDEN ? "sr-only" : "")}>{textArea.LABEL}</Label>
              <textarea defaultValue={textArea.DEFAULT_VALUE} rows={3} className="rounded-lg p-2 bg-white px-4 border placeholder:text-[#898989] placeholder:text-xs focus:outline-primary" id={textArea.ID} placeholder={textArea.PLACEHOLDER} />
            </div>
          </div>




        </fieldset>
      </form>
    </Section>
  )

}
