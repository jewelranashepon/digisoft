// 'use client';

// import { useSearchParams } from 'next/navigation';
// import { useState } from 'react';
// import { packageTabs } from '@/data/packages';
// import { calculateTotalPrice, services } from '@/data/service-price';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Check, Loader2 } from 'lucide-react';
// import PageBanner from '@/components/common/PageBanner';

// export default function CheckoutPage() {
//   const searchParams = useSearchParams();
//   const packageId = searchParams.get('package');

//   const allPackages = packageTabs.flatMap(tab => tab.packages);
//   const selectedPackage = allPackages.find(p => p.id === packageId);

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     details: '',
//   });

//   if (!selectedPackage) {
//     return <div className="py-32 text-center">Invalid package</div>;
//   }

//   const totalPrice = calculateTotalPrice(selectedPackage.serviceIds);
//   const includedServices = services.filter(s =>
//     selectedPackage.serviceIds.includes(s.id)
//   );

//   async function handleSubmit() {
//     if (!selectedPackage) return;
    
//     setLoading(true);

//     await fetch('/api/orders', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         customer: form,
//         packageId: selectedPackage.id,
//         packageName: selectedPackage.name,
//         services: includedServices,
//         totalPrice,
//       }),
//     });

//     setLoading(false);
//     setSuccess(true);
//   }

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <PageBanner
//         title="Checkout"
//         highlight="Summary"
//         breadcrumbs={[
//           { label: 'Home', href: '/' },
//           { label: 'Checkout' },
//         ]}
//       />

//       <div className="max-w-4xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">

//         {/* Summary */}
//         <Card>
//           <CardHeader>
//             <CardTitle>{selectedPackage.name}</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-3">
//             {includedServices.map(service => (
//               <div key={service.id} className="flex justify-between">
//                 <span className="flex gap-2">
//                   <Check className="h-4 w-4 text-green-600" />
//                   {service.name}
//                 </span>
//                 <span>${service.price}</span>
//               </div>
//             ))}
//             <div className="font-bold flex justify-between pt-4">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Form */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Client Information</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">

//             {success ? (
//               <p className="text-green-600 font-semibold text-center">
//                 ✅ Order submitted successfully!
//               </p>
//             ) : (
//               <>
//                 <input
//                   placeholder="Full Name"
//                   className="w-full border px-3 py-2 rounded"
//                   value={form.name}
//                   onChange={e => setForm({ ...form, name: e.target.value })}
//                 />

//                 <input
//                   placeholder="Email Address"
//                   className="w-full border px-3 py-2 rounded"
//                   value={form.email}
//                   onChange={e => setForm({ ...form, email: e.target.value })}
//                 />

//                 <textarea
//                   placeholder="Project Details"
//                   className="w-full border px-3 py-2 rounded min-h-[120px]"
//                   value={form.details}
//                   onChange={e => setForm({ ...form, details: e.target.value })}
//                 />

//                 <Button
//                   onClick={handleSubmit}
//                   disabled={loading}
//                   className="w-full bg-slate-900"
//                 >
//                   {loading ? (
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   ) : (
//                     'Confirm & Proceed'
//                   )}
//                 </Button>
//               </>
//             )}

//           </CardContent>
//         </Card>

//       </div>
//     </div>
//   );
// }


'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react'; // Added Suspense
import { packageTabs } from '@/data/packages';
import { calculateTotalPrice, services } from '@/data/service-price';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Loader2 } from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';

// 1. Move the main logic into a sub-component
function CheckoutContent() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get('package');

  const allPackages = packageTabs.flatMap(tab => tab.packages);
  const selectedPackage = allPackages.find(p => p.id === packageId);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    details: '',
  });

  if (!selectedPackage) {
    return <div className="py-32 text-center">Invalid package</div>;
  }

  const totalPrice = calculateTotalPrice(selectedPackage.serviceIds);
  const includedServices = services.filter(s =>
    selectedPackage.serviceIds.includes(s.id)
  );

  async function handleSubmit() {
    if (!selectedPackage) return;
    
    setLoading(true);

    await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer: form,
        packageId: selectedPackage.id,
        packageName: selectedPackage.name,
        services: includedServices,
        totalPrice,
      }),
    });

    setLoading(false);
    setSuccess(true);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle>{selectedPackage.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {includedServices.map(service => (
            <div key={service.id} className="flex justify-between">
              <span className="flex gap-2">
                <Check className="h-4 w-4 text-green-600" />
                {service.name}
              </span>
              <span>${service.price}</span>
            </div>
          ))}
          <div className="font-bold flex justify-between pt-4">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </CardContent>
      </Card>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Client Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {success ? (
            <p className="text-green-600 font-semibold text-center">
              ✅ Order submitted successfully!
            </p>
          ) : (
            <>
              <input
                placeholder="Full Name"
                className="w-full border px-3 py-2 rounded"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />

              <input
                placeholder="Email Address"
                className="w-full border px-3 py-2 rounded"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />

              <textarea
                placeholder="Project Details"
                className="w-full border px-3 py-2 rounded min-h-[120px]"
                value={form.details}
                onChange={e => setForm({ ...form, details: e.target.value })}
              />

              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-slate-900"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'Confirm & Proceed'
                )}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// 2. The main Page component handles the layout and the Suspense boundary
export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        title="Checkout"
        highlight="Summary"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Checkout' },
        ]}
      />

      {/* Wrap the content in Suspense to fix the build error */}
      <Suspense fallback={
        <div className="flex items-center justify-center py-32">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      }>
        <CheckoutContent />
      </Suspense>
    </div>
  );
}