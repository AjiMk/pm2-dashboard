'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Play, Square, RotateCcw, Trash2, Eye, MoreHorizontal } from 'lucide-react';
import { getStatusColor, formatBytes, formatUptime } from '@/lib/utils';

const processes = [
  {
    id: 1,
    name: 'web-server',
    status: 'online',
    cpu: 2.5,
    memory: 128,
    uptime: 86400,
    instances: 2,
    pm_id: 0,
  },
  {
    id: 2,
    name: 'api-service',
    status: 'online',
    cpu: 1.8,
    memory: 96,
    uptime: 43200,
    instances: 1,
    pm_id: 1,
  },
  {
    id: 3,
    name: 'worker-queue',
    status: 'stopped',
    cpu: 0,
    memory: 0,
    uptime: 0,
    instances: 1,
    pm_id: 2,
  },
  {
    id: 4,
    name: 'monitoring',
    status: 'online',
    cpu: 0.5,
    memory: 32,
    uptime: 172800,
    instances: 1,
    pm_id: 3,
  },
];

export function ProcessList() {
  const [selectedProcess, setSelectedProcess] = useState<typeof processes[0] | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleAction = (action: string, process: typeof processes[0]) => {
    console.log(`${action} process:`, process.name);
    // TODO: Implement actual PM2 actions
  };

  const openDetails = (process: typeof processes[0]) => {
    setSelectedProcess(process);
    setShowDetails(true);
  };

  return (
    <>
      <Card className="overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Running Processes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Process
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  CPU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Memory
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Uptime
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {processes.map((process) => (
                <tr key={process.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{process.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">ID: {process.pm_id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(process.status)}`}>
                      {process.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {process.cpu.toFixed(1)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatBytes(process.memory * 1024 * 1024)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatUptime(process.uptime)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {process.status === 'stopped' ? (
                        <button
                          onClick={() => handleAction('start', process)}
                          className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300"
                          title="Start process"
                        >
                          <Play className="h-4 w-4" />
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => handleAction('stop', process)}
                            className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"
                            title="Stop process"
                          >
                            <Square className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleAction('restart', process)}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"
                            title="Restart process"
                          >
                            <RotateCcw className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => openDetails(process)}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                        title="View details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleAction('delete', process)}
                        className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                        title="Delete process"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Process Details Modal */}
      {showDetails && selectedProcess && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Process Details: {selectedProcess.name}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Status:</span>
                  <span className={`text-sm font-semibold ${getStatusColor(selectedProcess.status)}`}>
                    {selectedProcess.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">PM ID:</span>
                  <span className="text-sm text-gray-900 dark:text-white">{selectedProcess.pm_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Instances:</span>
                  <span className="text-sm text-gray-900 dark:text-white">{selectedProcess.instances}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">CPU Usage:</span>
                  <span className="text-sm text-gray-900 dark:text-white">{selectedProcess.cpu.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Memory Usage:</span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {formatBytes(selectedProcess.memory * 1024 * 1024)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Uptime:</span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {formatUptime(selectedProcess.uptime)}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
