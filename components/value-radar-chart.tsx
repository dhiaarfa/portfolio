'use client'

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'
import { Globe, Ruler, Zap, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const data = [
  { subject: 'Communication', Dhia: 95, Partner: 65 },
  { subject: 'Creativity', Dhia: 92, Partner: 70 },
  { subject: 'Reliability', Dhia: 98, Partner: 60 },
  { subject: 'Methodology', Dhia: 90, Partner: 45 },
  { subject: 'Multilingual', Dhia: 88, Partner: 35 },
  { subject: 'Cultural Fit', Dhia: 94, Partner: 55 },
]

const valueProps = [
  { Icon: Globe, titleKey: 'radarValue1Title', descKey: 'radarValue1Desc' },
  { Icon: Ruler, titleKey: 'radarValue2Title', descKey: 'radarValue2Desc' },
  { Icon: Zap, titleKey: 'radarValue3Title', descKey: 'radarValue3Desc' },
  { Icon: CheckCircle, titleKey: 'radarValue4Title', descKey: 'radarValue4Desc' },
]

export default function ValueRadarChart() {
  const { t } = useLanguage()
  return (
    <section className="py-16 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            {t('radarLabel')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {t('radarTitle')}
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
            {t('radarDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ fill: '#475569', fontSize: 9 }}
                />
                <Radar
                  name="Mohamed Dhia"
                  dataKey="Dhia"
                  stroke="var(--site-accent)"
                  fill="var(--site-accent)"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
                <Radar
                  name="Client partner baseline"
                  dataKey="Partner"
                  stroke="#475569"
                  fill="#475569"
                  fillOpacity={0.1}
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                />
                <Legend wrapperStyle={{ color: '#94a3b8', fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    background: '#0f172a',
                    border: '1px solid #1e293b',
                    borderRadius: '8px',
                    color: '#f1f5f9',
                    fontSize: '12px',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Value props list */}
          <div className="flex flex-col gap-4">
            {valueProps.map((item) => (
              <div key={item.titleKey} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-accent">
                  <item.Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t(item.titleKey)}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{t(item.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

