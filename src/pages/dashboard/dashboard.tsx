import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

type Notification = {
  title: string;
  message: string;
}

export function Dashboard() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  function raise() {
    setNotifications([...notifications, {
      title: "Notification",
      message: `This is notification #${notifications.length}`
    }])
  }

  return (
    <>
      <div className="rounded-xl bg-muted/50">
        {notifications.map(({ title, message }) => (
          <Alert className="mb-2">
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
              {message}
            </AlertDescription>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </Alert>
        ))
      }

      </div>
      <div className="flex-1 rounded-xl bg-muted/50">
        <Button onClick={raise}>Raise notification</Button>
      </div>
    </>
  );
}

export default Dashboard;
