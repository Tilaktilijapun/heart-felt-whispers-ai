
import { useState, useEffect } from "react";
import MoodForm from "@/components/MoodForm";
import ComplimentDisplay from "@/components/ComplimentDisplay";
import SavedCompliments from "@/components/SavedCompliments";
import generateCompliment from "@/utils/complimentGenerator";
import { useToast } from "@/components/ui/use-toast";
import { Heart } from "lucide-react";

const Index = () => {
  const [compliment, setCompliment] = useState<string | null>(null);
  const [savedCompliments, setSavedCompliments] = useState<string[]>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { toast } = useToast();

  // Load saved compliments from local storage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem("heartfeltCompliments");
    if (savedItems) {
      try {
        setSavedCompliments(JSON.parse(savedItems));
      } catch (e) {
        console.error("Could not parse saved compliments:", e);
      }
    }
    setIsFirstRender(false);
  }, []);

  // Save compliments to local storage when they change
  useEffect(() => {
    if (!isFirstRender) {
      localStorage.setItem("heartfeltCompliments", JSON.stringify(savedCompliments));
    }
  }, [savedCompliments, isFirstRender]);

  const handleFormSubmit = (mood: string, personality: string, preferences: string) => {
    if (!mood || !personality || !preferences) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to generate an affirmation.",
        variant: "destructive"
      });
      return;
    }

    // Generate the compliment
    const generatedCompliment = generateCompliment(mood, personality, preferences);
    setCompliment(generatedCompliment);
  };

  const handleSaveCompliment = (complimentToSave: string) => {
    if (!savedCompliments.includes(complimentToSave)) {
      setSavedCompliments(prev => [complimentToSave, ...prev]);
    }
  };

  const handleRemoveCompliment = (index: number) => {
    setSavedCompliments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen w-full gradient-bg py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-2 animate-pulse-soft">
            <Heart className="h-8 w-8 text-heartfelt-darkpink fill-heartfelt-pink mr-2" />
            <h1 className="text-4xl font-semibold text-heartfelt-text">Heart-Felt Whispers</h1>
          </div>
          <p className="text-lg text-heartfelt-text/80 max-w-lg mx-auto">
            Let our AI craft personalized affirmations based on your mood, personality, and preferences.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center space-y-8">
            <MoodForm onSubmit={handleFormSubmit} />
            
            {savedCompliments.length > 0 && (
              <SavedCompliments 
                compliments={savedCompliments} 
                onRemove={handleRemoveCompliment} 
              />
            )}
          </div>
          
          <div className="flex flex-col items-center justify-start">
            {compliment ? (
              <ComplimentDisplay 
                compliment={compliment} 
                onSave={handleSaveCompliment} 
              />
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 rounded-lg bg-white/30 backdrop-blur-sm w-full max-w-md">
                <Heart className="h-16 w-16 text-heartfelt-pink opacity-50 mb-4" />
                <p className="text-heartfelt-text/70">
                  Fill in the form to receive your personalized affirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
