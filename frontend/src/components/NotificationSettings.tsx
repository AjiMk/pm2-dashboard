'use client';

import { useState } from 'react';
import { Bell, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    processStatus: {
      started: true,
      stopped: true,
      restarted: true,
      crashed: true,
    },
    systemAlerts: {
      highCpu: true,
      highMemory: true,
      diskSpace: true,
      networkIssues: false,
    },
    performance: {
      slowResponse: true,
      highLatency: false,
      errorSpike: true,
    },
    maintenance: {
      updates: true,
      backups: false,
      scheduledTasks: true,
    }
  });

  const handleToggle = (category: keyof typeof notifications, setting: string) => {
    setNotifications(prev => {
      const categoryData = prev[category] as Record<string, boolean>;
      return {
        ...prev,
        [category]: {
          ...categoryData,
          [setting]: !categoryData[setting]
        }
      };
    });
  };

  const handleSave = () => {
    console.log('Saving notification settings:', notifications);
    // Here you would integrate with your backend API
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Notification Settings</h3>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Process Status Notifications */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
            Process Status
          </h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Process started</span>
              <input
                type="checkbox"
                checked={notifications.processStatus.started}
                onChange={() => handleToggle('processStatus', 'started')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Process stopped</span>
              <input
                type="checkbox"
                checked={notifications.processStatus.stopped}
                onChange={() => handleToggle('processStatus', 'stopped')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Process restarted</span>
              <input
                type="checkbox"
                checked={notifications.processStatus.restarted}
                onChange={() => handleToggle('processStatus', 'restarted')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Process crashed</span>
              <input
                type="checkbox"
                checked={notifications.processStatus.crashed}
                onChange={() => handleToggle('processStatus', 'crashed')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>

        {/* System Alerts */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
            System Alerts
          </h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">High CPU usage (&gt;80%)</span>
              <input
                type="checkbox"
                checked={notifications.systemAlerts.highCpu}
                onChange={() => handleToggle('systemAlerts', 'highCpu')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">High memory usage (&gt;90%)</span>
              <input
                type="checkbox"
                checked={notifications.systemAlerts.highMemory}
                onChange={() => handleToggle('systemAlerts', 'highMemory')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Low disk space (&lt;10%)</span>
              <input
                type="checkbox"
                checked={notifications.systemAlerts.diskSpace}
                onChange={() => handleToggle('systemAlerts', 'diskSpace')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Network connectivity issues</span>
              <input
                type="checkbox"
                checked={notifications.systemAlerts.networkIssues}
                onChange={() => handleToggle('systemAlerts', 'networkIssues')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>

        {/* Performance Notifications */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <Info className="h-4 w-4 mr-2 text-blue-600" />
            Performance
          </h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Slow response times (&gt;2s)</span>
              <input
                type="checkbox"
                checked={notifications.performance.slowResponse}
                onChange={() => handleToggle('performance', 'slowResponse')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">High latency spikes</span>
              <input
                type="checkbox"
                checked={notifications.performance.highLatency}
                onChange={() => handleToggle('performance', 'highLatency')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Error rate spikes</span>
              <input
                type="checkbox"
                checked={notifications.performance.errorSpike}
                onChange={() => handleToggle('performance', 'errorSpike')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>

        {/* Maintenance Notifications */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <Bell className="h-4 w-4 mr-2 text-purple-600" />
            Maintenance
          </h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">System updates available</span>
              <input
                type="checkbox"
                checked={notifications.maintenance.updates}
                onChange={() => handleToggle('maintenance', 'updates')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Backup completion</span>
              <input
                type="checkbox"
                checked={notifications.maintenance.backups}
                onChange={() => handleToggle('maintenance', 'backups')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Scheduled task execution</span>
              <input
                type="checkbox"
                checked={notifications.maintenance.scheduledTasks}
                onChange={() => handleToggle('maintenance', 'scheduledTasks')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Notification Settings
          </button>
        </div>
      </div>
    </div>
  );
}
