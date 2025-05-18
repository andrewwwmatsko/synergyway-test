import type { Company } from '../../../lib/types/Company.type';

const CompanySelector: React.FC<{
  companies: Company[];
  value: string;
  onSelect: (ticker: string) => void;
}> = ({ companies, value, onSelect }) => (
  <select
    className="w-[120px] sm:w-[180px] xl:w-3xs p-0.5 sm:p-0 text-xs sm:text-sm border rounded bg-white my-2"
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

export default CompanySelector;
