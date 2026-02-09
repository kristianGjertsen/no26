import React from 'react';
import Box from '../../components/elements/Box';
import Button from '../../components/elements/Button';
import AboutInfoBox from '../aboutUs/AboutInfoBox';
import utsideLogo from '../../assets/SaloonImages/utsideLogo.webp';
import { ADDRESS, BOOKING_URL, EMAIL, GOOGLE_REVIEWS_URL, PHONE } from '../../constants';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <section className="border-[var(--border-width)] border-border rounded-[var(--radius-shell)] bg-surface p-6 sm:p-8 lg:p-10 shadow-elevated">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
          <div className="space-y-5 order-2 lg:order-1 max-w-xl">
            <div className="label-caps text-muted">Frisør på Innherredsveien</div>
            <h1 className="font-display text-4xl sm:text-5xl leading-tight">
              Klassisk håndverk, rolig atmosfære.
            </h1>
            <p className="text-muted text-lg">
              En liten salong med tid til deg. Presise klipp, dempede omgivelser og rådgivning som varer.
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

          <div className="order-1 lg:order-2">
            <div className="w-full max-w-3xl aspect-[3/2] overflow-hidden rounded-[var(--radius-image)] border-[var(--border-width)] border-border bg-surface shadow-elevated mx-auto">
              <img
                src={utsideLogo}
                alt="Fasaden til No. 26 Salong"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 items-start">
        <Box className="bg-accent-soft h-full space-y-3">
          <div className="label-caps text-muted">Kontakt</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted">Telefon</span>
                <a className="font-display text-2xl leading-tight" href={`tel:${PHONE}`}>{PHONE}</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted">E-post</span>
                <a className="font-semibold text-button break-words" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
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
        <Box className="bg-accent-soft space-y-3 h-full">
          <div className="label-caps text-muted">Adresse</div>
          <div className="space-y-2">
            <p className="font-display text-xl leading-snug">{ADDRESS}</p>
            <a
              className="text-button font-semibold"
              href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
            >
              Åpne i Google Maps
            </a>
          </div>
          <div className="border-[var(--border-width)] border-border rounded-[var(--radius-card)] overflow-hidden h-48">
            <iframe
              title="Kart til No. 26 Salong"
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed&z=16`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Box>
      </section>

      <AboutInfoBox />
    </div>
  );
};

export default HomePage;
