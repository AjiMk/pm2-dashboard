'use client';

import { useState } from 'react';
import { Settings, Layout, BarChart3, Clock, Eye } from 'lucide-react';

export function DashboardSettings() {
  const [dashboardSettings, setDashboardSettings] = useState({
    layout: {
      sidebarCollapsed: false,
      compactMode: false,
      showNotifications: true,
    },
    charts: {
      refreshInterval: 30,
      showGrid: true,
      showTooltips: true,
      chartType: 'line',
    },
    monitoring: {
      autoRefresh: true,
      refreshRate: 5000,
      showRealTime: true,
      maxDataPoints: 100,
    },
    display: {
      showProcessDetails: true,
      showSystemMetrics: true,
      showPerformanceCharts: true,
      showLogs: true,
    }
  });

  const handleSave = () => {
    console.log('Saving dashboard settings:', dashboardSettings);
    // Here you would integrate with your backend API
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Dashboard Settings</h3>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Layout Settings */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <Layout className="h-4 w-4 mr-2" />
            Layout Preferences
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Collapse sidebar by default</span>
              <input
                type="checkbox"
                checked={dashboardSettings.layout.sidebarCollapsed}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  layout: { ...prev.layout, sidebarCollapsed: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Compact mode</span>
              <input
                type="checkbox"
                checked={dashboardSettings.layout.compactMode}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  layout: { ...prev.layout, compactMode: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show notifications panel</span>
              <input
                type="checkbox"
                checked={dashboardSettings.layout.showNotifications}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  layout: { ...prev.layout, showNotifications: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>

        {/* Chart Settings */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <BarChart3 className="h-4 w-4 mr-2" />
            Chart Configuration
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="refresh-interval" className="block text-sm font-medium text-gray-700">
                Chart refresh interval (seconds)
              </label>
              <select
                id="refresh-interval"
                value={dashboardSettings.charts.refreshInterval}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  charts: { ...prev.charts, refreshInterval: Number(e.target.value) }
                }))}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value={15}>15 seconds</option>
                <option value={30}>30 seconds</option>
                <option value={60}>1 minute</option>
                <option value={300}>5 minutes</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="chart-type" className="block text-sm font-medium text-gray-700">
                Default chart type
              </label>
              <select
                id="chart-type"
                value={dashboardSettings.charts.chartType}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  charts: { ...prev.charts, chartType: e.target.value }
                }))}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="line">Line Chart</option>
                <option value="area">Area Chart</option>
                <option value="bar">Bar Chart</option>
                <option value="pie">Pie Chart</option>
              </select>
            </div>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show chart grid</span>
              <input
                type="checkbox"
                checked={dashboardSettings.charts.showGrid}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  charts: { ...prev.charts, showGrid: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show tooltips</span>
              <input
                type="checkbox"
                checked={dashboardSettings.charts.showTooltips}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  charts: { ...prev.charts, showTooltips: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>

        {/* Monitoring Settings */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Monitoring Preferences
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="refresh-rate" className="block text-sm font-medium text-gray-700">
                Data refresh rate (ms)
              </label>
              <select
                id="refresh-rate"
                value={dashboardSettings.monitoring.refreshRate}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  monitoring: { ...prev.monitoring, refreshRate: Number(e.target.value) }
                }))}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value={1000}>1 second</option>
                <option value={5000}>5 seconds</option>
                <option value={10000}>10 seconds</option>
                <option value={30000}>30 seconds</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="max-data-points" className="block text-sm font-medium text-gray-700">
                Max data points per chart
              </label>
              <select
                id="max-data-points"
                value={dashboardSettings.monitoring.maxDataPoints}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  monitoring: { ...prev.monitoring, maxDataPoints: Number(e.target.value) }
                }))}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value={50}>50 points</option>
                <option value={100}>100 points</option>
                <option value={200}>200 points</option>
                <option value={500}>500 points</option>
              </select>
            </div>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Auto-refresh data</span>
              <input
                type="checkbox"
                checked={dashboardSettings.monitoring.autoRefresh}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  monitoring: { ...prev.monitoring, autoRefresh: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show real-time updates</span>
              <input
                type="checkbox"
                checked={dashboardSettings.monitoring.showRealTime}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  monitoring: { ...prev.monitoring, showRealTime: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>

        {/* Display Settings */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
            <Eye className="h-4 w-4 mr-2" />
            Display Options
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show process details</span>
              <input
                type="checkbox"
                checked={dashboardSettings.display.showProcessDetails}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  display: { ...prev.display, showProcessDetails: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show system metrics</span>
              <input
                type="checkbox"
                checked={dashboardSettings.display.showSystemMetrics}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  display: { ...prev.display, showSystemMetrics: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show performance charts</span>
              <input
                type="checkbox"
                checked={dashboardSettings.display.showPerformanceCharts}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  display: { ...prev.display, showPerformanceCharts: e.target.checked }
                }))}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show logs panel</span>
              <input
                type="checkbox"
                checked={dashboardSettings.display.showLogs}
                onChange={(e) => setDashboardSettings(prev => ({
                  ...prev,
                  display: { ...prev.display, showLogs: e.target.checked }
                }))}
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
            Save Dashboard Settings
          </button>
        </div>
      </div>
    </div>
  );
}
