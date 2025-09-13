"use client";

import Container from "@/components/ui/container";
import { PenCard } from "@/features/folio/components/pen-card";
import { allPens } from "content-collections";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  { id: "all", label: "All", icon: Code2 },
  { id: "components", label: "Components", icon: Palette },
  { id: "animations", label: "Animations", icon: Zap },
  { id: "layouts", label: "Layouts", icon: Sparkles },
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPens = useMemo(() => {
    return allPens.filter((pen) => {
      const matchesSearch =
        pen.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pen.summary.toLowerCase().includes(searchQuery.toLowerCase());

      // For now, we'll show all pens regardless of category since we don't have categories in the schema yet
      const matchesCategory = selectedCategory === "all";

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Container>
      {/* <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent"
        >
          ✨ Craft
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Interactive components, experiments, and code snippets. A playground
          where ideas come to life.
        </motion.p>
      </div> */}

      {/* <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            placeholder="Search pens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div> */}

      {/* Pens Grid */}
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {filteredPens.map((pen, index) => (
          <motion.div
            key={pen._meta.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/craft/${pen._meta.path}`}>
              <PenCard
                title={pen.title}
                date={pen.date.toISOString()}
                thumbnail={pen.thumbnail}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredPens.length === 0 && (
        <div className="text-center py-12">
          <Code2 className="size-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No pens found</h3>
          <p className="text-muted-foreground">
            {searchQuery
              ? "Try adjusting your search query"
              : "No pens available yet"}
          </p>
        </div>
      )}
    </Container>
  );
};

export default Page;
