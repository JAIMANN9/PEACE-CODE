"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"
import { Users, AlertTriangle, Calendar, Activity, Target, Clock, BookOpen } from "lucide-react"

// Mock data for demonstration
const screeningData = [
  { month: "Jan", phq9: 45, gad7: 38, ghq: 42, total: 125 },
  { month: "Feb", phq9: 52, gad7: 44, ghq: 48, total: 144 },
  { month: "Mar", phq9: 48, gad7: 41, ghq: 45, total: 134 },
  { month: "Apr", phq9: 61, gad7: 55, ghq: 58, total: 174 },
  { month: "May", phq9: 58, gad7: 52, ghq: 55, total: 165 },
  { month: "Jun", phq9: 35, gad7: 28, ghq: 32, total: 95 },
]

const severityDistribution = [
  { name: "Minimal", value: 45, color: "#22c55e" },
  { name: "Mild", value: 30, color: "#eab308" },
  { name: "Moderate", value: 20, color: "#f97316" },
  { name: "Severe", value: 5, color: "#ef4444" },
]

const departmentData = [
  { department: "Engineering", students: 245, highRisk: 18, avgScore: 8.2 },
  { department: "Medicine", students: 189, highRisk: 24, avgScore: 9.1 },
  { department: "Arts", students: 156, highRisk: 12, avgScore: 7.8 },
  { department: "Science", students: 198, highRisk: 15, avgScore: 8.5 },
  { department: "Business", students: 167, highRisk: 10, avgScore: 7.2 },
]

const utilizationData = [
  { service: "AI Support", usage: 78, satisfaction: 4.6 },
  { service: "Counseling", usage: 45, satisfaction: 4.8 },
  { service: "Resources", usage: 62, satisfaction: 4.4 },
  { service: "Community", usage: 34, satisfaction: 4.2 },
  { service: "Screening", usage: 89, satisfaction: 4.5 },
]

const weeklyTrends = [
  { day: "Mon", anxiety: 65, depression: 58, stress: 72 },
  { day: "Tue", anxiety: 59, depression: 54, stress: 68 },
  { day: "Wed", anxiety: 62, depression: 57, stress: 70 },
  { day: "Thu", anxiety: 68, depression: 61, stress: 75 },
  { day: "Fri", anxiety: 55, depression: 48, stress: 62 },
  { day: "Sat", anxiety: 42, depression: 38, stress: 45 },
  { day: "Sun", anxiety: 48, depression: 44, stress: 52 },
]

export function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("6months")
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const totalStudents = departmentData.reduce((sum, dept) => sum + dept.students, 0)
  const totalHighRisk = departmentData.reduce((sum, dept) => sum + dept.highRisk, 0)
  const avgUtilization = utilizationData.reduce((sum, service) => sum + service.usage, 0) / utilizationData.length

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assessments</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Students</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{totalHighRisk}</div>
            <p className="text-xs text-muted-foreground">
              {((totalHighRisk / totalStudents) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Utilization</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgUtilization.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">Average across all services</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Intervention Success</CardTitle>
            <Target className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">73%</div>
            <p className="text-xs text-muted-foreground">Students showing improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-[180px]">
              <BookOpen className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="medicine">Medicine</SelectItem>
              <SelectItem value="arts">Arts</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Analytics */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="interventions">Interventions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Screening Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={screeningData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Severity Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={severityDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {severityDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Mental Health Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="anxiety" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="depression" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="stress" stroke="#8b5cf6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Type Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={screeningData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="phq9" fill="#3b82f6" name="PHQ-9 (Depression)" />
                  <Bar dataKey="gad7" fill="#10b981" name="GAD-7 (Anxiety)" />
                  <Bar dataKey="ghq" fill="#8b5cf6" name="GHQ-12 (General)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <div className="grid gap-6">
            {departmentData.map((dept) => (
              <Card key={dept.department}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{dept.department}</CardTitle>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">{dept.students} students</Badge>
                      <Badge variant={dept.highRisk > 20 ? "destructive" : "secondary"}>
                        {dept.highRisk} high risk
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Assessments</p>
                      <p className="text-2xl font-bold">{dept.students}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">High Risk %</p>
                      <p className="text-2xl font-bold text-red-600">
                        {((dept.highRisk / dept.students) * 100).toFixed(1)}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Score</p>
                      <p className="text-2xl font-bold">{dept.avgScore}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="grid gap-6">
            {utilizationData.map((service) => (
              <Card key={service.service}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{service.service}</CardTitle>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">{service.usage}% utilization</Badge>
                      <Badge variant="secondary">★ {service.satisfaction}/5.0</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${service.usage}%` }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {service.usage}% of students have used this service
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="interventions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-green-600" />
                  <span>Recommended Interventions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700">High Priority</h4>
                  <p className="text-sm text-muted-foreground">
                    Increase counseling staff capacity - 79 students waiting for appointments
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-700">Medium Priority</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement stress management workshops during exam periods
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700">Low Priority</h4>
                  <p className="text-sm text-muted-foreground">
                    Expand peer support program to include more trained volunteers
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Intervention Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Immediate (1-2 weeks)</p>
                    <p className="text-sm text-muted-foreground">Crisis intervention protocols</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Short-term (1-3 months)</p>
                    <p className="text-sm text-muted-foreground">Staff training and resource allocation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Long-term (3-12 months)</p>
                    <p className="text-sm text-muted-foreground">Policy changes and program expansion</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
