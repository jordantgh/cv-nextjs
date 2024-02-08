import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface CardItemProps {
  title: string;
  description: string;
  tags?: readonly string[];
  link?: string;
  authors?: string;
  journal?: string;
  publicationDate?: string;
  isPublication?: boolean;
}

export function CardItem({
  title,
  description,
  tags,
  link,
  authors,
  journal,
  publicationDate,
  isPublication
}: CardItemProps) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a href={link} target="_blank" className="inline-flex items-center gap-1 hover:underline">
                {title}
              </a>
            ) : (
              title
            )}
          </CardTitle>
          {isPublication && (
            <>
              <CardDescription className="font-mono text-xs">
                {authors}
              </CardDescription>
              <CardDescription className="font-mono text-xs">
                {journal} ({publicationDate})
              </CardDescription>
            </>
          )}
            <CardDescription className="font-mono text-xs">{description}</CardDescription>
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
    </Card>
  );

}