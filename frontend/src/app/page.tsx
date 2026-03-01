import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, LayoutDashboard, ArrowRight, Activity } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Background gradient blur */}
        <div className="absolute inset-0 -z-10 mx-auto max-w-lg blur-[100px] sm:max-w-3xl opacity-20 pointer-events-none">
          <div className="aspect-[1097/845] w-full bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full" />
        </div>

        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300">
            <Activity className="mr-2 h-4 w-4" />
            AI-Powered Intelligence Engine
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl text-slate-50">
            Intelligent Grievance <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 drop-shadow-sm">
              Classification
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Automatically classify, prioritize, and summarize hostel grievances using advanced semantic clustering and deep learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link href="/submit" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl">
            <Card className="h-full border-slate-800 bg-slate-900/50 backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] group-hover:-translate-y-1 group-hover:border-indigo-500/50 group-hover:bg-slate-900/80">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] text-white">
                  <AlertCircle className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl text-slate-100 flex items-center justify-between">
                    Submit Grievance
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-indigo-400" />
                  </CardTitle>
                  <CardDescription className="text-base text-slate-400 leading-relaxed">
                    File a new issue. The AI analyzes semantic meaning to determine urgency and systemic impact instantly.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl">
            <Card className="h-full border-slate-800 bg-slate-900/50 backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] group-hover:-translate-y-1 group-hover:border-violet-500/50 group-hover:bg-slate-900/80">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] text-white">
                  <LayoutDashboard className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl text-slate-100 flex items-center justify-between">
                    Admin Intelligence
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-violet-400" />
                  </CardTitle>
                  <CardDescription className="text-base text-slate-400 leading-relaxed">
                    Monitor real-time prioritization pipelines, SLA breaches, and density-based clustering models.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
