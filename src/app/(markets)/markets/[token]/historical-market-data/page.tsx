import DashboardLayout from 'layout/DashboardLayout';
import HistoricalMarketDataDefault from 'views/markets/historical-market-data';

export default function DefaultMarketsPage({ params }: { params: { token: string } }) {
  return (
    <DashboardLayout>
      <HistoricalMarketDataDefault token={params.token} />
    </DashboardLayout>
  );
}
