import Navbar from '@/app/components/Navbar';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: 'MADAN | Preturi',
  description: 'Descoperiți produsul principal oferit de MADAN.',
};

export default function Produs() {
  const breadcrumbPaths = [
    { href: '/', label: 'Acasă' },
    { href: '/preturi', label: 'Preturi' },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Breadcrumbs paths={breadcrumbPaths} />
        <h1>Preturi</h1>
        <p>Detalii despre produsul principal oferit de MADAN.</p>
      </div>
    </>
  );
}