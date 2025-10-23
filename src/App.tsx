import { useState, useEffect } from 'react'
import { Calendar, CheckCircle2, Clock, AlertCircle, Sparkles, Heart, Coffee } from 'lucide-react'
import type { ProjectWithDetails, DeadlineType } from './types'

// Mock data for demonstration - replace with actual API calls
const mockProjects: ProjectWithDetails[] = [
  {
    id: '1',
    name: 'Recovery Compass Platform',
    domain: 'DEVELOPMENT',
    doneForNowCriteria: 'Production deployment complete, monitoring for issues',
    currentStatus: 'Production monitoring phase',
    nextHardDeadline: null,
    canRestUntil: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deadlines: [],
    tasks: [
      {
        id: 't1',
        title: 'Monitor for user-reported issues',
        status: 'OPTIONAL',
        timeEstimate: 5,
        deadline: 'NONE',
        projectId: '1',
      },
    ],
    completedTasks: 12,
    totalTasks: 13,
    hardDeadlineCount: 0,
  },
  {
    id: '2',
    name: 'Kathy Hart POA Support',
    domain: 'ADVOCACY',
    doneForNowCriteria: 'Situation stable, Amy coordinating daily',
    currentStatus: 'Steady-state support',
    nextHardDeadline: null,
    canRestUntil: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deadlines: [],
    tasks: [
      {
        id: 't2',
        title: 'Austin Bank account setup',
        status: 'OPTIONAL',
        timeEstimate: 20,
        deadline: 'NONE',
        projectId: '2',
      },
      {
        id: 't3',
        title: 'UBS deposit redirect',
        status: 'OPTIONAL',
        timeEstimate: 15,
        deadline: 'NONE',
        projectId: '2',
      },
    ],
    completedTasks: 8,
    totalTasks: 10,
    hardDeadlineCount: 0,
  },
]

