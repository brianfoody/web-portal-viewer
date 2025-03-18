
import { cn } from "@/lib/utils";

interface InfoSectionProps {
  className?: string;
}

export function InfoSection({ className }: InfoSectionProps) {
  return (
    <section 
      className={cn(
        "py-16 md:py-24",
        className
      )}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            WebPortal Viewer allows you to safely view any website within an iframe on our platform. Simply enter the URL and we'll load it for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Enter URL",
              description: "Paste any website address in the URL field above",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )
            },
            {
              title: "Preview Website",
              description: "See the website rendered exactly as it would appear in a browser",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )
            },
            {
              title: "Browse Safely",
              description: "Our sandboxed environment keeps you protected while browsing",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 border transition-all hover:shadow-subtle"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
