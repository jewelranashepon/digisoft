'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { submitPackageRequest } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { calculateTotalPrice } from '@/data/service-price';

interface CustomPackageFormProps {
  selectedServices: string[];
  packageType?: string;
}

export function CustomPackageForm({
  selectedServices,
  packageType,
}: CustomPackageFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    message: '',
  });

  const totalPrice = calculateTotalPrice(selectedServices);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      toast({
        title: 'No services selected',
        description: 'Please select at least one service before submitting.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitPackageRequest({
        business_name: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        selected_services: selectedServices,
        total_price: totalPrice,
        package_type: packageType,
      });

      if (result.success) {
        toast({
          title: 'Request Submitted!',
          description: 'We will contact you shortly to discuss your package.',
        });

        setFormData({
          businessName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        toast({
          title: 'Submission Failed',
          description: result.error || 'Please try again later.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-900">
          Your Information
        </CardTitle>
        <p className="text-sm text-gray-500">
          Please provide accurate details so we can contact you.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Business Name */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-700">
              Business Name *
            </Label>
            <Input
              placeholder="Your business name"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              required
              disabled={isSubmitting}
              className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <Input
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              disabled={isSubmitting}
              className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <Input
              type="tel"
              placeholder="+880 1XXX-XXXXXX"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              disabled={isSubmitting}
              className="h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-700">
              Additional Information
            </Label>
            <Textarea
              placeholder="Briefly describe your goals, timeline, or requirements..."
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              disabled={isSubmitting}
              className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || selectedServices.length === 0}
            className="h-12 w-full rounded-xl font-semibold text-white
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-700 hover:to-indigo-700
              shadow-lg shadow-blue-500/30
              transition-all disabled:opacity-60 disabled:shadow-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Request…
              </>
            ) : (
              'Submit Package Request'
            )}
          </Button>

          {/* Helper */}
          {selectedServices.length === 0 && (
            <p className="text-center text-sm text-gray-500">
              Please select at least one service to continue
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
