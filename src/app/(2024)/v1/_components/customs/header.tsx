import Image from "next/image";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className="container text-center py-6">
      <div className="relative inline-block">
        <Image
          src="/assets/peeps-avatar.png"
          width={80}
          height={80}
          className="w-24 h-24 object-cover rounded-2xl"
          alt="Avatar"
        />

        <div className="bg-green-500 w-4 h-4 rounded-full absolute -bottom-1 -right-1 border-4 border-white" />
      </div>
    </header>
  );
};

export default Header;
