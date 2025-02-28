/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from "@/components/ui/text";
import Link from "next/link";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className="flex flex-col">
      <Text as="p" variant="body" className="text-muted mb-2">
        Hello world,
      </Text>
      <div className="flex items-end gap-5">
        <Text
          as="h1"
          variant="title"
          className="uppercase font-doto leading-none"
        >
          Daniel
        </Text>
        <Text
          as={Link}
          href="https://github.com/duongductrong"
          variant="body"
          className="text-muted"
          target="_blank"
        >
          <span className="mr-4">/</span> @duongductrong
        </Text>
      </div>
    </header>
  );
};

export default Header;
