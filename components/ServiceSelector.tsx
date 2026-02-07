'use client';

import { Code, Palette, TrendingUp, MapPin } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getServicesByCategory, Service, serviceCategories, ServiceCategory } from '@/data/service-price';

interface ServiceSelectorProps {
  selectedServices: string[];
  onServiceToggle: (serviceId: string) => void;
}

const categoryIcons: Record<ServiceCategory, React.ReactNode> = {
  'Web Development': <Code className="h-5 w-5" />,
  'Web Design': <Palette className="h-5 w-5" />,
  'Digital Marketing': <TrendingUp className="h-5 w-5" />,
  'Local SEO': <MapPin className="h-5 w-5" />,
};

export function ServiceSelector({
  selectedServices,
  onServiceToggle,
}: ServiceSelectorProps) {
  return (
    <div className="space-y-6">
      {serviceCategories.map((category) => {
        const services = getServicesByCategory(category);
        return (
          <Card key={category} className="border-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                {categoryIcons[category]}
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <ServiceCheckbox
                    key={service.id}
                    service={service}
                    checked={selectedServices.includes(service.id)}
                    onToggle={() => onServiceToggle(service.id)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

interface ServiceCheckboxProps {
  service: Service;
  checked: boolean;
  onToggle: () => void;
}

function ServiceCheckbox({ service, checked, onToggle }: ServiceCheckboxProps) {
  return (
    <div
      className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
        checked
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      }`}
      onClick={onToggle}
    >
      <Checkbox
        id={service.id}
        checked={checked}
        onCheckedChange={onToggle}
        className="mt-1"
      />
      <div className="flex-1 min-w-0">
        <label
          htmlFor={service.id}
          className="text-sm font-medium leading-none cursor-pointer block"
        >
          {service.name}
        </label>
        {service.description && (
          <p className="text-xs text-gray-500 mt-1">{service.description}</p>
        )}
        <p className="text-sm font-semibold text-blue-600 mt-2">
          ${service.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
