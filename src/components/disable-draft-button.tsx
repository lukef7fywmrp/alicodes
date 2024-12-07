"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useState } from "react";

export function DisableDraftButton() {
  const router = useRouter();
  const environment = useDraftModeEnvironment();
  const [isLoading, setIsLoading] = useState(false);

  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/disable-draft");
      if (response.ok) {
        router.refresh();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={handleClick}
        variant="default"
        className="rounded-lg bg-foreground text-background px-3 py-1 text-sm"
        disabled={isLoading}
      >
        {isLoading ? "Disabling..." : "Disable Draft Mode"}
      </Button>
    </div>
  );
}
