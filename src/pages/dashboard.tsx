import { NotificationList } from "@/components/notification-list";
import { Button } from "@/components/ui/button";
import { NotificationService } from "@/notification-service";

export function Dashboard() {

  return (
    <div>
      <NotificationList />
      <Button onClick={() => {
        NotificationService.raise({ message: "New notification raised from the [Dashboard] page" });
      }} className="mt-4">Raise notification</Button>
    </div>
  );
}
