import { Card, CardContent, CardHeader, CardTitle } from "./card";

export function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <Card className="bg-white shadow-sm dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 dark:text-gray-300">
        {children}
      </CardContent>
    </Card>
  )
}