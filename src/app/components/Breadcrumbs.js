import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function Breadcrumbs({ paths }) {
  return (
    <nav aria-label="breadcrumb" className="custom-breadcrumb-nav">
      <ol className="custom-breadcrumb">
        {paths.map((path, index) => (
          <li
            key={index}
            className={`custom-breadcrumb-item ${index === paths.length - 1 ? 'custom-breadcrumb-active' : ''}`}
            aria-current={index === paths.length - 1 ? 'page' : undefined}
          >
            {index < paths.length - 1 ? (
              <>
                <Link href={path.href}>{path.label}</Link>
                <FaChevronRight className="custom-breadcrumb-icon" />
              </>
            ) : (
              path.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}