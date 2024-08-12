'use client';

import { Card } from '@/components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Cpu, HardDrive, Activity, Clock } from 'lucide-react';

const stats = [
  { name: 'Total Processes', value: '12', icon: Activity, change: '+2', changeType: 'positive' },
  { name: 'Running', value: '8', icon: Cpu, change: '+1', changeType: 'positive' },
  { name: 'Stopped', value: '3', icon: Clock, change: '-1', changeType: 'negative' },
  { name: 'Memory Usage', value: '68%', icon: HardDrive, change: '+5%', changeType: 'neutral' },
];

const cpuData = [
  { time: '00:00', cpu: 45, memory: 60 },
  { time: '04:00', cpu: 52, memory: 65 },
  { time: '08:00', cpu: 78, memory: 70 },
  { time: '12:00', cpu: 85, memory: 75 },
  { time: '16:00', cpu: 72, memory: 68 },
  { time: '20:00', cpu: 65, memory: 62 },
  { time: '23:59', cpu: 48, memory: 58 },
];

const processStatus = [
  { name: 'Running', value: 8, color: '#10B981' },
  { name: 'Stopped', value: 3, color: '#EF4444' },
  { name: 'Error', value: 1, color: '#F59E0B' },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className={`text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' :
                  stat.changeType === 'negative' ? 'text-red-600 dark:text-red-400' :
                  'text-gray-600 dark:text-gray-400'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CPU & Memory Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={cpuData}>
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
              <Area 
                type="monotone" 
                dataKey="cpu" 
                stackId="1" 
                stroke="#3B82F6" 
                fill="#3B82F6" 
                fillOpacity={0.6} 
              />
              <Area 
                type="monotone" 
                dataKey="memory" 
                stackId="1" 
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.6} 
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">CPU</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Memory</span>
            </div>
          </div>
        </Card>

        {/* Process Status Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Process Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={processStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {processStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
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
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
