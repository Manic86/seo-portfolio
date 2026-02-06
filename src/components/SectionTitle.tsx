export default function SectionTitle({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) {
    return (
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p>
      </div>
    );
  }
  