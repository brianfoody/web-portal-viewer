
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer 
      className={cn(
        "py-6 border-t bg-background/50",
        className
      )}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1.5">
            <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path 
                  d="M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M12 4L20 12M20 12V7M20 12H15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm text-foreground/70">
              WebPortal Viewer
            </span>
          </div>
          
          <div className="mt-4 md:mt-0 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} WebPortal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
