import React from 'react';
import Box from '../../components/elements/Box';
import Button from '../../components/elements/Button';
import { BOOKING_URL, PHONE } from '../../constants';

type PriceItem = { name: string; price: string };

const sections: { title: string; items: PriceItem[] }[] = [
  {
    title: 'Klipp',
    items: [
      { name: 'Herreklipp', price: 'kr 780,-' },
      { name: 'Dameklipp', price: 'kr 950,-' },
      { name: 'Barneklipp (u. 10 år)', price: 'kr 660,-' },
      { name: 'Lugg', price: 'kr 300,-' },
      { name: 'Skjegg', price: 'kr 380,-' }
    ]
  },
  {
    title: 'Fargebehandlinger',
    items: [
      { name: 'Ettervekst (maks 2 cm)', price: 'fra kr 1650,-' },
      { name: 'Gloss', price: 'fra kr 1200,-' },
      { name: 'Farge helhår', price: 'fra kr 2000,-' },
      { name: 'Hettestriping', price: 'fra kr 1650,-' },
      { name: 'Foliestriping', price: 'fra kr 2100,-' },
      { name: 'Avfarging', price: 'fra kr 600,-' }
    ]
  },
  {
    title: 'Permanent',
    items: [
      { name: 'Kort hår', price: 'fra kr 1650,-' },
      { name: 'Langt hår', price: 'fra kr 1850,-' }
    ]
  },
  {
    title: 'Kurer',
    items: [
      { name: 'Etterbehandlingskur', price: 'kr 195,-' },
      { name: 'Kur med massasje', price: 'kr 380,-' }
    ]
  },
  {
    title: 'Diverse',
    items: [
      { name: 'Balsam', price: 'kr 90,-' },
      { name: 'Styling og oppsett (per time)', price: 'kr 1500,-' },
      { name: 'Føhn og styling', price: 'kr 630,-' },
      { name: 'Glatting', price: 'kr 580,-' }
    ]
  }
];

const PricesPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <Box className="bg-surface-soft space-y-4">
        <div className="label-caps text-muted">Priser</div>
        <h1 className="font-display text-4xl leading-tight">Enkle priser i rolige omgivelser.</h1>
        <p className="text-muted max-w-3xl">
          Vi holder til i en flott bygård nær Solsiden. Lokalene er lyse og luftige, og med bare én frisør får du en
          rolig opplevelse. Prisene under er veiledende fra-priser. «Ikke møtt» faktureres 50 % av booket tid.
        </p>
        <p className="text-muted max-w-3xl">
          For å se ledige tider må du logge inn i bookingsystemet. Gå direkte hit:{' '}
          <a
            className="text-button font-semibold"
            href="https://hairstyle.bestille.no/OnCust2/#!/"
            target="_blank"
            rel="noreferrer"
          >
            Åpne bookingsystemet
          </a>
          <p>Finner du ikke noe som passer, ring oss på {PHONE}.</p>
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={BOOKING_URL} target="_blank" rel="noreferrer">
            Bestill time
          </Button>
        </div>
        <div className="text-sm text-muted">Priser justert fra 1.1.2026.</div>
      </Box>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Box key={section.title} className="bg-surface space-y-3">
            <div className="font-display text-xl">{section.title}</div>
            <ul className="divide-y divide-border border-[var(--border-width)] border-border rounded-[var(--radius-card)] overflow-hidden">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between px-4 py-2">
                  <span>{item.name}</span>
                  <span className="font-semibold text-button">{item.price}</span>
                </li>
              ))}
            </ul>
          </Box>


        ))}
      </div>
      <Box className="bg-surface space-y-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="label-caps text-muted">Bestill time</div>
          <p className="text-muted">Logg inn i bookingsystemet <a
            className="text-button font-bold underline"
            href="https://hairstyle.bestille.no/OnCust2/#!/"
            target="_blank"
            rel="noreferrer"
          >
            her          </a> for å se ledige tider. Ring oss hvis du ikke finner noe som passer.</p>
        </div>
        <Button href={BOOKING_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
          Bestill time
        </Button>
      </Box>
    </div>
  );
};

export default PricesPage;
