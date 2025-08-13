'use client';

import { Card } from '@/components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Cpu, HardDrive, Network, Activity } from 'lucide-react';

const metrics = [
  { name: 'CPU Usage', value: '65%', icon: Cpu, color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-100 dark:bg-blue-900' },
  { name: 'Memory Usage', value: '2.4 GB', icon: HardDrive, color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-100 dark:bg-green-900' },
  { name: 'Disk Usage', value: '45%', icon: Activity, color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-100 dark:bg-purple-900' },
  { name: 'Network I/O', value: '125 MB/s', icon: Network, color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-100 dark:bg-orange-900' },
];

const performanceData = [
  { time: '00:00', cpu: 45, memory: 60, disk: 40, network: 80 },
  { time: '04:00', cpu: 52, memory: 65, disk: 42, network: 85 },
  { time: '08:00', cpu: 78, memory: 70, disk: 45, network: 120 },
  { time: '12:00', cpu: 85, memory: 75, disk: 48, network: 150 },
  { time: '16:00', cpu: 72, memory: 68, disk: 46, network: 110 },
  { time: '20:00', cpu: 65, memory: 62, disk: 44, network: 95 },
  { time: '23:59', cpu: 48, memory: 58, disk: 41, network: 70 },
];

const systemInfo = [
  { label: 'OS', value: 'Ubuntu 22.04 LTS' },
  { label: 'Kernel', value: '5.15.0-56-generic' },
  { label: 'Architecture', value: 'x86_64' },
  { label: 'Uptime', value: '7 days, 12 hours' },
  { label: 'Load Average', value: '1.25, 1.15, 1.05' },
  { label: 'Processes', value: '1,234' },
];

export function SystemMetrics() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">System Metrics</h3>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.name}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="mb-6">
        <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">Performance Over Time</h4>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" className="dark:stroke-gray-700" />
            <XAxis 
              dataKey="time" 
              stroke="#6B7280"
              tick={{ fill: '#6B7280' }}
              className="dark:stroke-gray-400 dark:text-gray-400"
            />
            <YAxis 
              stroke="#6B7280"
              tick={{ fill: '#6B7280' }}
              className="dark:stroke-gray-400 dark:text-gray-400"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                color: '#374151',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ color: '#374151' }}
            />
            <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="memory" stroke="#10B981" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="disk" stroke="#8B5CF6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="network" stroke="#F59E0B" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-center space-x-6 mt-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">CPU</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Memory</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Disk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Network</span>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div>
        <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4">System Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {systemInfo.map((info) => (
            <div key={info.label} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{info.label}</span>
              <span className="text-sm text-gray-900 dark:text-white">{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
