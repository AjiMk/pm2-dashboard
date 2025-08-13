'use client';

import { useState } from 'react';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Plus, 
  Upload,
  Download,
  Settings
} from 'lucide-react';

export function ProcessActions() {
  const [showNewProcessModal, setShowNewProcessModal] = useState(false);
  const [newProcessName, setNewProcessName] = useState('');
  const [newProcessScript, setNewProcessScript] = useState('');

  const handleStartAll = () => {
    console.log('Starting all processes');
    // Here you would integrate with your PM2 backend API
  };

  const handleStopAll = () => {
    console.log('Stopping all processes');
    // Here you would integrate with your PM2 backend API
  };

  const handleRestartAll = () => {
    console.log('Restarting all processes');
    // Here you would integrate with your PM2 backend API
  };

  const handleNewProcess = () => {
    if (newProcessName && newProcessScript) {
      console.log('Creating new process:', { name: newProcessName, script: newProcessScript });
      // Here you would integrate with your PM2 backend API
      setNewProcessName('');
      setNewProcessScript('');
      setShowNewProcessModal(false);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handleStartAll}
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <Play className="h-4 w-4 mr-2" />
        Start All
      </button>
      
      <button
        onClick={handleStopAll}
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <Square className="h-4 w-4 mr-2" />
        Stop All
      </button>
      
      <button
        onClick={handleRestartAll}
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <RotateCcw className="h-4 w-4 mr-2" />
        Restart All
      </button>
      
      <button
        onClick={() => setShowNewProcessModal(true)}
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Plus className="h-4 w-4 mr-2" />
        New Process
      </button>
      
      <button
        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Upload className="h-4 w-4 mr-2" />
        Import
      </button>
      
      <button
        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Download className="h-4 w-4 mr-2" />
        Export
      </button>

      {/* New Process Modal */}
      {showNewProcessModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">New Process</h3>
                <button
                  onClick={() => setShowNewProcessModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="process-name" className="block text-sm font-medium text-gray-700">
                    Process Name
                  </label>
                  <input
                    type="text"
                    id="process-name"
                    value={newProcessName}
                    onChange={(e) => setNewProcessName(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter process name"
                  />
                </div>
                
                <div>
                  <label htmlFor="process-script" className="block text-sm font-medium text-gray-700">
                    Script Path
                  </label>
                  <input
                    type="text"
                    id="process-script"
                    value={newProcessScript}
                    onChange={(e) => setNewProcessScript(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter script path (e.g., app.js)"
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowNewProcessModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleNewProcess}
                    disabled={!newProcessName || !newProcessScript}
                    className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
