import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Health from './pages/Health';
import Map from './pages/Map';
import Education from './pages/Education';
import Transport from './pages/Transport';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/health" element={<Health />} />
            <Route path="/education" element={<Education />} />
            <Route path="/transport" element={<Transport />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}