
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Copy, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

interface ComplimentDisplayProps {
  compliment: string;
  onSave: (compliment: string) => void;
}

const ComplimentDisplay = ({ compliment, onSave }: ComplimentDisplayProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(compliment);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Your affirmation has been copied to your clipboard.",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    onSave(compliment);
    toast({
      title: "Affirmation saved",
      description: "Your affirmation has been saved to your collection.",
    });
  };

  return (
    <div className="w-full max-w-md animate-fade-in">
      <Card className="border-none shadow-lg bg-gradient-to-br from-heartfelt-lavender/40 via-white to-heartfelt-pink/40 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="mb-6">
            <p className="compliment-text text-xl text-center text-heartfelt-text leading-relaxed">
              {compliment}
            </p>
          </div>
          
          <div className="flex gap-2 justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopy}
                    className="border-heartfelt-teal/50 hover:bg-heartfelt-teal/20 text-heartfelt-text"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{copied ? "Copied!" : "Copy to clipboard"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <Button
              variant="outline"
              onClick={handleSave}
              className="border-heartfelt-darkpink/50 hover:bg-heartfelt-darkpink/20 text-heartfelt-text flex items-center gap-1"
            >
              <Heart className="h-4 w-4" />
              <span>Save this affirmation</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplimentDisplay;
