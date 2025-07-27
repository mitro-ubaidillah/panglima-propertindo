import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { ComponentType, createElement } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputLabelProps extends React.ComponentProps<"input"> {
  starticon?: ComponentType<LucideProps>;
  endicon?: ComponentType<LucideProps>;
  label?: string;
  error?: boolean;
  helpertext?: string;
}

export default function InputLabel ({
  starticon,
  endicon,
  label,
  ...props
}: InputLabelProps) {

  return (
    <div className="">
      <Label>{label}</Label>
      <div className="relative">
        <Input 
          {...props}
          className={cn(
            starticon ? "pl-7" : "",
            endicon ? "pr-5" : "",
            props.className
          )} 
          id={props.id}
        />

        {starticon && createElement(starticon, {
          className: "absolute top-2.5 left-2 text-gray-400",
          size: 16
        })}
        {endicon && createElement(endicon, {
          className: "absolute top-2.5 right-2 text-gray-400",
          size: 16
        })}
      </div>
    </div>
  )
}