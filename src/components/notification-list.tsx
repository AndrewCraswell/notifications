import { NotificationService } from "@/notification-service";
import { Notification } from "./notification";

export function NotificationList() {
    const notifications = NotificationService.getAll();

    return (
        <>{notifications.map(({ id, message }) => (
            <Notification key={id}>
                {message}
            </Notification>
        ))}</>
    )
}
