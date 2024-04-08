import { TypeAnimation } from "react-type-animation";

interface SubsectionHeaderProps {
  subtitle: string;
  typeSequence: (number | string)[];
}

const SubsectionHeader = ({
  subtitle,
  typeSequence,
}: SubsectionHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-opacity-0 pb-3 text-white bg-clip-text text-center">
        <TypeAnimation
          sequence={typeSequence}
          speed={70}
          repeat={Infinity}
          cursor={true}
        />
      </div>
      <h1 className="text-xl md:text-3xl font-thin text-center">{subtitle}</h1>
    </div>
  );
};

export default SubsectionHeader;