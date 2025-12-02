// Libraries Imports
import { useEffect, useState } from "react";
import { Gpu } from "lucide-react";
// Local Imports
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    setIsInstalled(isStandalone);

    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("🔔 Install prompt available");
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener("appinstalled", () => {
      console.log("🎉 PWA was installed");
      setIsInstalled(true);
      setIsVisible(false);
    });

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.log("❌ No deferred prompt available");
      return;
    }

    try {
      console.log("🔄 Showing install prompt...");
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      console.log(`📝 User response: ${outcome}`);

      if (outcome === "accepted") {
        console.log("✅ User accepted the install prompt");
      } else {
        console.log("❌ User dismissed the install prompt");
      }
    } catch (error) {
      console.error("💥 Error during installation:", error);
    } finally {
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  if (isInstalled || !isVisible || !deferredPrompt) {
    return null;
  }

  return (
    <>
      <Button
        onClick={handleInstallClick}
        variant="outline"
        size="lg"
        className="rounded-full border cursor-pointer border-blue-600 px-6 py-3 text-lg font-semibold text-blue-600
          hover:bg-blue-600 hover:text-white transition shadow-lg bg-white"
      >
        <Gpu size={16} className="mr-2" />
        Install App
      </Button>
    </>
  );
}
