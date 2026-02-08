'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getServiceById, calculateTotalPrice } from '@/data/service-price';

interface CustomPackageFormProps {
  packageType?: string;
  selectedServices?: string[]; // service IDs
  packageId?: string;
}

export function CustomPackageForm({
  packageType,
  selectedServices = [],
  packageId,
}: CustomPackageFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    message: '',
  });

  const isFormValid = formData.businessName.trim() && formData.email.trim();

  // Map selected service IDs to full service objects
  const fullServices = selectedServices
    .map(id => getServiceById(id))
    .filter(Boolean); // remove undefined

  const totalPrice = calculateTotalPrice(selectedServices);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toast({
        title: 'Missing required fields',
        description: 'Please complete the form.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderType: 'custom-package',
          customer: {
            name: formData.businessName,
            email: formData.email,
            phone: formData.phone,
            details: formData.message,
          },
          packageId,
          packageName: packageType,
          services: fullServices, // <-- full service details
          totalPrice,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setIsSuccess(true);

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
    } catch (error) {
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
    <Card>
      <CardHeader>
        <CardTitle>Your Information</CardTitle>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <p className="text-green-600 font-semibold text-center">
            ✅ Form submitted successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                placeholder="Your business name"
                value={formData.businessName}
                onChange={e =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={e =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project requirements..."
                rows={4}
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                'Submit Package Request'
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
