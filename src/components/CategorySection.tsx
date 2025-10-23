import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface CategorySectionProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const CategorySection = ({ title, subtitle, icon, children }: CategorySectionProps) => {
  return (
    <section className="mb-12 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
              {icon}
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        <Button variant="ghost" size="sm" className="gap-1 group">
          See All
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;
