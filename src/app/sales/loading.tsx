import { LoaderCircle } from 'lucide-react';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className="flex justify-center mt-24">
        <LoaderCircle className="rotate-6 text-gray-500" />
      </div>
    )
  }