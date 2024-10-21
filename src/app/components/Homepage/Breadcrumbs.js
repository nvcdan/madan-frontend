import Link from 'next/link';

export default function Breadcrumbs({ paths }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === paths.length - 1 ? 'active' : ''}`}
            aria-current={index === paths.length - 1 ? 'page' : undefined}
          >
            {index < paths.length - 1 ? (
              <Link href={path.href}>{path.label}</Link>
            ) : (
              path.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}