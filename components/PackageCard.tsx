import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Package } from "@/data/packages";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { calculateTotalPrice } from "@/data/service-price";

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  const totalPrice = calculateTotalPrice(pkg.serviceIds);

  return (
    <Card
      className={`relative flex flex-col h-full transition-all hover:shadow-lg ${
        pkg.isPopular
          ? "border-2 border-blue-500 shadow-lg scale-105"
          : "border-gray-200"
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

      <CardFooter className="pt-4 flex flex-col gap-3">
        {/* Purchase Button – Primary CTA */}
        <Link href={`/checkout?package=${pkg.id}`} className="w-full">
          <Button
            size="lg"
            className={`w-full text-white font-semibold transition-all
        ${
          pkg.isPopular
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30"
            : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-md shadow-emerald-500/30"
        }
      `}
          >
            Purchase Now
          </Button>
        </Link>

        {/* Customize Button – Secondary CTA */}
        <Link href={`/custom-package?package=${pkg.id}`} className="w-full">
          <Button
            size="lg"
            variant="outline"
            className="w-full border-2 border-gray-300 text-gray-700
        hover:bg-gray-100 hover:border-gray-400 transition-all"
          >
            Customize Package
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
