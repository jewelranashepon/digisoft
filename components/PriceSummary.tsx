'use client';

import { X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { calculateTotalPrice, getServiceById } from '@/data/service-price';

interface PriceSummaryProps {
  selectedServices: string[];
  onRemoveService: (serviceId: string) => void;
  showRemoveButtons?: boolean;
}

export function PriceSummary({
  selectedServices,
  onRemoveService,
  showRemoveButtons = true,
}: PriceSummaryProps) {
  const totalPrice = calculateTotalPrice(selectedServices);

  return (
    <Card className="sticky top-4 border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl">Price Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {selectedServices.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">
              No services selected yet
            </p>
          ) : (
            <>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {selectedServices.map((serviceId) => {
                  const service = getServiceById(serviceId);
                  if (!service) return null;
                  return (
                    <div
                      key={serviceId}
                      className="flex items-start justify-between gap-2 text-sm p-2 rounded hover:bg-gray-50"
                    >
                      <span className="flex-1">{service.name}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-semibold">
                          ${service.price.toLocaleString()}
                        </span>
                        {showRemoveButtons && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => onRemoveService(serviceId)}
                          >
                            <X className="h-4 w-4 text-gray-500" />
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <Separator />

              <div className="flex items-center justify-between pt-2">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-bold text-2xl text-blue-600">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                <p className="text-xs text-gray-600 text-center">
                  {selectedServices.length} service
                  {selectedServices.length !== 1 ? 's' : ''} selected
                </p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
