
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface CodeInputProps {
  onExplain: (code: string, level: 'beginner' | 'advanced') => void;
  isLoading: boolean;
}

const CodeInput: React.FC<CodeInputProps> = ({ onExplain, isLoading }) => {
  const [code, setCode] = useState('');
  const [level, setLevel] = useState<'beginner' | 'advanced'>('beginner');
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!code.trim()) {
      toast({
        title: "Empty code input",
        description: "Please enter code to explain.",
        variant: "destructive",
      });
      return;
    }
    
    onExplain(code, level);
  };

  return (
    <Card className="bg-card border-border shadow-xl">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="code-input" className="text-sm font-medium mb-2 block">
              Paste your code snippet
            </Label>
            <Textarea
              id="code-input"
              className="code-editor h-64 font-mono bg-code text-code-foreground resize-y"
              placeholder="// Paste your code here..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="explanation-level"
                checked={level === 'advanced'}
                onCheckedChange={(checked) => setLevel(checked ? 'advanced' : 'beginner')}
              />
              <Label htmlFor="explanation-level" className="cursor-pointer">
                {level === 'beginner' ? 'Beginner' : 'Advanced'} explanation
              </Label>
            </div>

            <Button 
              onClick={handleSubmit} 
              disabled={isLoading} 
              className="relative"
            >
              {isLoading ? (
                <>
                  <span className="opacity-0">Explain Code</span>
                  <span className="absolute inset-0 flex items-center justify-center animate-pulse">
                    Processing...
                  </span>
                </>
              ) : (
                "Explain Code"
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeInput;
