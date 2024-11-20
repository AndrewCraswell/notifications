export type Notification = {
  id: string;
  message: string
};

export type RaisedNotification = Partial<Notification> & {
  message: string
};

export class NotificationService {
  private static notifications: Notification[] = [];

  static raise(notification: RaisedNotification) {
    const newNotification: Notification = {
      id: crypto.randomUUID(),
      ...notification
    };

    this.notifications = [...this.notifications, newNotification];
  }

  static dismiss(notificationId: string) {
    this.notifications = this.notifications.filter((notification) => notification.id !== notificationId);
  }

  static getAll(): Notification[] {
    return this.notifications;
  }
}
