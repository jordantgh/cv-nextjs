import * as React from "react";
import { Badge } from "../../components/ui/badge";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg bg-card text-card-foreground", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-mono text-sm leading-none",
      className,
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardContentList = React.forwardRef<
  HTMLUListElement,
  { courses?: { name: string; badges?: string[] }[] }
>(({ courses }, ref) => (
  <ul ref={ref} className="list-disc pl-5 mt-2 text-xs">
    {courses && courses.map((course, index) => (
      <li key={index}>
        <div className="flex flex-wrap items-center gap-2">
          <span>{course.name}</span>
          {course.badges && course.badges.map((badge, badgeIndex) => (
            <Badge key={badgeIndex} variant="outline" className="mt-1 py-0 px-0.5 small-badge">
              {badge}
            </Badge>
          ))}
        </div>
      </li>
    ))}
  </ul>
));
CardContentList.displayName = "CardContentList";


const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardContentList,
};
