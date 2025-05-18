import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import { useState } from 'react';

type Company = {
  id: string;
  ticker: string;
  name: string;
  legal_name: string;
  stock_exchange: string;
  short_description: string;
  long_description: string;
  company_url: string;
  business_address: string;
  business_phone_no: string;
  entity_legal_form: string;
  latest_filing_date: string;
  hq_country: string;
  employees: number;
  sector: string;
  industry_category: string;
  industry_group: string;
  thea_enabled: boolean;
  legacy_sector: string;
  legacy_industry_category: string;
  legacy_industry_group: string;
  first_stock_price_date: string;
  last_stock_price_date: string;
};

export type WidgetProps = {
  data: Company[];
};

const CompanySelector: React.FC<{
  companies: Company[];
  value: string;
  onSelect: (ticker: string) => void;
}> = ({ companies, value, onSelect }) => (
  <select
    className="w-full p-1 text-sm border rounded bg-white mb-2"
    value={value}
    onChange={e => onSelect(e.target.value)}
  >
    <option value="">Select framework...</option>
    {companies.map(company => (
      <option key={company.id} value={company.ticker}>
        {company.name} ({company.ticker})
      </option>
    ))}
  </select>
);

const CompanyInfoWidget: React.FC<{ companies: Company[] }> = ({
  companies,
}) => {
  const [selectedTicker, setSelectedTicker] = useState('');
  const company = companies.find(c => c.ticker === selectedTicker);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-2">
        <CompanySelector
          companies={companies}
          value={selectedTicker}
          onSelect={setSelectedTicker}
        />
      </div>
      <div className="flex-1 overflow-auto min-h-0 p-4 text-sm">
        {company && (
          <div className="space-y-2">
            <div>
              <b>Ticker</b>: {company.ticker}
            </div>
            <div>
              <b>Name</b>: {company.name}
            </div>
            <div>
              <b>Legal name</b>: {company.legal_name}
            </div>
            <div>
              <b>Stock exchange</b>: {company.stock_exchange}
            </div>
            <div>
              <b>Short description</b>: {company.short_description}
            </div>
            <div>
              <b>Long description</b>: {company.long_description}
            </div>
            <div>
              <b>Web</b>: {company.company_url}
            </div>
            <div>
              <b>Business address</b>: {company.business_address}
            </div>
            <div>
              <b>Business phone</b>: {company.business_phone_no}
            </div>
            <div>
              <b>Entity legal form</b>: {company.entity_legal_form}
            </div>
            <div>
              <b>Latest filing date</b>: {company.latest_filing_date}
            </div>
            <div>
              <b>Inc country</b>: {company.hq_country}
            </div>
            <div>
              <b>Employees</b>: {company.employees}
            </div>
            <div>
              <b>Sector</b>: {company.sector}
            </div>
            <div>
              <b>Industry category</b>: {company.industry_category}
            </div>
            <div>
              <b>Industry group</b>: {company.industry_group}
            </div>
            <div>
              <b>Thea enabled</b>: {company.thea_enabled ? 'true' : 'false'}
            </div>
            <div>
              <b>Legacy sector</b>: {company.legacy_sector}
            </div>
            <div>
              <b>Legacy industry category</b>:{' '}
              {company.legacy_industry_category}
            </div>
            <div>
              <b>Legacy industry group</b>: {company.legacy_industry_group}
            </div>
            <div>
              <b>First stock_price_date</b>: {company.first_stock_price_date}
            </div>
            <div>
              <b>Last stock_price_date</b>: {company.last_stock_price_date}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Widget: React.FC<WidgetProps> = ({ data }) => {
  const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    a: <CompanyInfoWidget companies={data} />,
    b: <CompanyInfoWidget companies={data} />,
    c: <CompanyInfoWidget companies={data} />,
  };

  return (
    <div className="h-screen w-full">
      <Mosaic<string>
        renderTile={(id, path) => (
          <MosaicWindow<string> path={path} title="Company info">
            {ELEMENT_MAP[id]}
          </MosaicWindow>
        )}
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
