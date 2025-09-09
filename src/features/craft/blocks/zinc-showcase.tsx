"use client";

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
                  className={`w-full h-16 rounded-lg border ${shade.class} ${shade.darkClass} mb-2`}
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

export default ZincShowcase;
