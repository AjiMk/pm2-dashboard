import { LogViewer } from '@/components/LogViewer';
import { LogFilters } from '@/components/LogFilters';

export default function LogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Logs</h1>
          <p className="text-gray-600 dark:text-gray-300">View and analyze process logs</p>
        </div>
        <LogFilters />
      </div>
      
      <LogViewer />
    </div>
  );
}
