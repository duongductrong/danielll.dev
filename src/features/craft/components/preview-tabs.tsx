"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Code, Eye } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "./code-block";
import { CodeSpot } from "./codespot";

export interface PreviewTabsProps {
  component: React.ComponentType;
  code?: string;
  filename?: string;
}

export const PreviewTabs = ({
  component: Component,
  code,
  filename = "component.tsx",
}: PreviewTabsProps) => {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-end">
          <TabsList>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="size-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="size-4" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        {activeTab === "preview" && (
          <div className="space-y-4 mt-2">
            <div
              className={cn("relative", "mx-auto transition-all duration-300")}
            >
              <CodeSpot>
                <Component />
              </CodeSpot>
            </div>
          </div>
        )}

        {activeTab === "code" && (
          <div className="mt-2">
            {code ? (
              <CodeBlock code={code} filename={filename} language="tsx" />
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
