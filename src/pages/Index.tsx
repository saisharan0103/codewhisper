import React, { useState } from 'react';
import CodeInput from '@/components/CodeInput';
import ExplanationOutput from '@/components/ExplanationOutput';
import { explainCode } from '@/services/explainerService';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [level, setLevel] = useState<'beginner' | 'advanced'>('beginner');
  const { toast } = useToast();

  const handleExplain = async (code: string, explainLevel: 'beginner' | 'advanced') => {
    setIsLoading(true);
    setError(null);
    setLevel(explainLevel);
    
    try {
      const result = await explainCode(code, explainLevel);
      setExplanation(result);
      toast({
        title: "Explanation generated",
        description: "Your code has been successfully analyzed.",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Explanation could not be generated. Please try again.');
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : 'Failed to generate explanation',
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Code Explainer
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Paste your code snippet and get an easy-to-understand explanation.
          </p>
        </header>
        
        <main className="space-y-6">
          <CodeInput onExplain={handleExplain} isLoading={isLoading} />
          <ExplanationOutput 
            explanation={explanation} 
            error={error} 
            level={level}
            isLoading={isLoading}
          />
        </main>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Get straightforward explanations for complex code.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
