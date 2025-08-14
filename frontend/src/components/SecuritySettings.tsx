'use client';

import { useState } from 'react';
import { Shield, Lock, Key, Smartphone, Eye, EyeOff } from 'lucide-react';

export function SecuritySettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: true,
    emailNotifications: true,
    loginNotifications: true,
    sessionTimeout: 30,
    requirePasswordChange: false,
    allowRememberMe: true,
    maxLoginAttempts: 5,
    lockoutDuration: 15
  });

  const handlePasswordChange = () => {
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match');
      return;
    }
    if (passwords.new.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    
    console.log('Changing password...');
    // Here you would integrate with your backend API
    setPasswords({ current: '', new: '', confirm: '' });
  };

  const handleSaveSecurity = () => {
    console.log('Saving security settings:', securitySettings);
    // Here you would integrate with your backend API
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Security Settings</h3>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Password Change */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <Lock className="h-4 w-4 mr-2" />
            Change Password
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Password</label>
              <div className="mt-1 relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={passwords.current}
                  onChange={(e) => setPasswords(prev => ({ ...prev, current: e.target.value }))}
                  className="block w-full pr-10 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">New Password</label>
              <div className="mt-1 relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={passwords.new}
                  onChange={(e) => setPasswords(prev => ({ ...prev, new: e.target.value }))}
                  className="block w-full pr-10 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Password must be at least 8 characters long</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm New Password</label>
              <div className="mt-1 relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={passwords.confirm}
                  onChange={(e) => setPasswords(prev => ({ ...prev, confirm: e.target.value }))}
                  className="block w-full pr-10 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            
            <button
              onClick={handlePasswordChange}
              disabled={!passwords.current || !passwords.new || !passwords.confirm}
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Change Password
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <Smartphone className="h-4 w-4 mr-2" />
            Two-Factor Authentication
          </h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Enable 2FA</span>
              <input
                type="checkbox"
                checked={securitySettings.twoFactorEnabled}
                onChange={(e) => setSecuritySettings(prev => ({
                  ...prev,
                  twoFactorEnabled: e.target.checked
                }))}
                className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            {securitySettings.twoFactorEnabled && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Smartphone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">Two-factor authentication is enabled</h3>
                    <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                      <p>Your account is protected with an additional layer of security.</p>
                    </div>
                    <div className="mt-4">
                      <button className="text-sm font-medium text-blue-800 hover:text-blue-600 dark:text-blue-200 dark:hover:text-blue-100">
                        Manage 2FA settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Preferences */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            Security Preferences
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Email notifications for security events</span>
                <input
                  type="checkbox"
                  checked={securitySettings.emailNotifications}
                  onChange={(e) => setSecuritySettings(prev => ({
                    ...prev,
                    emailNotifications: e.target.checked
                  }))}
                  className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Login notifications</span>
                <input
                  type="checkbox"
                  checked={securitySettings.loginNotifications}
                  onChange={(e) => setSecuritySettings(prev => ({
                    ...prev,
                    loginNotifications: e.target.checked
                  }))}
                  className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Require password change on next login</span>
                <input
                  type="checkbox"
                  checked={securitySettings.requirePasswordChange}
                  onChange={(e) => setSecuritySettings(prev => ({
                    ...prev,
                    requirePasswordChange: e.target.checked
                  }))}
                  className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Allow &quot;Remember Me&quot; option</span>
                <input
                  type="checkbox"
                  checked={securitySettings.allowRememberMe}
                  onChange={(e) => setSecuritySettings(prev => ({
                    ...prev,
                    allowRememberMe: e.target.checked
                  }))}
                  className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Session timeout (minutes)</label>
                <select
                  value={securitySettings.sessionTimeout}
                  onChange={(e) => setSecuritySettings(prev => ({
                    ...prev,
                    sessionTimeout: Number(e.target.value)
                  }))}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={60}>1 hour</option>
                  <option value={120}>2 hours</option>
                  <option value={480}>8 hours</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Max login attempts</label>
                <select
                  value={securitySettings.maxLoginAttempts}
                  onChange={(e) => setSecuritySettings(prev => ({
                    ...prev,
                    maxLoginAttempts: Number(e.target.value)
                  }))}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value={3}>3 attempts</option>
                  <option value={5}>5 attempts</option>
                  <option value={10}>10 attempts</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleSaveSecurity}
            className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
            Save Security Settings
          </button>
        </div>
      </div>
    </div>
  );
}
