import React, { ReactNode } from 'react';

const ICON_COLOR = '#FFD600';
const LINE_COLOR = '#FFD600';

const assurances = [
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" stroke={ICON_COLOR} strokeWidth="2" fill="none"/><path d="M15 25l5 5 9-13" stroke={ICON_COLOR} strokeWidth="2" fill="none"/><path d="M22 14l3 6h-6l3-6z" stroke={ICON_COLOR} strokeWidth="1.5" fill="none"/></svg>
    ),
    label: 'PURITY PROMISE',
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" stroke={ICON_COLOR} strokeWidth="2" fill="none"/><path d="M22 14v12" stroke={ICON_COLOR} strokeWidth="2"/><circle cx="22" cy="32" r="2.5" fill={ICON_COLOR}/></svg>
    ),
    label: 'CERTIFIED NATURAL',
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" stroke={ICON_COLOR} strokeWidth="2" fill="none"/><circle cx="22" cy="22" r="7" stroke={ICON_COLOR} strokeWidth="1.5" fill="none"/></svg>
    ),
    label: 'ETHICAL SOURCING',
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" stroke={ICON_COLOR} strokeWidth="2" fill="none"/><rect x="16" y="16" width="12" height="12" stroke={ICON_COLOR} strokeWidth="1.5" fill="none"/></svg>
    ),
    label: 'AURA TUNED',
  },
  {
    icon: (
      <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" stroke={ICON_COLOR} strokeWidth="2" fill="none"/><path d="M15 32h14M22 14v18" stroke={ICON_COLOR} strokeWidth="1.5"/></svg>
    ),
    label: 'FREE DELIVERY',
  },
];

export default function ProductAssuranceBar() {
  return (
    <div className="w-screen flex justify-center items-center pt-8 pb-14" style={{background:'#F9F6F2', marginLeft:'calc(50% - 50vw)', marginRight:'calc(50% - 50vw)'}}>
      {/* Mobile: 2 rows (3+2), Desktop: 1 row */}
      <div className="w-full max-w-none px-2 md:px-4">
        {/* Mobile layout */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex w-full justify-between items-stretch gap-0">
            {assurances.slice(0, 3).map((a) => (
              <div key={a.label} className="flex flex-col items-center justify-center" style={{paddingLeft:0, paddingRight:0}}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center mx-auto">
                    {a.icon}
                  </div>
                  <span className="mt-3 md:mt-5 text-xs md:text-lg font-bold text-black tracking-wide uppercase text-center leading-tight mobile-label" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>
                    {a.label.split(' ').map((word, i) => (
                      <span key={i} className="block md:inline">{word}</span>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center items-stretch gap-x-24">
            {assurances.slice(3).map((a) => (
              <div key={a.label} className="flex flex-col items-center justify-center" style={{paddingLeft:0, paddingRight:0}}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center mx-auto">
                    {a.icon}
                  </div>
                  <span className="mt-3 md:mt-5 text-xs md:text-lg font-bold text-black tracking-wide uppercase text-center leading-tight mobile-label" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>
                    {a.label.split(' ').map((word, i) => (
                      <span key={i} className="block md:inline">{word}</span>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop layout (unchanged) */}
        <div className="hidden md:flex w-full max-w-none justify-between items-stretch gap-0">
          {assurances.reduce<ReactNode[]>((acc, a, idx) => {
            acc.push(
              <div key={a.label} className="flex flex-col items-center justify-center flex-1 min-w-0" style={{minWidth:0, flex:'1 1 0%', paddingLeft:0, paddingRight:0}}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center mx-auto">
                    {a.icon}
                  </div>
                  <span className="mt-3 md:mt-5 text-xs md:text-lg font-bold text-black tracking-wide uppercase text-center leading-tight" style={{letterSpacing: '0.08em', fontFamily: 'Playfair Display, serif'}}>{a.label}</span>
                </div>
              </div>
            );
            if (idx < assurances.length - 1) {
              acc.push(
                <div key={`sep-${idx}`} className="hidden md:flex items-center" style={{height:140, width:0, marginLeft:0, marginRight:0}}>
                  <div className="h-24 border-r" style={{borderColor: LINE_COLOR, marginLeft:0, marginRight:0}} />
                </div>
              );
            }
            return acc;
          }, [])}
        </div>
      </div>
    </div>
  );
} 