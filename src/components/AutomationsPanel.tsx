import { Bell, Calendar, Coffee, Heart, Shield, Sparkles } from 'lucide-react'
import { AUTOMATIONS } from '../types/automations'
import type { Automation } from '../types/automations'

function AutomationsPanel() {
  const getAutomationIcon = (type: Automation['type']) => {
    switch (type) {
      case 'DAILY_DEADLINE_CHECK':
        return <Calendar className="w-5 h-5" />
      case 'WEEKLY_REST_REPORT':
        return <Coffee className="w-5 h-5" />
      case 'BURNOUT_ALERT':
        return <Shield className="w-5 h-5" />
      case 'MONTHLY_DEADLINE_AUDIT':
        return <Sparkles className="w-5 h-5" />
      case 'PROJECT_REMINDER':
        return <Bell className="w-5 h-5" />
      case 'CELEBRATION_TRIGGER':
        return <Heart className="w-5 h-5" />
    }
  }

  const getFrequencyBadge = (frequency: Automation['frequency']) => {
    const colors = {
      DAILY: 'bg-clarity-accent-primary/10 text-clarity-accent-primary border-clarity-accent-primary/20',
      WEEKLY: 'bg-clarity-accent-secondary/10 text-clarity-accent-secondary border-clarity-accent-secondary/20',
      MONTHLY: 'bg-clarity-deadline-soft/10 text-clarity-deadline-soft border-clarity-deadline-soft/20',
      TRIGGERED: 'bg-clarity-deadline-none/10 text-clarity-deadline-none border-clarity-deadline-none/20',
    }
    return colors[frequency]
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Intelligent Automations</h2>
        <p className="text-clarity-gray-400">
          CLARITY actively protects you from burnout with intelligent automations that distinguish real urgency from manufactured pressure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {AUTOMATIONS.map((automation) => (
          <div key={automation.id} className="card group">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${
                  automation.enabled 
                    ? 'bg-clarity-accent-primary/10 text-clarity-accent-primary' 
                    : 'bg-clarity-gray-800 text-clarity-gray-500'
                }`}>
                  {getAutomationIcon(automation.type)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{automation.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${getFrequencyBadge(automation.frequency)}`}>
                      {automation.frequency}
                    </span>
                    {automation.schedule && (
                      <span className="text-xs text-clarity-gray-500">
                        {automation.config?.time || automation.config?.day}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Toggle */}
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  automation.enabled 
                    ? 'bg-clarity-accent-primary' 
                    : 'bg-clarity-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    automation.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-clarity-gray-400 mb-4 leading-relaxed">
              {automation.description}
            </p>

            {/* Why It Matters */}
            <div className="p-3 bg-clarity-gray-800/50 rounded-lg border border-clarity-gray-700/30">
              <p className="text-xs text-clarity-gray-400 mb-1">Why this matters:</p>
              <p className="text-sm text-white">
                {automation.type === 'DAILY_DEADLINE_CHECK' && 
                  "You wake up knowing exactly what's actually urgent vs. what can wait."}
                {automation.type === 'WEEKLY_REST_REPORT' && 
                  "Breaks the cycle of feeling behind when you're actually ahead."}
                {automation.type === 'BURNOUT_ALERT' && 
                  "Prevents burnout before it happens."}
                {automation.type === 'MONTHLY_DEADLINE_AUDIT' && 
                  "Trains you to recognize false urgency patterns."}
                {automation.type === 'PROJECT_REMINDER' && 
                  "Balances advocacy with your wellbeing."}
                {automation.type === 'CELEBRATION_TRIGGER' && 
                  "Helps you notice wins instead of immediately moving to next crisis."}
              </p>
            </div>

            {/* Last Run / Next Run */}
            {automation.enabled && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-clarity-gray-800">
                <div>
                  <p className="text-xs text-clarity-gray-500">Next run</p>
                  <p className="text-sm text-white">
                    {automation.frequency === 'TRIGGERED' ? 'When triggered' : automation.config?.time || 'Scheduled'}
                  </p>
                </div>
                <button className="text-sm text-clarity-accent-primary hover:text-clarity-accent-primary/80 transition-colors">
                  Configure →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-12 card bg-gradient-to-r from-clarity-accent-primary/5 to-clarity-accent-secondary/5 border-clarity-accent-primary/20">
        <div className="flex items-center gap-4 mb-4">
          <Shield className="w-8 h-8 text-clarity-accent-primary" />
          <div>
            <h3 className="text-xl font-semibold text-white">Burnout Protection Active</h3>
            <p className="text-sm text-clarity-gray-400">
              {AUTOMATIONS.filter(a => a.enabled).length} of {AUTOMATIONS.length} automations enabled
            </p>
          </div>
        </div>
        <p className="text-sm text-clarity-gray-300 leading-relaxed">
          These automations work together to protect your wellbeing, distinguish real urgency from manufactured pressure, 
          and give you permission to rest when there are no hard deadlines. CLARITY is your partner in sustainable work.
        </p>
      </div>
    </div>
  )
}

export default AutomationsPanel
