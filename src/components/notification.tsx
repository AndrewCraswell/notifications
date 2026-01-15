import { X } from "lucide-react";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";

type NotificationProps = {
  children: React.ReactNode;
  onDismiss?: () => void
}

export function Notification({ children, onDismiss }: NotificationProps) {
  return (
    <Alert className="notification">
      <AlertTitle>Notification</AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
      <Button
        onClick={onDismiss}
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8 rounded-full"
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  )
}