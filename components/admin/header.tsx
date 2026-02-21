'use client';

import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react'; // NextAuth hooks
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { LogOut, User, Loader2 } from 'lucide-react';

export default function AdminHeader() {
  const router = useRouter();
  const { toast } = useToast();
  
  // Automatically fetches the admin session
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  const handleLogout = async () => {
    try {
      // signOut handles cookie clearing and CSRF tokens automatically
      await signOut({ 
        redirect: false, // Allows us to show the toast first
        callbackUrl: '/login' 
      });

      toast({
        title: 'Logged out',
        description: 'You have been logged out successfully',
      });

      router.push('/login');
      router.refresh(); 
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
        {!isLoading && session?.user && (
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg">
            <User className="h-4 w-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">
              {session.user.name}
            </span>
          </div>
        )}

        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        )}
      </div>
    </header>
  );
}