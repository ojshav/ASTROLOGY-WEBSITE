'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface UniversalCartButtonProps {
  productId: string;
  productName: string;
  price: number;
  quantity?: number;
  image?: string;
  isStone?: boolean;
  isService?: boolean;
  carats?: number | null;
  variant?: 'addToCart' | 'buyNow';
  children: React.ReactNode;
  className?: string;
  [key: string]: string | number | boolean | null | undefined | React.ReactNode;
}

export function UniversalCartButton({
  productId,
  productName,
  price,
  quantity = 1,
  image,
  isStone = false,
  isService = false,
  carats = null,
  variant = 'addToCart',
  children,
  className = '',
  ...props
}: UniversalCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const { addItem, items } = useCart();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      // Add to frontend cart state first
      addItem({ id: productId, name: productName, price, image }, quantity);

      // Optionally, sync with backend
      const itemType = isStone ? 'stone' : (isService ? 'service' : 'product');
      await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          quantity,
          isStone,
          isService,
          carats,
          itemType,
        }),
      });

      toast({
        title: 'Item added to cart',
        description: `${productName} has been added to your cart.`,
        variant: 'default',
      });

      if (variant === 'buyNow') {
        router.push('/checkout');
      }
    } catch (error: unknown) {
      console.error('Error adding to cart:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to add item to cart. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className={className}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {variant === 'buyNow' ? 'Processing...' : 'Adding...'}
        </>
      ) : (
        children
      )}
    </Button>
  );
}