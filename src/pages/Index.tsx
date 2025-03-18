
import { useState } from 'react';
import { Header } from '@/components/Header';
import { UrlInput } from '@/components/UrlInput';
import { WebView } from '@/components/WebView';
import { InfoSection } from '@/components/InfoSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [url, setUrl] = useState<string | null>(null);

  const handleSubmit = (submittedUrl: string) => {
    setUrl(submittedUrl);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
        <section className="container mb-12">
          <div className="text-center mb-8 md:mb-14 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              Web Portal Viewer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-slide-down">
              View any website <span className="text-primary">within this page</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-down" style={{ animationDelay: '100ms' }}>
              Simply enter a URL below to load it in a secure iframe environment
            </p>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
            <UrlInput onSubmit={handleSubmit} />
          </div>
          
          {url && (
            <div className="mt-10 h-[calc(100vh-400px)] min-h-[500px] animate-fade-in" style={{ animationDelay: '300ms' }}>
              <WebView url={url} />
            </div>
          )}
        </section>
        
        {!url && <InfoSection />}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
