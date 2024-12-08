import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "sanity";
import { Github, Globe } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: TypedObject[];
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?:
    | {
        title: string | null;
        url: string | null;
        type: string | null;
      }[]
    | null;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        <Image
          src={image || ""}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <PortableText value={description} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.url ?? ""} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.type === "code" ? (
                    <Github className="size-3" />
                  ) : (
                    <Globe className="size-3" />
                  )}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
