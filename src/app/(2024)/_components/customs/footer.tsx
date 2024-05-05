import Image from "next/image";

export interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className="py-10 border-t border-2 border-muted mt-10 flex items-center justify-center">
      <section>
        {/* <h1 className="text-2xl font-semibold flex items-center gap-2 text-purple-500 leading-normal">
          Trong Duong
          <Image
            src="/assets/grass-5.png"
            alt="Grass"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </h1> */}
        <h2 className="text-2xl font-semibold flex items-center gap-2 leading-normal">
          Frontend Engineer.
          <Image
            src="/assets/grass-5.png"
            alt="Grass"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </h2>
      </section>
    </footer>
  );
};

export default Footer;
