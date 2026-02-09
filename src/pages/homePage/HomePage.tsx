import React from 'react';
import Box from '../../components/elements/Box';
import Button from '../../components/elements/Button';
import AboutInfoBox from '../aboutUs/AboutInfoBox';
import utsideLogo from '../../assets/SaloonImages/utsideLogo.webp';
import { ADDRESS, BOOKING_URL, EMAIL, GOOGLE_REVIEWS_URL, PHONE } from '../../constants';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center bg-surface border-[var(--border-width)] border-border p-8 shadow-elevated rounded-[var(--radius-shell)]">
        <div className="space-y-4">
          <div className="label-caps text-muted">Frisør på Innherredsveien</div>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight">
            Klassisk håndverk med rolig atmosfære.
          </h1>
          <p className="text-muted text-lg">
            Hos No. 26 Hairstyle får du en frisør som lytter, veileder og leverer tidløse resultater. Bestill time på nett eller kom innom salongen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={BOOKING_URL} target="_blank" rel="noreferrer">
              Bestill time på nett
            </Button>
            <Button href="/kontakt" variant="secondary">
              Kontakt oss
            </Button>
          </div>
        </div>
        <div className="relative flex justify-end">
          <img
            src={utsideLogo}
            alt="Fasaden til No. 26 Salong"
            className="w-full max-w-md border-[var(--border-width)] border-border shadow-elevated rounded-[var(--radius-image)]"
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Box className="bg-accent-soft">
          <div className="label-caps text-muted mb-2">Kontakt & åpningstider</div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <div className="font-semibold">Telefon</div>
              <a className="block font-semibold" href={`tel:${PHONE}`}>{PHONE}</a>
              <a className="text-button font-semibold" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="space-y-1 text-sm">
              <div className="font-semibold text-base">Åpningstider</div>
              <p>Mandag 10–18</p>
              <p>Tirsdag 12–18</p>
              <p>Onsdag 10–18</p>
              <p>Torsdag stengt</p>
              <p>Fredag 12–18</p>
              <p>Lørdag 10–14</p>
              <p>Søndag stengt</p>
            </div>
          </div>
        </Box>
        <Box className="bg-accent-soft">
          <div className="label-caps text-muted mb-2">Adresse</div>
          <p className="font-semibold">{ADDRESS}</p>
          <a className="text-button font-semibold" href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}>Se kart</a>
        </Box>
      </section>

      <AboutInfoBox />
    </div>
  );
};

export default HomePage;
