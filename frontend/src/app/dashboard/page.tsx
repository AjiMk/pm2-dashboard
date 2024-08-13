import { DashboardOverview } from '@/components/DashboardOverview';
import { ProcessList } from '@/components/ProcessList';
import { SystemMetrics } from '@/components/SystemMetrics';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor your PM2 processes and system performance</p>
      </div>

      <DashboardOverview />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProcessList />
        <SystemMetrics />
      </div>
    </div>
  );
}
