import { NotificationList } from "@/components/notification-list";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { NotificationService } from "@/notification-service";

export function Problem() {
  return (
    <>
      <div>
        <NotificationList />
        <Button onClick={() => NotificationService.raise({ message: "New notification raised from the [Problem] page" })} className="mt-4">Raise notification</Button>
      </div>
      <div className="flex-1">
        <div className="space-y-4">
          <Section title="Problem Description">
            <p className="mb-4">
              Our app uses a <code>NotificationService</code> class to manage a global list of notifications.
              Each page includes a <strong>Raise Notification</strong> button that calls this service to add
              a new notification. All active notifications are shown in a notification menu in the top-right
              corner.
            </p>

            <p>
              Currently, notifications are stored outside of React state. As a result, the UI does not
              automatically re-render when notifications are added or dismissed. We need to update the app so
              that any component subscribing to notifications re-renders whenever the notification list
              changes.
            </p>
          </Section>

          <Section title="Requirements">
            <ol className="list-decimal list-inside space-y-2">
              <li>The notifications menu should always list all active notifications.</li>
              <li>
                When a notification is raised or dismissed, any subscribed components should re-render to
                reflect the updated notification list.
              </li>
            </ol>
          </Section>
        </div>
      </div>
    </>
  );
}
