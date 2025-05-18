import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import type { MosaicPath } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import { useState, useCallback } from 'react';
import type { Company } from '../../lib/types/Company.type';
import CompanySelector from './CompanySelector/CompanySelector';
import CompanyInfoWidget from './CompanyInfoWidget/CompanyInfoWidget';
import MosaicToolbarControls from './MosaicToolbarControls';

export type WidgetProps = {
  data: Company[];
};

type WindowState = Record<string, string>;

const Widget: React.FC<WidgetProps> = ({ data }) => {
  const [windowState, setWindowState] = useState<WindowState>({
    a: '',
    b: '',
    c: '',
  });

  const handleSelect = useCallback((id: string, ticker: string) => {
    setWindowState(prev => ({ ...prev, [id]: ticker }));
  }, []);

  const createNode = useCallback(() => {
    const newId = `window-${Date.now()}`;
    setWindowState(prev => ({ ...prev, [newId]: '' }));
    return newId;
  }, []);

  const renderTile = useCallback(
    (id: string, path: MosaicPath) => {
      // @ts-ignore
      return (
        <MosaicWindow<string>
          path={path}
          // @ts-ignore
          title={
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base sm:inline hidden">
                Company info
              </span>
              <CompanySelector
                companies={data}
                value={windowState[id] || ''}
                onSelect={ticker => handleSelect(id, ticker)}
              />
            </div>
          }
          toolbarControls={<MosaicToolbarControls path={path} />}
          createNode={createNode}
        >
          <CompanyInfoWidget
            companies={data}
            selectedTicker={windowState[id] || ''}
          />
        </MosaicWindow>
      );
    },
    [data, windowState, handleSelect, createNode]
  );

  return (
    <div className="h-screen w-full">
      <Mosaic<string>
        renderTile={renderTile}
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
