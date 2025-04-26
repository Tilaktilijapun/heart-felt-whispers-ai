
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface SavedComplimentsProps {
  compliments: string[];
  onRemove: (index: number) => void;
}

const SavedCompliments = ({ compliments, onRemove }: SavedComplimentsProps) => {
  if (compliments.length === 0) {
    return null;
  }

  return (
    <Card className="w-full max-w-md shadow-md border-none bg-white/90 backdrop-blur-sm animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-heartfelt-text">Your Saved Affirmations</CardTitle>
        <CardDescription className="text-heartfelt-text/80">
          Revisit these whenever you need a boost
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {compliments.map((compliment, index) => (
              <div 
                key={index} 
                className="p-4 rounded-md bg-gradient-to-r from-heartfelt-beige/40 to-heartfelt-lavender/20 relative group card-hover"
              >
                <p className="compliment-text text-heartfelt-text pr-8">{compliment}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(index)}
                  className="absolute top-2 right-2 opacity-30 group-hover:opacity-100 transition-opacity text-heartfelt-text hover:bg-red-100 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SavedCompliments;
