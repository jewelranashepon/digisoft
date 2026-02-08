import Link from "next/link";
import { Check, Star, ShoppingCart, Settings2 } from "lucide-react";
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

  // Professional Dark Blue Palette Styles
  const cardStyles = pkg.isPopular
    ? "border-slate-800 shadow-2xl scale-105 z-10 bg-slate-50/50 ring-1 ring-slate-900/5"
    : "border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-md";

  const buyButtonStyles = pkg.isPopular
    ? "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-200"
    : "bg-blue-900 hover:bg-blue-800 text-white shadow-md shadow-blue-100";

  return (
    <Card
      className={`relative flex flex-col h-full transition-all duration-500 rounded-xl overflow-hidden border-2 ${cardStyles}`}
    >
      {/* Popular indicator line */}
      {pkg.isPopular && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900" />
      )}

      {pkg.isPopular && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-slate-900 text-slate-50 border-none px-3 py-1 font-semibold tracking-wide">
            <Star className="h-3 w-3 mr-1.5 fill-slate-50" />
            Premium Choice
          </Badge>
        </div>
      )}

      <CardHeader className="pb-6 pt-8 px-8">
        <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">
          {pkg.name}
        </CardTitle>
        <CardDescription className="text-sm font-medium text-slate-500 mt-2 leading-relaxed">
          {pkg.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow px-8">
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight text-slate-900">
              ${totalPrice.toLocaleString()}
            </span>
            <span className="text-sm font-medium text-slate-400">/usd</span>
          </div>
          <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-[0.2em]">
            Professional Grade
          </p>
        </div>

        <div className="space-y-3.5">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <Check className="mt-1 h-4 w-4 text-blue-700 shrink-0" />
              <span className="text-sm text-slate-600 leading-tight">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-6 pb-8 px-8 flex flex-col gap-3">
        {/* Main CTA */}
        <Link href={`/packages/checkout?package=${pkg.id}`} className="w-full">
          <Button
            className={`w-full h-11 font-semibold transition-all duration-200 rounded-md active:scale-[0.98] ${buyButtonStyles}`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </Link>

        {/* Secondary CTA */}
        <Link href={`/custom-package?package=${pkg.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full h-11 font-semibold text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all rounded-md"
          >
            <Settings2 className="mr-2 h-4 w-4 text-slate-400" />
            Customize Plan
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
