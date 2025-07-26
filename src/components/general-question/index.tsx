import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export type GeneralQuestionType = {
  title: string;
  body: string;
  value: string;
}

export interface GeneralQuestionProps {
  data: GeneralQuestionType[];
}

export function GeneralQuestion({
  data
}: GeneralQuestionProps) {

  return(
    <Accordion type="single"  defaultValue={data[0].value}>
      {
        data.map((item) => (
          <AccordionItem value={item.value} key={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.body}</AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}