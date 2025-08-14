import { UserSettings } from '@/components/UserSettings';
import { NotificationSettings } from '@/components/NotificationSettings';
import { DashboardSettings } from '@/components/DashboardSettings';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-300">Manage your preferences and dashboard configuration</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserSettings />
        <NotificationSettings />
      </div>
      
      <DashboardSettings />
    </div>
  );
}
