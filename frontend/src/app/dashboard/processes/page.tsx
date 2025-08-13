import { ProcessList } from '@/components/ProcessList';
import { ProcessActions } from '@/components/ProcessActions';

export default function ProcessesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Processes</h1>
          <p className="text-gray-600">Manage and monitor your PM2 processes</p>
        </div>
        <ProcessActions />
      </div>
      
      <ProcessList />
    </div>
  );
}
