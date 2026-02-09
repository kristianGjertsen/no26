import React from 'react';
import Button from '../elements/Button';
import { ADDRESS, BOOKING_URL, EMAIL, PHONE } from '../../constants';

const hours = [
  { day: 'Mandag', time: '10:00 – 18:00' },
  { day: 'Tirsdag', time: '12:00 – 18:00' },
  { day: 'Onsdag', time: '10:00 – 18:00' },
  { day: 'Torsdag', time: 'Stengt' },
  { day: 'Fredag', time: '12:00 – 18:00' },
  { day: 'Lørdag', time: '10:00 – 14:00' },
  { day: 'Søndag', time: 'Stengt' }
];

const IconPhone = () => (
  <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t-[var(--border-width)] border-border bg-[color:var(--color-header)] text-text mt-6">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 py-8 sm:py-10 grid gap-8 sm:grid-cols-[1.2fr_0.9fr]">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="label-caps text-muted">Kontakt</div>
            <h2 className="font-display text-2xl">No. 26 Salong</h2>
            <p className="text-muted text-sm max-w-xl">
              Klassisk frisørhåndverk i rolige omgivelser på Innherredsveien. Bestill time på nett eller ta kontakt
              direkte.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-3">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-button text-[color:var(--color-button-text)] px-4 py-2 text-base sm:text-sm font-semibold shadow-elevated sm:flex-1"
              href={`tel:${PHONE}`}
            >
              <IconPhone />
              <span>{PHONE}</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border-[var(--border-width)] border-border bg-button px-4 py-2 text-base sm:text-sm font-semibold sm:flex-1"
              href={`mailto:${EMAIL}`}
            >
              <IconMail />
              <span>{EMAIL}</span>
            </a>
          </div>
          <div className="text-sm space-y-1">
            <div className="font-semibold">{ADDRESS}</div>
            <a
              className="inline-flex items-center gap-2 text-button font-semibold"
              href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
            >
              Se i Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>
          <Button href={BOOKING_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            Bestill time på nett
          </Button>
        </div>

        <div className="space-y-3">
          <div className="label-caps text-muted">Åpningstider</div>
          <ul className="divide-y divide-border border-[var(--border-width)] border-border rounded-[var(--radius-shell)] overflow-hidden bg-surface">
            {hours.map((item) => (
              <li key={item.day} className="flex justify-between px-4 py-2 text-sm sm:text-base">
                <span>{item.day}</span>
                <span className="text-muted">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
