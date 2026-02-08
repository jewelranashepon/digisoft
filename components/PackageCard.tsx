import Link from 'next/link';
import { Check, Star } from 'lucide-react';
import { Package } from '@/data/packages';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { calculateTotalPrice } from '@/data/service-price';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  const totalPrice = calculateTotalPrice(pkg.serviceIds);

  return (
    <Card
      className={`relative flex flex-col h-full transition-all hover:shadow-lg ${
        pkg.isPopular
          ? 'border-2 border-blue-500 shadow-lg scale-105'
          : 'border-gray-200'
      }`}
    >
      {pkg.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-500 text-white px-4 py-1 flex items-center gap-1">
            <Star className="h-3 w-3 fill-current" />
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
        <CardDescription className="text-base mt-2">
          {pkg.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">
              ${totalPrice.toLocaleString()}
            </span>
            <span className="text-gray-500">starting from</span>
          </div>
        </div>

        <div className="space-y-3">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Link href={`/custom-package?package=${pkg.id}`} className="w-full">
          <Button
            className="w-full"
            size="lg"
            variant={pkg.isPopular ? 'default' : 'outline'}
          >
            Customize Package
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
