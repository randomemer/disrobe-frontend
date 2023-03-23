import { wrapLink } from "@/utils/editor-utils";
import isUrl from "is-url";
import { Element } from "slate";

import type { InlinesEditor, SlatePlugin } from "@/types/slate";

const withInlines: SlatePlugin<InlinesEditor> = function (editor) {
  const { insertData, insertText, isInline } = editor;

  editor.isInline = (element) =>
    (Element.isElement(element) && ["link"].includes(element.type)) ||
    isInline(element);

  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export default withInlines;