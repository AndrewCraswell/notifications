import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useGetRouteName } from '@/hooks/use-get-route-name';
import { NotificationService } from '@/notification-service';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Bell } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function TopBar() {
  const routeName = useGetRouteName();

  const [isOpen, setIsOpen] = useState(false)

  const notifications = NotificationService.getAll()

  return (
    <header className="flex h-16 items-center gap-2 border-b">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>{routeName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex-1" />
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 relative"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-80 p-0 z-50" align="end">
            <Card className="border shadow">
              <CardHeader className="border-b p-4">
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <ScrollArea>
                <CardContent className="p-0">
                  <ul className="divide-y divide-border">
                    {notifications.length === 0 && (
                      <p className="text-xs text-muted-foreground p-4">
                        No notifications yet
                      </p>
                    )}

                    {notifications.length > 0 && (
                      <>
                        {notifications.map(({ id, message }) => (
                          <li key={id} className="p-4 hover:bg-accent">
                            <div className="flex items-start gap-4">
                              <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                              <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                  Notification
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {message}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Today
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </>
                    )}


                  </ul>
                </CardContent>
              </ScrollArea>
            </Card>
          </PopoverContent>
        </Popover>
      </div>

    </header>
  );
}
