'use client';

import { useState } from 'react';
import { Clock, MapPin, Monitor, Shield, User, Settings } from 'lucide-react';

const mockActivities = [
  {
    id: 1,
    type: 'login',
    description: 'Successfully logged in from San Francisco, CA',
    timestamp: '2024-01-15 14:30:25',
    ip: '192.168.1.100',
    location: 'San Francisco, CA',
    device: 'Chrome on Windows 10',
    icon: User,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 2,
    type: 'password_change',
    description: 'Password changed successfully',
    timestamp: '2024-01-15 13:45:12',
    ip: '192.168.1.100',
    location: 'San Francisco, CA',
    device: 'Chrome on Windows 10',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 3,
    type: 'settings_update',
    description: 'Dashboard settings updated',
    timestamp: '2024-01-15 12:20:45',
    ip: '192.168.1.100',
    location: 'San Francisco, CA',
    device: 'Chrome on Windows 10',
    icon: Settings,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    id: 4,
    type: 'process_management',
    description: 'Started process "web-server"',
    timestamp: '2024-01-15 11:15:30',
    ip: '192.168.1.100',
    location: 'San Francisco, CA',
    device: 'Chrome on Windows 10',
    icon: Monitor,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    id: 5,
    type: 'login_attempt',
    description: 'Failed login attempt from unknown location',
    timestamp: '2024-01-15 10:30:15',
    ip: '203.45.67.89',
    location: 'Unknown',
    device: 'Unknown',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    id: 6,
    type: 'logout',
    description: 'Successfully logged out',
    timestamp: '2024-01-15 09:45:22',
    ip: '192.168.1.100',
    location: 'San Francisco, CA',
    device: 'Chrome on Windows 10',
    icon: User,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100'
  }
];

export function ActivityLog() {
  const [activities] = useState(mockActivities);
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const getActivityTypeLabel = (type: string) => {
    switch (type) {
      case 'login':
        return 'Login';
      case 'logout':
        return 'Logout';
      case 'password_change':
        return 'Password Change';
      case 'settings_update':
        return 'Settings Update';
      case 'process_management':
        return 'Process Management';
      case 'login_attempt':
        return 'Login Attempt';
      default:
        return 'Unknown';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Activity Log</h3>
        <p className="text-sm text-gray-500">Recent account activity and security events</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedActivity === activity.id
                  ? 'border-indigo-300 bg-indigo-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedActivity(selectedActivity === activity.id ? null : activity.id)}
            >
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${activity.bgColor} flex items-center justify-center`}>
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {getActivityTypeLabel(activity.type)}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{formatTimestamp(activity.timestamp)}</span>
                    </div>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-600">{activity.description}</p>
                  
                  <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Monitor className="h-3 w-3" />
                      <span>{activity.device}</span>
                    </div>
                  </div>
                  
                  {selectedActivity === activity.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="font-medium text-gray-700">IP Address:</span>
                          <span className="ml-2 text-gray-600">{activity.ip}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Full Timestamp:</span>
                          <span className="ml-2 text-gray-600">{activity.timestamp}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Location:</span>
                          <span className="ml-2 text-gray-600">{activity.location}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Device:</span>
                          <span className="ml-2 text-gray-600">{activity.device}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {activities.length === 0 && (
          <div className="text-center py-8">
            <Clock className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No activity</h3>
            <p className="mt-1 text-sm text-gray-500">No recent activity to display.</p>
          </div>
        )}
        
        {activities.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              View All Activity
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
