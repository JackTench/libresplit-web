import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InstallPage() {
  return (
    <div className="mx-auto mt-10 max-w-md">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            Build From Source
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Follow the below instructions to build LibreSplit from the source
              code.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">Arch Linux</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              LibreSplit is available in the AUR and can either be installed
              with an AUR helper, or manually.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
