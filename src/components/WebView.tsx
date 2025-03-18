import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
interface WebViewProps {
  url: string;
  className?: string;
}
export function WebView({
  url,
  className
}: WebViewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    setIsLoading(true);
    setLoadError(false);

    // Reset iframe load status when URL changes
    const timeout = setTimeout(() => {
      if (isLoading) {
        setLoadError(true);
        setIsLoading(false);
        toast({
          title: "Loading Error",
          description: "The website could not be loaded. It may be blocking iframe embedding.",
          variant: "destructive"
        });
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [url]);
  const handleIframeLoad = () => {
    setIsLoading(false);
  };
  const handleIframeError = () => {
    setIsLoading(false);
    setLoadError(true);
    toast({
      title: "Loading Error",
      description: "The website could not be loaded. It may be blocking iframe embedding.",
      variant: "destructive"
    });
  };
  const reloadIframe = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      setLoadError(false);
      iframeRef.current.src = url;
    }
  };
  return <div className={cn("relative w-full h-full rounded-xl border overflow-hidden bg-secondary/30", className)}>
      {/* Loading overlay */}
      {isLoading && <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary z-10">
          <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mb-4"></div>
          <p className="text-muted-foreground animate-pulse">Loading website...</p>
        </div>}
      
      {/* Error overlay */}
      {loadError && <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary z-10 rounded-xl">
          <div className="rounded-full p-4 bg-destructive/10 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-destructive">
              <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Unable to load website</h3>
          <p className="text-muted-foreground text-center max-w-md mb-4">
            This website may not allow embedding in iframes due to security settings.
          </p>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={reloadIframe}>
              Try Again
            </Button>
            <Button onClick={() => window.open(url, '_blank')}>
              Open in New Tab
            </Button>
          </div>
        </div>}
      
      {/* URL bar */}
      <div className="flex items-center space-x-2 p-2 border-b bg-secondary">
        <div className="flex items-center space-x-1.5">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={reloadIframe}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3701 7.99993L13.8701 7.99993M18.3701 7.99993L18.3701 3.49993M18.3701 7.99993L14.1438 12.2263C13.1511 13.219 11.8274 13.7778 10.4437 13.7778C9.06006 13.7778 7.73635 13.219 6.74367 12.2263C5.75098 11.2336 5.19217 9.90989 5.19217 8.52622C5.19217 7.14255 5.75098 5.81884 6.74367 4.82616C7.73635 3.83347 9.06006 3.27466 10.4437 3.27466C11.8274 3.27466 13.1511 3.83347 14.1438 4.82616L18.3701 8.99993" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3.5 21H4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7.5 21H8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Button>
        </div>
        <div className="flex-1 bg-background rounded-md px-3 py-1.5 text-sm text-muted-foreground overflow-hidden whitespace-nowrap overflow-ellipsis select-all">
          {url}
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => window.open(url, '_blank')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V12M12 6L20 6M12 6V4M20 6V8M20 6L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </div>
      
      {/* Iframe */}
      <iframe ref={iframeRef} src={url} title="Web Portal Viewer" className="w-full h-[calc(100%-40px)]" onLoad={handleIframeLoad} onError={handleIframeError} sandbox="allow-same-origin allow-scripts allow-popups allow-forms" />
    </div>;
}