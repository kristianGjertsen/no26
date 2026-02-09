import React from 'react';
import Box from '../../components/elements/Box';
import AboutInfoBox from './AboutInfoBox';
import Button from '../../components/elements/Button';
import { ADDRESS, BOOKING_URL, EMAIL, PHONE } from '../../constants';

//img
import InnsideMedPerson from '../../assets/SaloonImages/InnsideMedPerson.webp';
import flagg from '../../assets/SaloonImages/Flagg.webp';
import utside from '../../assets/SaloonImages/utsideLogo.webp';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <AboutInfoBox />

      <Box className="bg-surface-soft">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-3">
            <div className="label-caps text-muted">Historien</div>
            <h2 className="font-display text-3xl">En nabolagssalong med klassisk uttrykk.</h2>
            <p className="text-muted">
              No. 26 ble etablert for å gi kunder en rolig, personlig salongopplevelse. Interiør og fasade følger
              samme linje: dempede farger, gode materialer og tid til hver kunde.
            </p>
            <p className="text-muted">
              Vi holder oss oppdatert på teknikker, men bevarer det klassiske formspråket. Det gir frisyrer som kler deg
              over tid, ikke bare neste uke.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button href={BOOKING_URL} target="_blank" rel="noreferrer">
                Bestill time
              </Button>
              <Button href="/kontakt" variant="secondary">
                Kontakt oss
              </Button>
            </div>
            {/* Bilde: fasade */}
              <img
                src={utside}
                alt="Fasade med logo"
                className="max-h-full max-w-full object-contain rounded-[var(--radius-image)]"
              />
          </div>

          <Box className="bg-surface">
              <img
                src={flagg}
                alt="Flagg utenfor salongen"
                className="h-auto w-auto object-contain rounded-[var(--radius-image)]"
              />
          </Box>
        </div>
      </Box>

      <Box className="bg-surface">
        <div className="space-y-4">
          <div className="label-caps text-muted">Her finner du oss</div>
          <h2 className="font-display text-3xl">Innherredsveien 26, Trondheim.</h2>
          <p className="text-muted">Åpne kartet og legg ruta før timen.</p>
          <div className="border-[var(--border-width)] border-border overflow-hidden h-64 sm:h-120 max-w-3xl">
            <iframe
              title="Kart til No. 26 Salong"
              src="https://www.google.com/maps?q=Innherredsveien+26,+7042+Trondheim&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AboutUs;
