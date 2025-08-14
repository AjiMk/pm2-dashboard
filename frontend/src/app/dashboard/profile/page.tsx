import { ProfileForm } from '@/components/ProfileForm';
import { SecuritySettings } from '@/components/SecuritySettings';
import { ActivityLog } from '@/components/ActivityLog';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <p className="text-gray-600 dark:text-gray-300">Manage your account and personal information</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileForm />
        <SecuritySettings />
      </div>
      
      <ActivityLog />
    </div>
  );
}
