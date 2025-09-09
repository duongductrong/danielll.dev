"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeSpot } from "./codespot";
import { CodeBlock } from "./code-block";
import { Eye, Code, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface PreviewTabsProps {
  component: React.ComponentType;
  code?: string;
  filename?: string;
}

export const PreviewTabs = ({ 
  component: Component, 
  code,
  filename = "component.tsx"
}: PreviewTabsProps) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview" className="flex items-center gap-2">
            <Eye className="size-4" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code className="size-4" />
            Code
          </TabsTrigger>
        </TabsList>

        {activeTab === "preview" && (
          <div className="mt-6 space-y-4">
            {/* Preview Mode Switcher */}
            <div className="flex items-center gap-2">
              <Button
                variant={previewMode === "desktop" ? "default" : "outline"}
                size="sm"
                onClick={() => setPreviewMode("desktop")}
              >
                <Monitor className="size-4 mr-2" />
                Desktop
              </Button>
              <Button
                variant={previewMode === "mobile" ? "default" : "outline"}
                size="sm"
                onClick={() => setPreviewMode("mobile")}
              >
                <Smartphone className="size-4 mr-2" />
                Mobile
              </Button>
            </div>

            {/* Preview Container */}
            <div 
              className={cn(
                "mx-auto transition-all duration-300",
                previewMode === "mobile" ? "max-w-sm" : "max-w-4xl"
              )}
            >
              <CodeSpot>
                <Component />
              </CodeSpot>
            </div>
          </div>
        )}

        {activeTab === "code" && (
          <div className="mt-6">
            {code ? (
              <CodeBlock 
                code={code} 
                filename={filename}
                language="tsx"
              />
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Code className="size-8 mx-auto mb-2" />
                <p>Source code not available for this component</p>
              </div>
            )}
          </div>
        )}
      </Tabs>
    </div>
  );
};
