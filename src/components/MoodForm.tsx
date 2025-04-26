
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from "lucide-react";

interface MoodFormProps {
  onSubmit: (mood: string, personality: string, preferences: string) => void;
}

const MoodForm = ({ onSubmit }: MoodFormProps) => {
  const [mood, setMood] = useState("");
  const [personality, setPersonality] = useState("");
  const [preferences, setPreferences] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(mood, personality, preferences);
  };

  return (
    <Card className="w-full max-w-md shadow-md border-none bg-white/90 backdrop-blur-sm">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold text-heartfelt-text">Share Your Heart</CardTitle>
        <CardDescription className="text-heartfelt-text/80">
          Tell us how you're feeling for a personalized affirmation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mood" className="text-heartfelt-text">
              Current Mood
            </Label>
            <Input
              id="mood"
              placeholder="How are you feeling right now? (e.g., anxious, joyful, tired)"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              required
              className="bg-heartfelt-lavender/20 border-heartfelt-lavender/40 focus:border-heartfelt-lavender"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="personality" className="text-heartfelt-text">
              Personality Traits
            </Label>
            <Input
              id="personality"
              placeholder="How would you describe yourself? (e.g., thoughtful, ambitious, creative)"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              required
              className="bg-heartfelt-pink/20 border-heartfelt-pink/40 focus:border-heartfelt-pink"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="preferences" className="text-heartfelt-text">
              Preferences
            </Label>
            <Textarea
              id="preferences"
              placeholder="What kind of language or themes do you prefer? (e.g., nature imagery, poetic language, direct communication)"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              required
              className="bg-heartfelt-blue/20 border-heartfelt-blue/40 focus:border-heartfelt-blue resize-none min-h-[100px]"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-heartfelt-lavender via-heartfelt-pink to-heartfelt-blue text-heartfelt-text hover:opacity-90 transition-opacity"
          >
            <Heart className="mr-2 h-4 w-4" />
            Generate Affirmation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MoodForm;
