
import { useState, ChangeEvent, FormEvent } from 'react';
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  className?: string;
}

export function UrlInput({ onSubmit, className }: UrlInputProps) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a valid website URL",
        variant: "destructive",
      });
      return;
    }

    let processedUrl = url;
    
    // Add https:// if no protocol is specified
    if (!/^https?:\/\//i.test(processedUrl)) {
      processedUrl = `https://${processedUrl}`;
    }
    
    setIsLoading(true);
    
    // Simulate checking URL validity
    setTimeout(() => {
      setIsLoading(false);
      onSubmit(processedUrl);
    }, 500);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "w-full max-w-2xl mx-auto relative group",
        className
      )}
    >
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Enter website URL (e.g., example.com)"
          value={url}
          onChange={handleChange}
          className="pl-4 pr-36 py-6 h-16 text-base rounded-xl border-muted bg-secondary/50 transition-all 
                    focus:ring-2 focus:ring-primary/20 focus:border-primary/40 shadow-sm"
        />
        <Button 
          type="submit"
          disabled={isLoading}
          className="absolute right-1.5 h-12 px-6 transition-all bg-primary hover:bg-primary/90 
                    active:scale-95 rounded-lg font-medium text-sm"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </span>
          ) : (
            "Load Website"
          )}
        </Button>
      </div>
      <div className="mt-2 text-xs text-muted-foreground text-center">
        Enter any website URL to view it in a secure iframe
      </div>
    </form>
  );
}
