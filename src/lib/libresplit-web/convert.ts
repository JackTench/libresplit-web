import { XMLParser } from "fast-xml-parser";

export function lssToLibre(xml: string) {
  // Set up XML parser.
  const parser = new XMLParser();
  const lss = parser.parse(xml);

  console.log(lss.Run.GameName);
}
