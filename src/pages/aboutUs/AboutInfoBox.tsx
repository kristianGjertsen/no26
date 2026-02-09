import React from 'react';
import Box from '../../components/elements/Box';
import Button from '../../components/elements/Button';
import inngangPerson from '../../assets/SaloonImages/inngangMedPerson.webp';
import innsidePerson from '../../assets/SaloonImages/InnsideMedPerson.webp';
import { BOOKING_URL } from '../../constants';

const promises = [
  'Rolig salongopplevelse',
  'Klassiske klipp og farger som varer',
  'Personlig behandling'
];

const AboutInfoBox: React.FC = () => {
  return (
    <Box className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="label-caps text-muted">Om salongen</div>
          <h2 className="font-display text-3xl">No. 26  Hairstyle handler om ro, presisjon og klassisk stil.</h2>
          <p className="text-muted">
            Vi er et lite, erfarent team som prioriterer tid til rådgivning og rene linjer i håndverket. Interiøret og
            fasaden speiler uttrykket: dempet, rolig og tidløst.
          </p>
          <div className="bg-accent-soft border-[var(--border-width)] rounded-[var(--radius-shell)] border-border p-4">
            <div className="font-semibold mb-2">Våre løfter</div>
            <ul className="space-y-2 text-muted">
              {promises.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 bg-button" aria-hidden></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button href={BOOKING_URL} target="_blank" rel="noreferrer">
                Bestill time
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end w-full order-1 lg:order-2">
          <img
            src={inngangPerson}
            alt="Kunde ved inngang"
            className="border-[var(--border-width)] border-border shadow-elevated w-75 max-w-xs lg:max-w-sm h-auto object-cover rounded-[var(--radius-image)] lg:ml-auto"
          />
        </div>
      </div>
    </Box>
  );
};

export default AboutInfoBox;
