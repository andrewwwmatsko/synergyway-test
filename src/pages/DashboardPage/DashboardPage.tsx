import type React from 'react';
import Container from '../../components/Container/Container';

export type DashboardPageProps = {};
import dashboardData from '../../FAKE-API/companies-lookup.json';
import { useEffect, useState } from 'react';
import Widget from '../../components/Widget/Widget';
import Loader from '../../components/Loader/Loader';

const DashboardPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setData(dashboardData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="h-full w-full m-0">
        {isLoading ? <Loader /> : <>{data && <Widget data={data} />}</>}
      </div>
    </Container>
  );
};

export default DashboardPage;