function App() {
  const [projects, setProjects] = useState<ProjectWithDetails[]>(mockProjects)
  const [totalHardDeadlines, setTotalHardDeadlines] = useState(0)
  const [canRest, setCanRest] = useState(true)

  useEffect(() => {
    const hardCount = projects.reduce((sum, p) => sum + p.hardDeadlineCount, 0)
    setTotalHardDeadlines(hardCount)
    setCanRest(hardCount === 0)
  }, [projects])

  const getDeadlineBadgeClass = (type: DeadlineType) => {
    switch (type) {
      case 'HARD':
        return 'deadline-hard'
      case 'SOFT':
        return 'deadline-soft'
      case 'NONE':
        return 'deadline-none'
    }
  }

  const getStatusIndicatorClass = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'status-completed'
      case 'IN_PROGRESS':
        return 'status-in-progress'
      case 'BLOCKED':
        return 'status-blocked'
      case 'OPTIONAL':
        return 'status-optional'
      default:
        return 'status-optional'
    }
  }

  return (
    <div className="min-h-screen bg-clarity-dark">
      {/* Hero Section with "You Can Rest" Indicator */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-clarity-accent-primary/10 via-clarity-dark to-clarity-accent-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-clarity-accent-primary" />
              <span className="text-sm text-clarity-gray-300">Human-AI Collaboration Operating System</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-clarity-gray-300 to-clarity-gray-400 bg-clip-text text-transparent">
              CLARITY
            </h1>
            
            <p className="text-xl text-clarity-gray-400 max-w-2xl mx-auto mb-8 text-balance">
              The world's first deadline system that distinguishes <span className="text-clarity-accent-primary font-semibold">real urgency</span> from <span className="text-clarity-accent-secondary font-semibold">AI-fabricated pressure</span>.
            </p>

            {/* THE LEGENDARY "YOU CAN REST" INDICATOR */}
            {canRest ? (
              <div className="inline-flex items-center gap-3 card bg-clarity-deadline-none/5 border-clarity-deadline-none/20 px-8 py-6 animate-float">
                <div className="relative">
                  <div className="absolute inset-0 bg-clarity-deadline-none/20 rounded-full blur-xl" />
                  <Coffee className="w-8 h-8 text-clarity-deadline-none relative" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-semibold text-clarity-deadline-none">You can rest</p>
                  <p className="text-sm text-clarity-gray-400">0 hard deadlines across all domains</p>
                </div>
              </div>
            ) : (
              <div className="inline-flex items-center gap-3 card bg-clarity-deadline-hard/5 border-clarity-deadline-hard/20 px-8 py-6">
                <AlertCircle className="w-8 h-8 text-clarity-deadline-hard" />
                <div className="text-left">
                  <p className="text-2xl font-semibold text-clarity-deadline-hard">{totalHardDeadlines} hard deadline{totalHardDeadlines !== 1 ? 's' : ''}</p>
                  <p className="text-sm text-clarity-gray-400">Real consequences if missed</p>
                </div>
              </div>
            )}
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-clarity-deadline-none" />
                <h3 className="text-lg">Projects</h3>
              </div>
              <p className="text-3xl font-bold text-white">{projects.length}</p>
              <p className="text-sm text-clarity-gray-400 mt-1">Active across life domains</p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-clarity-accent-primary" />
                <h3 className="text-lg">Hard Deadlines</h3>
              </div>
              <p className="text-3xl font-bold text-white">{totalHardDeadlines}</p>
              <p className="text-sm text-clarity-gray-400 mt-1">With real consequences</p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-clarity-accent-secondary" />
                <h3 className="text-lg">Completion Rate</h3>
              </div>
              <p className="text-3xl font-bold text-white">
                {Math.round((projects.reduce((sum, p) => sum + p.completedTasks, 0) / projects.reduce((sum, p) => sum + p.totalTasks, 0)) * 100)}%
              </p>
              <p className="text-sm text-clarity-gray-400 mt-1">Tasks completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Your Projects</h2>
          <button className="btn-primary">
            + New Project
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card group hover:scale-[1.02] cursor-pointer">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-clarity-accent-primary uppercase tracking-wide">
                      {project.domain}
                    </span>
                    {project.hardDeadlineCount > 0 && (
                      <span className="deadline-hard text-xs">
                        {project.hardDeadlineCount} hard
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
                  <p className="text-sm text-clarity-gray-400">{project.currentStatus}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-clarity-gray-400">Progress</span>
                  <span className="text-white font-medium">
                    {project.completedTasks}/{project.totalTasks} tasks
                  </span>
                </div>
                <div className="h-2 bg-clarity-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-clarity-accent-primary to-clarity-accent-secondary transition-all duration-500"
                    style={{ width: `${(project.completedTasks / project.totalTasks) * 100}%` }}
                  />
                </div>
              </div>

              {/* Done For Now Criteria */}
              <div className="mb-4 p-3 bg-clarity-gray-800/50 rounded-lg border border-clarity-gray-700/30">
                <p className="text-xs text-clarity-gray-400 mb-1">Done for now =</p>
                <p className="text-sm text-white">{project.doneForNowCriteria}</p>
              </div>

              {/* Tasks Preview */}
              {project.tasks.length > 0 && (
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-medium text-clarity-gray-400 uppercase tracking-wide">Next Actions</p>
                  {project.tasks.slice(0, 2).map((task) => (
                    <div key={task.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-clarity-gray-800/30 transition-colors">
                      <div className={getStatusIndicatorClass(task.status)} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white truncate">{task.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-clarity-gray-500">{task.timeEstimate} min</span>
                          <span className={`text-xs ${getDeadlineBadgeClass(task.deadline)} !px-2 !py-0.5`}>
                            {task.deadline.toLowerCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Can Rest Indicator */}
              {!project.nextHardDeadline ? (
                <div className="flex items-center gap-2 px-3 py-2 bg-clarity-deadline-none/10 border border-clarity-deadline-none/20 rounded-lg">
                  <Coffee className="w-4 h-4 text-clarity-deadline-none" />
                  <p className="text-sm text-clarity-deadline-none">Can rest - work when you have energy</p>
                </div>
              ) : (
                <div className="flex items-center gap-2 px-3 py-2 bg-clarity-deadline-hard/10 border border-clarity-deadline-hard/20 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-clarity-deadline-hard" />
                  <p className="text-sm text-clarity-deadline-hard">Next required: {project.nextHardDeadline}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer with Love */}
      <footer className="border-t border-clarity-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center gap-2 text-clarity-gray-400 mb-4">
            <p>Built with</p>
            <Heart className="w-4 h-4 text-clarity-accent-primary fill-current" />
            <p>by Eric Jones</p>
          </div>
          <p className="text-sm text-clarity-gray-500">
            In honor of those rebuilding their lives with steadiness and care
          </p>
          <p className="text-xs text-clarity-gray-600 mt-2">
            CLARITY v1.0 - The world's first deadline system that distinguishes real urgency from AI-fabricated pressure
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
