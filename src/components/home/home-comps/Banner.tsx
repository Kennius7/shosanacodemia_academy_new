'use client';

import { useState, useEffect } from 'react';
import { BannerProps } from '@/types';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const DEFAULT_TARGET = '2026-09-01T00:00:00';

export default function Banner({ targetDate: initialDate }: BannerProps) {
  const [targetDate, setTargetDate] = useState(initialDate || DEFAULT_TARGET);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(initialDate || DEFAULT_TARGET));

  // Fetch cohort end date from API (Firestore via serverless)
  useEffect(() => {
    async function fetchCohortDate() {
      try {
        const res = await fetch('/api/cohortEndDate');
        if (!res.ok) return;
        const data = await res.json() as { endDate?: string };
        if (data.endDate) {
          setTargetDate(data.endDate);
        }
      } catch {
        // fallback to initialDate / DEFAULT_TARGET
      }
    }
    fetchCohortDate();
  }, []);

  // Countdown timer
  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050A14] pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-transparent to-transparent" />
      {/* Top-left blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      {/* Bottom-right blob */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Applications Open
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Join the{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            next cohort
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Transform your career with intensive, project-driven software engineering training.
          Mentored by engineers from world-class companies. Built for Africa's tech future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#register"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-cyan-500/20 text-base"
          >
            Apply for This Cohort →
          </a>
          <a
            href="#curriculum"
            className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white font-medium rounded-xl transition-all duration-200 text-base"
          >
            View Curriculum
          </a>
        </div>

        {/* Countdown */}
        <div className="inline-block bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Cohort Starts In
          </p>
          <div className="flex gap-4 sm:gap-8 justify-center">
            {units.map(({ label, value }) => (
              <div key={label} className="text-center min-w-[56px] sm:min-w-[72px]">
                <div className="text-3xl sm:text-5xl font-black text-white tabular-nums leading-none mb-2">
                  {String(value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <span>✓ 200+ graduates placed</span>
          <span className="hidden sm:block">·</span>
          <span>✓ 95% employment rate</span>
          <span className="hidden sm:block">·</span>
          <span>✓ 6 companies hiring from us</span>
        </div>
      </div>
    </section>
  );
}
