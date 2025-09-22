import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Paragraph({ children }: Props) {
  return (
    <p className="text-sm sm:w-[90%] md:w-[50%] mt-5 text-left">
      {children}
    </p>
  );
}
