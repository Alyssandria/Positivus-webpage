import { Section } from "@/components/Section"
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { RadioButton } from "@/components/ui/RadioButton";
import CONTENT from "@/lib/content/en_us.json"
import { cn } from "@/lib/utils";

export const Contact = () => {
  const TITLE = CONTENT.PUBLIC.MAIN.HOME.CONTACT.TITLE;
  const SUBTITLE = CONTENT.PUBLIC.MAIN.HOME.CONTACT.SUB_TITLE;
  const FORM_CONTENT = CONTENT.PUBLIC.MAIN.HOME.CONTACT.FORM_CONTENT;

  // FIELDS
  const textArea = FORM_CONTENT.NAMEFIELD.TEXTAREA
  const radioOptions = FORM_CONTENT.NAMEFIELD.RADIO_BUTTONS.map((data) => {
    return (
      <label className="inline-flex items-center gap-2 text-sm" key={data.ID}>
        <RadioButton name={data.NAME} value={data.VALUE} className="size-5" />
        <span>{data.LABEL}</span>
      </label>
    )
  })
  const inputFields = FORM_CONTENT.NAMEFIELD.INPUTS.map((data) => {
    return (
      <div className="flex flex-col gap-2" key={data.LABEL}>
        <Label htmlFor={data.ID} className={cn(data.LABELHIDDEN ? "sr-only" : "")}>{data.LABEL}</Label>
        <Input defaultValue={data.DEFAULT_VALUE} placeholder={data.PLACEHOLDER} id={data.ID} required={data.REQUIRED} />
      </div>
    )
  });



  return (
    <Section title={TITLE} subTitle={SUBTITLE}>
      <form className="space-y-6">
        <fieldset className="p-6 bg-tertiary space-y-8 rounded-4xl">
          <legend className="sr-only">Name, Email and Message Fields</legend>

          <div className="flex justify-between px-4 items-center gap-2">
            {radioOptions}
          </div>

          <div className="space-y-4">
            {inputFields}
            <div className="flex flex-col gap-2">
              <Label htmlFor={textArea.ID} className={cn(textArea.LABELHIDDEN ? "sr-only" : "")}>{textArea.LABEL}</Label>
              <textarea defaultValue={textArea.DEFAULT_VALUE} rows={3} className="rounded-lg p-2 bg-white px-4 border placeholder:text-[#898989] placeholder:text-xs focus:outline-primary" id={textArea.ID} placeholder={textArea.PLACEHOLDER} />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="p-4 bg-secondary text-white rounded-lg w-full">{FORM_CONTENT.SUBMIT}</button>
      </form>
    </Section>
  )

}
