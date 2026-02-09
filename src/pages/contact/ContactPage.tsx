import React from 'react';
import Box from '../../components/elements/Box';
import Button from '../../components/elements/Button';
import { ADDRESS, BOOKING_URL, EMAIL, PHONE } from '../../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="label-caps text-muted">Kontakt</div>
        <h1 className="font-display text-4xl">Bestill time eller ta kontakt.</h1>
        <p className="text-muted max-w-2xl">
          Nettbooking er åpen døgnet rundt. Du kan også ringe, sende e-post eller stikke innom for en prat.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Button href={BOOKING_URL} target="_blank" rel="noreferrer">
            Åpne nettbooking
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Box className="bg-surface-warm">
          <div className="label-caps text-muted mb-2">Telefon & e-post</div>
          <a className="block font-semibold" href={`tel:${PHONE}`}>{PHONE}</a>
          <a className="text-button font-semibold" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </Box>

        <Box className="bg-surface-warm">
          <div className="label-caps text-muted mb-2">Besøk</div>
          <p className="font-semibold">{ADDRESS}</p>
          <a className="text-button font-semibold" href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}>Åpne kart</a>
        </Box>

        <Box className="bg-surface-warm">
          <div className="label-caps text-muted mb-2">Åpningstider</div>
          <ul className="space-y-1 text-sm">
            <li>Mandag: 10:00 – 18:00</li>
            <li>Tirsdag: 12:00 – 18:00</li>
            <li>Onsdag: 10:00 – 18:00</li>
            <li>Torsdag: Stengt</li>
            <li>Fredag: 12:00 – 18:00</li>
            <li>Lørdag: 10:00 – 14:00</li>
            <li>Søndag: Stengt</li>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default ContactPage;
