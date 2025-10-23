export type AutomationType = 
  | 'DAILY_DEADLINE_CHECK'
  | 'WEEKLY_REST_REPORT'
  | 'BURNOUT_ALERT'
  | 'MONTHLY_DEADLINE_AUDIT'
  | 'PROJECT_REMINDER'
  | 'CELEBRATION_TRIGGER'

export type AutomationFrequency = 
  | 'DAILY'
  | 'WEEKLY'
  | 'MONTHLY'
  | 'TRIGGERED'

export interface Automation {
  id: string
  type: AutomationType
  name: string
  description: string
  frequency: AutomationFrequency
  schedule?: string // Cron expression or specific time
  enabled: boolean
  lastRun?: string
  nextRun?: string
  config?: Record<string, any>
}

export interface AutomationRun {
  id: string
  automationId: string
  executedAt: string
  success: boolean
  message: string
  data?: Record<string, any>
}

// Automation configurations
export const AUTOMATIONS: Automation[] = [
  {
    id: 'daily-deadline-check',
    type: 'DAILY_DEADLINE_CHECK',
    name: 'Daily "Real Deadline Check" Email',
    description: 'Scans all projects and emails ONLY hard deadlines with dates + consequences + sources. If none exist, emails: "No hard deadlines today. You can breathe."',
    frequency: 'DAILY',
    schedule: '0 7 * * *', // 7 AM PT daily
    enabled: true,
    config: {
      time: '7:00 AM PT',
      emailSubject: 'Your Real Deadlines Today',
      noDeadlinesMessage: 'No hard deadlines today. You can breathe.',
    },
  },
  {
    id: 'weekly-rest-report',
    type: 'WEEKLY_REST_REPORT',
    name: 'Weekly "Permission to Rest" Report',
    description: 'Reviews all projects, checks for hard deadlines in next 7 days, and if none exist, sends: "No hard deadlines this week. Here\'s what you accomplished: [list]. You have permission to rest."',
    frequency: 'WEEKLY',
    schedule: '0 18 * * 0', // Sunday 6 PM PT
    enabled: true,
    config: {
      day: 'Sunday',
      time: '6:00 PM PT',
      emailSubject: 'Your Week Ahead - Permission to Rest',
    },
  },
  {
    id: 'burnout-alert',
    type: 'BURNOUT_ALERT',
    name: '"You\'re Working Too Much" Alert',
    description: 'If you log activity for 6+ consecutive days, sends: "You\'ve worked 6 days straight. What\'s one thing you can pause until [specific date]?"',
    frequency: 'TRIGGERED',
    enabled: true,
    config: {
      consecutiveDaysThreshold: 6,
      emailSubject: 'Burnout Prevention - Time to Pause',
    },
  },
  {
    id: 'monthly-deadline-audit',
    type: 'MONTHLY_DEADLINE_AUDIT',
    name: 'Monthly "Deadline Audit"',
    description: 'Lists all deadlines you entered last month that had no source/consequence. Asks: "Were these real deadlines or AI urgency? Archive them?"',
    frequency: 'MONTHLY',
    schedule: '0 9 1 * *', // 1st of month, 9 AM PT
    enabled: true,
    config: {
      day: '1st of month',
      time: '9:00 AM PT',
      emailSubject: 'Monthly Deadline Audit - Spot False Urgency',
    },
  },
  {
    id: 'project-reminder',
    type: 'PROJECT_REMINDER',
    name: 'Project Update Reminder',
    description: 'If no activity logged for a project in 3 days AND there\'s a hard deadline, reminds you. If no hard deadline, says: "No urgent tasks. Check in when you have capacity."',
    frequency: 'TRIGGERED',
    enabled: true,
    config: {
      inactivityDays: 3,
      checkTime: '10:00 AM PT',
      projects: ['Kathy Hart POA Support'], // Can be configured per project
    },
  },
  {
    id: 'celebration-trigger',
    type: 'CELEBRATION_TRIGGER',
    name: 'Achievement Celebration',
    description: 'When you deploy to production or complete a major milestone, waits 24 hours, then sends: "You built something yesterday. That matters. What felt good about it?"',
    frequency: 'TRIGGERED',
    enabled: true,
    config: {
      delayHours: 24,
      emailSubject: 'Celebrate Your Win',
      triggers: ['deployment', 'milestone_complete', 'major_task_done'],
    },
  },
]
