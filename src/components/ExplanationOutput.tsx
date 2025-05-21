
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from 'react-markdown';

interface ExplanationOutputProps {
  explanation: string | null;
  error: string | null;
  level: 'beginner' | 'advanced';
  isLoading?: boolean;
}

const ExplanationOutput: React.FC<ExplanationOutputProps> = ({ explanation, error, level, isLoading = false }) => {
  if (isLoading) {
    return (
      <Card className="mt-6 bg-card border-border shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-7 w-56" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <div className="mt-4 space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[95%]" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[85%]" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mt-4">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!explanation) {
    return null;
  }

  return (
    <Card className="mt-6 bg-card border-border shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {level === 'beginner' ? 'Beginner-Friendly' : 'Advanced'} Explanation
            </h2>
            <div className="bg-primary px-2 py-1 rounded-full text-xs font-medium text-primary-foreground">
              {level === 'beginner' ? 'Simple terms' : 'Technical'}
            </div>
          </div>
          <div className="explanation-container mt-4 text-foreground leading-relaxed prose prose-invert max-w-none">
            <ReactMarkdown>
              {explanation}
            </ReactMarkdown>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExplanationOutput;
