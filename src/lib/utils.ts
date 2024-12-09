import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPeriod = (period: string) => {
  const [start, end] = period.split(" - ");
  const startDate = new Date(start).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const endDate =
    end === "Present"
      ? end
      : new Date(end).toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        });
  return `${startDate} - ${endDate}`;
};

export function portableTextToPlainText(blocks: any[] = []): string {
  return (
    blocks
      ?.map((block) =>
        block._type === "block"
          ? block.children?.map((child: any) => child.text).join("")
          : ""
      )
      .join(" ") ?? ""
  );
}
