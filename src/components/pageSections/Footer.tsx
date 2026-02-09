import React from 'react';
import Button from '../elements/Button';
import Box from '../elements/Box';
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

const Footer: React.FC = () => {
  return (
    <footer className="border-t-[var(--border-width)] border-border bg-[color:var(--color-header)] px-7 sm:px-10 lg:px-14 py-10 mt-4 text-text">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="label-caps text-muted">Kontakt</div>
            <h2 className="font-display text-3xl">No. 26 Salong</h2>
            <p className="text-muted max-w-xl">
              Klassisk frisørhåndverk i rolige omgivelser på Innherredsveien. Bestill time på nett eller ta kontakt direkte.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Box className="bg-surface">
              <div className="label-caps text-muted mb-2">Kontakt oss</div>
              <div className="space-y-1">
                <a className="block font-semibold" href={`tel:${PHONE}`}>{PHONE}</a>
                <a className="block text-button font-semibold" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </Box>
            <Box className="bg-surface">
              <div className="label-caps text-muted mb-2">Besøk</div>
              <p className="font-semibold">{ADDRESS}</p>
              <a
                className="text-button font-semibold inline-flex items-center gap-2"
                href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
              >
                Se i Google Maps
                <span aria-hidden>→</span>
              </a>
            </Box>
          </div>
          <Button href={BOOKING_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            Bestill time på nett
          </Button>
        </div>

        <Box className="bg-surface">
          <div className="label-caps text-muted mb-3">Åpningstider</div>
          <ul className="space-y-2">
            {hours.map((item) => (
              <li key={item.day} className="flex justify-between text-sm sm:text-base">
                <span>{item.day}</span>
                <span className="text-muted">{item.time}</span>
              </li>
            ))}
          </ul>
        </Box>
      </div>

    </footer>
  );
};

export default Footer;
