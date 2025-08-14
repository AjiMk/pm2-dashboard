'use client';

import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  RefreshCw, 
  Eye,
  EyeOff,
  Trash2
} from 'lucide-react';

const mockLogs = [
  {
    id: 1,
    timestamp: '2024-01-15 14:30:25',
    level: 'info',
    process: 'web-server',
    message: 'Server started on port 3000',
    details: 'Express server initialized successfully'
  },
  {
    id: 2,
    timestamp: '2024-01-15 14:30:26',
    level: 'info',
    process: 'api-server',
    message: 'API server started on port 3001',
    details: 'REST API endpoints registered'
  },
  {
    id: 3,
    timestamp: '2024-01-15 14:30:27',
    level: 'warn',
    process: 'worker-1',
    message: 'High memory usage detected',
    details: 'Memory usage: 85% (1.2GB/1.4GB)'
  },
  {
    id: 4,
    timestamp: '2024-01-15 14:30:28',
    level: 'error',
    process: 'cache-server',
    message: 'Failed to connect to Redis',
    details: 'Connection timeout after 5000ms'
  },
  {
    id: 5,
    timestamp: '2024-01-15 14:30:29',
    level: 'info',
    process: 'monitor',
    message: 'Health check completed',
    details: 'All services responding normally'
  },
  {
    id: 6,
    timestamp: '2024-01-15 14:30:30',
    level: 'debug',
    process: 'web-server',
    message: 'Request processed',
    details: 'GET /api/health - 200 OK - 15ms'
  },
];

const logLevels = ['all', 'info', 'warn', 'error', 'debug'];
const processes = ['all', 'web-server', 'api-server', 'worker-1', 'cache-server', 'monitor'];

export function LogViewer() {
  const [logs, setLogs] = useState(mockLogs);
  const [filteredLogs, setFilteredLogs] = useState(mockLogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedProcess, setSelectedProcess] = useState('all');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoRefresh) {
      interval = setInterval(() => {
        // Simulate new logs being added
        const newLog = {
          id: Date.now(),
          timestamp: new Date().toLocaleString(),
          level: 'info',
          process: 'monitor',
          message: 'Heartbeat check',
          details: 'System health monitoring active'
        };
        setLogs(prev => [newLog, ...prev.slice(0, -1)]);
      }, 10000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh]);

  useEffect(() => {
    let filtered = logs;

    // Filter by level
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(log => log.level === selectedLevel);
    }

    // Filter by process
    if (selectedProcess !== 'all') {
      filtered = filtered.filter(log => log.process === selectedProcess);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(log => 
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.details.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredLogs(filtered);
  }, [logs, searchTerm, selectedLevel, selectedProcess]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'warn':
        return 'bg-yellow-100 text-yellow-800';
      case 'info':
        return 'bg-blue-100 text-blue-800';
      case 'debug':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleRefresh = () => {
    // Here you would fetch fresh logs from your PM2 backend API
    console.log('Refreshing logs...');
  };

  const handleDownload = () => {
    const logText = filteredLogs.map(log => 
      `[${log.timestamp}] [${log.level.toUpperCase()}] [${log.process}] ${log.message}`
    ).join('\n');
    
    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pm2-logs-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClearLogs = () => {
    if (confirm('Are you sure you want to clear all logs?')) {
      setLogs([]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Process Logs</h3>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
            <button
              onClick={handleClearLogs}
              className="inline-flex items-center px-3 py-2 border border-red-300 dark:border-red-600 text-sm leading-4 font-medium rounded-md text-red-700 dark:text-red-300 bg-white dark:bg-gray-700 hover:bg-red-50 dark:hover:bg-gray-600"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
        <div className="flex flex-wrap items-center space-x-4">
          {/* Search */}
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-300 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="block w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
          >
            {logLevels.map(level => (
              <option key={level} value={level}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </option>
            ))}
          </select>

          {/* Process Filter */}
          <select
            value={selectedProcess}
            onChange={(e) => setSelectedProcess(e.target.value)}
            className="block w-40 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
          >
            {processes.map(process => (
              <option key={process} value={process}>
                {process === 'all' ? 'All Processes' : process}
              </option>
            ))}
          </select>

          {/* Auto-refresh Toggle */}
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Auto-refresh</span>
          </label>

          {/* Show Details Toggle */}
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showDetails}
              onChange={(e) => setShowDetails(e.target.checked)}
              className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Show details</span>
          </label>
        </div>
      </div>

      {/* Logs */}
      <div className="overflow-y-auto max-h-96">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredLogs.length > 0 ? (
            filteredLogs.map((log) => (
              <div key={log.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex items-start space-x-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(log.level)}`}>
                    {log.level.toUpperCase()}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{log.message}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>{log.timestamp}</span>
                        <span className="text-gray-300 dark:text-gray-600">|</span>
                        <span>{log.process}</span>
                      </div>
                    </div>
                    {showDetails && log.details && (
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{log.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">No logs found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Log Count */}
      <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredLogs.length} of {logs.length} logs
        </p>
      </div>
    </div>
  );
}
