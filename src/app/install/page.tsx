"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeBlock, dracula } from "react-code-blocks";

export default function InstallPage() {
  const codeBuildFromSource =
    "git clone https://github.com/wins1ey/LibreSplit\ncd LibreSplit\nmake\nsudo make install";

  const codeArchLinuxHelper = "yay -S libresplit-git\nparu -S libresplit-git";

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
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div>
              <p>
                Follow the below instructions to build LibreSplit from the
                source code.
              </p>
              <CodeBlock
                text={codeBuildFromSource}
                language="bash"
                theme={dracula}
              />
              <p>LibreSplit has the following dependencies:</p>
              <ul className="list-inside list-disc">
                <li>libgtk+-3.0</li>
                <li>x11</li>
                <li>libjansson</li>
                <li>luajit</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">Arch Linux</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div>
              <p>
                LibreSplit is available in the AUR and can either be installed
                with an AUR helper, or manually.
              </p>
              <CodeBlock
                text={codeArchLinuxHelper}
                language="bash"
                theme={dracula}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
