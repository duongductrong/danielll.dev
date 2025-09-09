import dynamic from "next/dynamic";

const HelloWorld = dynamic(() => import("./blocks/hello-world"));
const AnimatedButton = dynamic(() => import("./blocks/animated-button"));
const GradientCard = dynamic(() => import("./blocks/gradient-card"));
const LoadingSpinner = dynamic(() => import("./blocks/loading-spinner"));
const InteractiveForm = dynamic(() => import("./blocks/interactive-form"));
const ZincShowcase = dynamic(() => import("./blocks/zinc-showcase"));

export const registryPreviewComponents = {
  helloWorld: HelloWorld,
  animatedButton: AnimatedButton,
  gradientCard: GradientCard,
  loadingSpinner: LoadingSpinner,
  interactiveForm: InteractiveForm,
  zincShowcase: ZincShowcase,
};

// Export component source code for the code viewer
export const registrySourceCode: Record<string, string> = {
  helloWorld: `const HelloWorld = () => {
  return <div>Hello, world! 🌍</div>;
};

export default HelloWorld;`,
  
  animatedButton: `"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const AnimatedButton = () => {
  return (
    <div className="space-y-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button className="bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600 text-zinc-50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="size-4 mr-2" />
          </motion.div>
          Animated Button
        </Button>
      </motion.div>
    </div>
  );
};

export default AnimatedButton;`,

  gradientCard: `"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

const GradientCard = () => {
  return (
    <div className="max-w-sm mx-auto">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-zinc-50 to-zinc-100 border-zinc-200 hover:shadow-xl transition-shadow dark:from-zinc-900 dark:to-zinc-800 dark:border-zinc-700">
          <CardHeader>
            <CardTitle className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">
              Gradient Card
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A beautiful card with gradient background and hover animations.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GradientCard;`,

  loadingSpinner: `"use client";

import { motion } from "motion/react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center space-x-8">
      {/* Spinning Circle */}
      <motion.div
        className="w-8 h-8 border-4 border-zinc-200 border-t-zinc-900 rounded-full dark:border-zinc-700 dark:border-t-zinc-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Bouncing Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-zinc-900 rounded-full dark:bg-zinc-100"
            animate={{ y: [-10, 0, -10] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Pulsing Circle */}
      <motion.div
        className="w-8 h-8 bg-zinc-900 rounded-full dark:bg-zinc-100"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
};

export default LoadingSpinner;`,

  interactiveForm: `"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const InteractiveForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Subscribe to Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="size-12 text-zinc-900 mx-auto mb-4 dark:text-zinc-100" />
              <p className="text-zinc-900 font-medium dark:text-zinc-100">Thank you for subscribing!</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveForm;`,

  zincShowcase: `"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Palette, Star, Heart } from "lucide-react";

const ZincShowcase = () => {
  const zincShades = [
    { name: "zinc-50", class: "bg-zinc-50", darkClass: "dark:bg-zinc-900" },
    { name: "zinc-100", class: "bg-zinc-100", darkClass: "dark:bg-zinc-800" },
    { name: "zinc-200", class: "bg-zinc-200", darkClass: "dark:bg-zinc-700" },
    { name: "zinc-300", class: "bg-zinc-300", darkClass: "dark:bg-zinc-600" },
    { name: "zinc-400", class: "bg-zinc-400", darkClass: "dark:bg-zinc-500" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Palette className="size-5" />
            Zinc Theme Showcase
          </CardTitle>
          <CardDescription>
            Exploring the beautiful zinc color palette from shadcn/ui
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Color Palette</CardTitle>
          <CardDescription>Zinc shades with dark mode support</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {zincShades.map((shade, index) => (
              <motion.div
                key={shade.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className={\`w-full h-16 rounded-lg border \${shade.class} \${shade.darkClass} mb-2\`}
                />
                <p className="text-xs text-muted-foreground">{shade.name}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Buttons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full">Primary Button</Button>
            <Button variant="secondary" className="w-full">Secondary Button</Button>
            <Button variant="outline" className="w-full">Outline Button</Button>
            <Button variant="ghost" className="w-full">Ghost Button</Button>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Interactive Elements</CardTitle>
          <CardDescription>Hover and click to see zinc theme in action</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer text-center"
            >
              <Heart className="size-6 mx-auto mb-2 text-zinc-600 dark:text-zinc-400" />
              <p className="text-sm">Hover me</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer text-center"
            >
              <Star className="size-6 mx-auto mb-2 text-zinc-600 dark:text-zinc-400" />
              <p className="text-sm">Click me</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg cursor-pointer text-center"
            >
              <Palette className="size-6 mx-auto mb-2 text-zinc-600 dark:text-zinc-400" />
              <p className="text-sm">Touch me</p>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ZincShowcase;`
};
