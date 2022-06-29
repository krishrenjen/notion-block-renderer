import { FC } from "react";
import Link from "next/link";
import { annotationToClassName } from "../utils";
import { Context } from "../utils";
import { useContext } from "react";
import { TextProps } from "../types";

const TextRenderer: FC<TextProps> = ({ richTextArr, isNextLink = true }) => {
  const { prefix } = useContext(Context);
  return (
    <>
      {richTextArr.map((richText: any, index: number) => {
        const className = annotationToClassName(richText.annotations, prefix);
        if (richText.href && isNextLink) {
          return (
            <Link key={index} href={richText.href}>
              {/* <a className={className}>{richText.text.content}</a> */}
              <a className={className}>{richText.plain_text}</a>
            </Link>
          );
        }
        if (richText.href) {
          return (
            <a key={index} href={richText.href} className={className}>
              {richText.plain_text}
            </a>
          );
        }
        return (
          <span key={index} className={className}>
            {richText.plain_text}
          </span>
        );
      })}
    </>
  );
};
export default TextRenderer;
