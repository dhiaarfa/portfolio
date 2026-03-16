'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { TrendingUp, BarChart2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const data = [
  { stage: 'Before', yourBrand: 45, others: 45 },
  { stage: '6 months', yourBrand: 70, others: 52 },
  { stage: '12 months', yourBrand: 85, others: 60 },
  { stage: '18+ months', yourBrand: 95, others: 68 },
]

export default function TrainingImpactChart() {
  const { t } = useLanguage()
  return (
    <section className="py-16 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 text-center">
          {t('impactChartLabel')}
        </p>
        <h3 className="text-2xl font-bold text-white text-center mb-2">
          {t('impactChartTitle')}
        </h3>
        <p className="text-slate-400 text-sm text-center mb-10 max-w-md mx-auto">
          {t('impactChartDesc')}
        </p>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="stage" tick={{ fill: '#64748b', fontSize: 11 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  background: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  color: '#f1f5f9',
                  fontSize: '12px',
                }}
                formatter={(value: number) => [value, 'Brand growth index']}
              />
              <Bar dataKey="yourBrand" radius={[4, 4, 0, 0]} maxBarSize={40}>
                {data.map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Cell key={index} fill="var(--site-accent)" />
                ))}
              </Bar>
              <Bar dataKey="others" radius={[4, 4, 0, 0]} maxBarSize={40}>
                {data.map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Cell key={index} fill="#1e4d2b" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-900/50 text-accent mb-2">
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-accent mt-1">{t('impactChartYourBrand')}</p>
            <p className="text-xs text-slate-400 mt-1 leading-tight">
              {t('impactChartYourBrandDesc')}
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-700 text-slate-400 mb-2">
              <BarChart2 className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-slate-300 mt-1">{t('impactChartOthers')}</p>
            <p className="text-xs text-slate-400 mt-1 leading-tight">
              {t('impactChartOthersDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

