interface HangmanDrawingProps {
  incorrectGuesses: number;
}

const Head = <div className="w-10 h-10 rounded-full border-4 border-black absolute top-12 left-1/2 transform -translate-x-1/2" />;
const Body = (
  <div className="w-1 h-20 bg-black absolute top-[88px] left-1/2 transform -translate-x-1/2" />
);

const LeftArm = (
  <div className="w-20 h-1 bg-black absolute top-32 left-[calc(45%-60px)] rotate-[-45deg]" />
);
const RightArm = (
  <div className="w-20 h-1 bg-black absolute top-32 left-[calc(44%)] rotate-[45deg]" />
);
const LeftLeg = (
  <div className="w-20 h-1 bg-black absolute top-48 left-[calc(43%-50px)] rotate-[-55deg]" />
);
const RightLeg = (
  <div className="w-20 h-1 bg-black absolute top-48 left-[calc(41%)] rotate-[55deg]" />
);


const BODY_PARTS = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg];

const HangmanDrawing = ({ incorrectGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative w-48 h-64 border-l-4 border-b-4 border-black">
      <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-black" />
      <div className="absolute top-0 left-1/2 w-20 h-0.5 bg-black" />
      <div className="absolute top-0 left-[calc(50%+80px)] w-0.5 h-10 bg-black" />

      {BODY_PARTS.slice(0, incorrectGuesses)}
    </div>
  );
};

export default HangmanDrawing;
