import React, { useState } from 'react';
import { CalculatorState } from '../../lib/calculator';

import { User, Mail, Phone, MapPin, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Button } from '../ui/button';

interface ContactSectionProps {
  state: CalculatorState;
  onChange: (updates: Partial<CalculatorState>) => void;
}

export function ContactSection({ state, onChange }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', state);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isFormComplete =
    state.fullName.trim() &&
    state.email.trim() &&
    state.phone.trim() &&
    state.businessName.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          Contact Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-500" />
              Full Name *
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={state.fullName}
              onChange={(e) => onChange({ fullName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={state.email}
              onChange={(e) => onChange({ email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              Phone *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+61 2 1234 5678"
              value={state.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="suburb" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              Suburb / Postcode
            </Label>
            <Input
              id="suburb"
              type="text"
              placeholder="Sydney NSW 2000"
              value={state.suburb}
              onChange={(e) => onChange({ suburb: e.target.value })}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="businessName" className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-500" />
              Business Name *
            </Label>
            <Input
              id="businessName"
              type="text"
              placeholder="Your Business Name"
              value={state.businessName}
              onChange={(e) => onChange({ businessName: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <Label className="text-base font-semibold flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            Project Timeframe
          </Label>
          <Select
            value={state.projectTimeframe}
            onValueChange={(value) => onChange({ projectTimeframe: value })}
          >
            <option value="flexible">Flexible (12-15 Days)</option>
            <option value="asap">ASAP (7 Days)</option>
            <option value="urgent">Super Urgent (Under 24 Hours)</option>
          </Select>
        </div>

        <Button
          type="submit"
          disabled={!isFormComplete || submitted}
          className="w-full mt-8"
          size="lg"
        >
          {submitted ? (
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Submitted Successfully!
            </span>
          ) : (
            'Get Your Custom Quote'
          )}
        </Button>

        {submitted && (
          <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl animate-fade-in">
            <p className="text-sm text-green-800 text-center font-medium">
              Thank you for your submission! Our team will contact you shortly with a detailed quote.
            </p>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-4">
          * Required fields. We'll respond within 24 hours.
        </p>
      </div>
    </form>
  );
}
