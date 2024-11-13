import { NotificationList } from "@/components/notification-list";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { NotificationService } from "@/notification-service";

export function Problem() {
  return (
    <>
      <div>
        <NotificationList />
        <Button onClick={() => NotificationService.raise({ message: "New [Problem] page notification" })} className="mt-4">Raise notification</Button>
      </div>
      <div className="flex-1">
        <div className="space-y-4">
          <Section title="Problem Description">
            <p className="mb-4">Our app uses a NotificationService class to manage a list of notifications. Each page has a "Raise Notification" button that calls this service to add a new notification. All notifications are displayed in a notification menu in the top-right corner.</p>

            <p>Since the notification list is maintained outside of React state, the app does not automatically re-render when notifications are added or removed. We need to update this so that components subscribing to notifications re-render whenever the notification list changes.</p>
          </Section>

          <Section title="Requirements">
            <ol className="list-decimal list-inside space-y-2">
              <li>The notifications menu should always list all notifications.</li>
              <li>Each page should display only the notifications that were raised from that page.</li>
              <li>When a notification is raised or dismissed, components subscribing to the notifications should re-render to show the updated notification list.</li>
            </ol>
          </Section>

          <Section title="Challenges">
            <ol className="list-decimal list-inside space-y-2">
              <li>Ensure 4px spacing between each notification, with no extra spacing above or below the list.</li>
              <li>Implement a dismissal feature: clicking the "X" button on a notification should remove it.</li>
              <li>Display a red indicator on the notification menu only if there is at least one active notification.</li>
            </ol>
          </Section>
        </div>
      </div>
    </>
  );
}
