# PM2 Dashboard Frontend

A modern, responsive dashboard for monitoring and managing PM2 processes built with Next.js, TypeScript, and Tailwind CSS.

## Features

### 🎯 Core Dashboard
- **Overview Dashboard**: Real-time system metrics, process statistics, and performance charts
- **Process Management**: View, start, stop, restart, and manage PM2 processes
- **Log Monitoring**: Real-time log viewing with filtering and search capabilities
- **System Metrics**: CPU, memory, disk, and network monitoring with interactive charts

### 📊 Charts & Analytics
- **Performance Charts**: Line charts, area charts, and bar charts using Recharts
- **Real-time Updates**: Live data updates with configurable refresh rates
- **Process Statistics**: Detailed process performance metrics and resource usage
- **System Health**: Visual indicators for system status and performance

### ⚙️ User Management
- **User Settings**: Customizable dashboard preferences and user preferences
- **Profile Management**: Complete user profile with editing capabilities
- **Security Settings**: Password management, 2FA, and security preferences
- **Activity Logging**: Comprehensive user activity tracking and security events

### 🔧 Configuration
- **Dashboard Settings**: Customizable layout, chart types, and monitoring preferences
- **Notification Settings**: Configurable alerts for process status, system alerts, and performance
- **Theme Support**: Light/dark theme options with responsive design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **State Management**: React Hooks
- **Build Tool**: Vite (via Next.js)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pm2-dashboard/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── dashboard/         # Dashboard pages
│   │   │   ├── processes/     # Process management
│   │   │   ├── logs/          # Log viewing
│   │   │   ├── settings/      # User settings
│   │   │   └── profile/       # User profile
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page (redirects to dashboard)
│   ├── components/            # Reusable components
│   │   ├── Sidebar.tsx        # Navigation sidebar
│   │   ├── Header.tsx         # Top header with notifications
│   │   ├── DashboardOverview.tsx # Main dashboard overview
│   │   ├── ProcessStats.tsx   # Process statistics
│   │   ├── SystemMetrics.tsx  # System monitoring
│   │   ├── ProcessList.tsx    # Process management table
│   │   ├── ProcessActions.tsx # Process control buttons
│   │   ├── LogViewer.tsx      # Log viewing component
│   │   ├── LogFilters.tsx     # Log filtering options
│   │   ├── UserSettings.tsx   # User preferences
│   │   ├── NotificationSettings.tsx # Notification configuration
│   │   ├── DashboardSettings.tsx # Dashboard configuration
│   │   ├── ProfileForm.tsx    # Profile editing
│   │   ├── SecuritySettings.tsx # Security preferences
│   │   └── ActivityLog.tsx    # User activity tracking
│   └── lib/                   # Utility functions
│       └── utils.ts           # Common utilities
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Key Components

### Dashboard Overview
- **Stats Cards**: Process count, CPU usage, memory usage, uptime
- **Performance Charts**: CPU and memory trends over time
- **Process Status**: Visual representation of process states

### Process Management
- **Process List**: Table view of all PM2 processes with actions
- **Process Actions**: Start, stop, restart, and delete processes
- **Process Details**: Modal with detailed process information

### Log Monitoring
- **Real-time Logs**: Live log streaming with auto-refresh
- **Advanced Filtering**: Filter by log level, process, and time range
- **Search Functionality**: Full-text search across log messages
- **Export Options**: Download filtered logs as text files

### User Management
- **Profile Editing**: Inline editing of user profile information
- **Security Settings**: Password changes, 2FA, and security preferences
- **Dashboard Customization**: Layout, chart, and monitoring preferences
- **Activity Tracking**: Complete audit trail of user actions

## Configuration

### Environment Variables

Create a `.env.local` file in the frontend directory:

```env
# Backend API URL (for future integration)
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Feature flags
NEXT_PUBLIC_ENABLE_REAL_TIME=true
NEXT_PUBLIC_ENABLE_NOTIFICATIONS=true
```

### Dashboard Settings

The dashboard can be customized through the settings page:

- **Layout Preferences**: Sidebar behavior, compact mode, notifications
- **Chart Configuration**: Refresh intervals, chart types, display options
- **Monitoring Preferences**: Auto-refresh, data retention, real-time updates
- **Display Options**: Show/hide various dashboard elements

## Backend Integration

This frontend is designed to work with a separate PM2 backend API. The components include placeholder functions where you would integrate with your backend:

```typescript
// Example integration point in ProcessList.tsx
const handleAction = (processId: number, action: string) => {
  // Replace with actual API calls
  fetch(`/api/processes/${processId}/${action}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
};
```

## Responsive Design

The dashboard is fully responsive and works on:
- **Desktop**: Full-featured dashboard with sidebar navigation
- **Tablet**: Optimized layout with collapsible sidebar
- **Mobile**: Mobile-first design with bottom navigation

## Customization

### Themes
The dashboard supports multiple themes:
- Light theme (default)
- Dark theme
- Auto theme (follows system preference)

### Colors
Primary colors can be customized in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

## Performance

- **Lazy Loading**: Components are loaded on-demand
- **Optimized Charts**: Efficient chart rendering with Recharts
- **Minimal Re-renders**: Optimized React component structure
- **Bundle Splitting**: Automatic code splitting by Next.js

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the component examples

## Roadmap

- [ ] Real-time WebSocket integration
- [ ] Advanced process monitoring
- [ ] Custom dashboard widgets
- [ ] User roles and permissions
- [ ] API rate limiting
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] Dark mode improvements
- [ ] Internationalization (i18n)
- [ ] Unit and integration tests
