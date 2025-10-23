export type DeadlineType = 'HARD' | 'SOFT' | 'NONE'
export type TaskStatus = 'COMPLETED' | 'IN_PROGRESS' | 'BLOCKED' | 'OPTIONAL'
export type LifeDomain = 'ADVOCACY' | 'DEVELOPMENT' | 'LEGAL' | 'PERSONAL' | 'ORGANIZATIONAL' | 'HEALTH' | 'FINANCIAL' | 'OTHER'

export interface Deadline {
  id: string
  type: DeadlineType
  date: string | null
  description: string
  consequence: string
  source: string
  projectId: string
}

export interface Task {
  id: string
  title: string
  status: TaskStatus
  timeEstimate: number // minutes
  deadline: DeadlineType
  blockedBy?: string
  projectId: string
}

export interface Project {
  id: string
  name: string
  domain: LifeDomain
  doneForNowCriteria: string
  currentStatus: string
  nextHardDeadline: string | null
  canRestUntil: string | null
  createdAt: string
  updatedAt: string
}

export interface ProjectWithDetails extends Project {
  deadlines: Deadline[]
  tasks: Task[]
  completedTasks: number
  totalTasks: number
  hardDeadlineCount: number
}
