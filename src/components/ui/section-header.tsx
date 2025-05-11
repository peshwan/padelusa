
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  description,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'space-y-2 mb-6',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
