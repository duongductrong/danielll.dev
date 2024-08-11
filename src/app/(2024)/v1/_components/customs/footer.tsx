import Image from "next/image";

export interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className="py-10 gap-6 border-t border-2 border-muted mt-10 flex flex-col items-center justify-center">
      <Image
        src="/assets/grass-5.png"
        alt="Grass"
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
      />
      <p>Copyright by me {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
