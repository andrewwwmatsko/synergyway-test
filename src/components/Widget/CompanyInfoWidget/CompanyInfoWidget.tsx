import type { Company } from '../../../lib/types/Company.type';

const CompanyInfoWidget: React.FC<{
  companies: Company[];
  selectedTicker: string;
}> = ({ companies, selectedTicker }) => {
  const company = companies.find(c => c.ticker === selectedTicker);
  return (
    <div className="h-full flex flex-col bg-white shadow rounded-lg border border-gray-200">
      <div className="flex-1 overflow-auto min-h-0 p-6">
        {!company ? (
          <div className="text-gray-400 text-center mt-10">
            Select a company to view info
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-6 mb-4">
                <div>
                  <div className="font-medium text-gray-500">Ticker</div>
                  <div className="text-gray-900">{company.ticker}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-500">Name</div>
                  <div className="text-gray-900">{company.name}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-500">Legal name</div>
                  <div className="text-gray-900">{company.legal_name}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-500">
                    Stock exchange
                  </div>
                  <div className="text-gray-900">{company.stock_exchange}</div>
                </div>
              </div>
              <div className="font-medium text-gray-500 mb-1">
                Short description
              </div>
              <div className="text-gray-800 mb-2">
                {company.short_description}
              </div>
              <div className="font-medium text-gray-500 mb-1">
                Long description
              </div>
              <div className="text-gray-800 whitespace-pre-line">
                {company.long_description}
              </div>
            </div>
            <hr className="my-2" />
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="font-medium text-gray-500">Web</div>
                <div className="text-blue-700 underline">
                  <a
                    href={`https://${company.company_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company.company_url}
                  </a>
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-500">
                  Business address
                </div>
                <div className="text-gray-900">{company.business_address}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">Business phone</div>
                <div className="text-gray-900">{company.business_phone_no}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">
                  Entity legal form
                </div>
                <div className="text-gray-900">{company.entity_legal_form}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">
                  Latest filing date
                </div>
                <div className="text-gray-900">
                  {company.latest_filing_date}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-500">Inc country</div>
                <div className="text-gray-900">{company.hq_country}</div>
              </div>
            </div>
            <hr className="my-2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="font-medium text-gray-500">Employees</div>
                <div className="text-gray-900">{company.employees}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">Sector</div>
                <div className="text-gray-900">{company.sector}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">
                  Industry category
                </div>
                <div className="text-gray-900">{company.industry_category}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">Industry group</div>
                <div className="text-gray-900">{company.industry_group}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">Thea enabled</div>
                <div className="text-gray-900">
                  {company.thea_enabled ? 'true' : 'false'}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-500">Legacy sector</div>
                <div className="text-gray-900">{company.legacy_sector}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">
                  Legacy industry category
                </div>
                <div className="text-gray-900">
                  {company.legacy_industry_category}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-500">
                  Legacy industry group
                </div>
                <div className="text-gray-900">
                  {company.legacy_industry_group}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-500">
                  First stock price date
                </div>
                <div className="text-gray-900">
                  {company.first_stock_price_date}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-500">
                  Last stock price date
                </div>
                <div className="text-gray-900">
                  {company.last_stock_price_date}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyInfoWidget;
