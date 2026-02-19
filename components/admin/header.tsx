'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { LogOut, User } from 'lucide-react';

interface Admin {
  id: string;
  email: string;
  name: string;
}

export default function AdminHeader() {
  const router = useRouter();
  const { toast } = useToast();
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await fetch('/api/auth/verify');
        const data = await response.json();

        if (data.authenticated && data.admin) {
          setAdmin(data.admin);
        }
      } catch (error) {
        console.error('Failed to fetch admin:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdmin();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        toast({
          title: 'Logged out',
          description: 'You have been logged out successfully',
        });
        router.push('/admin/login');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to logout',
        variant: 'destructive',
      });
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {!isLoading && admin && (
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg">
            <User className="h-4 w-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">{admin.name}</span>
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="text-red-600 border-red-200 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </header>
  );
}
