'use client';

import { useState } from 'react';
import { User, Mail, Globe, Bell, Shield } from 'lucide-react';

export function UserSettings() {
  const [settings, setSettings] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    timezone: 'UTC',
    language: 'en',
    theme: 'light',
    notifications: {
      email: true,
      push: false,
      sms: false,
    },
    privacy: {
      profileVisible: true,
      activityVisible: false,
      analyticsEnabled: true,
    }
  });

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // Here you would integrate with your backend API
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">User Settings</h3>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Personal Information */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <User className="h-4 w-4 mr-2" />
            Personal Information
          </h4>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={settings.name}
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <Globe className="h-4 w-4 mr-2" />
            Preferences
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                Timezone
              </label>
              <select
                id="timezone"
                value={settings.timezone}
                onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="GMT">GMT</option>
                <option value="CET">Central European Time</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                id="language"
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
                Theme
              </label>
              <select
                id="theme"
                value={settings.theme}
                onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </h4>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.email}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, email: e.target.checked }
                })}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">Email notifications</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.push}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, push: e.target.checked }
                })}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">Push notifications</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.sms}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, sms: e.target.checked }
                })}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">SMS notifications</span>
            </label>
          </div>
        </div>

        {/* Privacy */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            Privacy
          </h4>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.privacy.profileVisible}
                onChange={(e) => setSettings({
                  ...settings,
                  privacy: { ...settings.privacy, profileVisible: e.target.checked }
                })}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">Make profile visible to other users</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.privacy.activityVisible}
                onChange={(e) => setSettings({
                  ...settings,
                  privacy: { ...settings.privacy, activityVisible: e.target.checked }
                })}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">Show activity in public feed</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.privacy.analyticsEnabled}
                onChange={(e) => setSettings({
                  ...settings,
                  privacy: { ...settings.privacy, analyticsEnabled: e.target.checked }
                })}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">Allow analytics and tracking</span>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
