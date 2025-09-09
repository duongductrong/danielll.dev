"use client";

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

export default InteractiveForm;
