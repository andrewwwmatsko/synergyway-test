import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import { useState } from 'react';
import type { Company } from '../../lib/types/Company.type';
import CompanySelector from './CompanySelector/CompanySelector';
import CompanyInfoWidget from './CompanyInfoWidget/CompanyInfoWidget';

export type WidgetProps = {
  data: Company[];
};

const Widget: React.FC<WidgetProps> = ({ data }) => {
  const [selectedA, setSelectedA] = useState('');
  const [selectedB, setSelectedB] = useState('');
  const [selectedC, setSelectedC] = useState('');

  return (
    <div className="h-screen w-full">
      <Mosaic<string>
        renderTile={(id, path) => {
          let selectedTicker = '';
          let setSelectedTicker: (v: string) => void = () => {};
          if (id === 'a') {
            selectedTicker = selectedA;
            setSelectedTicker = setSelectedA;
          } else if (id === 'b') {
            selectedTicker = selectedB;
            setSelectedTicker = setSelectedB;
          } else if (id === 'c') {
            selectedTicker = selectedC;
            setSelectedTicker = setSelectedC;
          }
          // @ts-ignore
          return (
            <MosaicWindow<string>
              path={path}
              // @ts-ignore
              title={
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Company info</span>
                  <CompanySelector
                    companies={data}
                    value={selectedTicker}
                    onSelect={setSelectedTicker}
                  />
                </div>
              }
            >
              <CompanyInfoWidget
                companies={data}
                selectedTicker={selectedTicker}
              />
            </MosaicWindow>
          );
        }}
        initialValue={{
          direction: 'row',
          first: 'a',
          second: {
            direction: 'column',
            first: 'b',
            second: 'c',
          },
        }}
      />
    </div>
  );
};

export default Widget;
