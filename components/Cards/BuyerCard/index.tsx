"use client";

import React, { useState } from "react";
import UniqueSellingPoint from "@/components/UniqueSellingPoint";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import ShareModal from "@/components/ShareModal";
import { useToast } from "@/components/ui/use-toast";

interface BuyerCardProps {
  title: string;
  subtitle: string;
  askingPrice: string;
  grossRevenue: string;
  cashFlow: string;
  projectedGrowth: string;
  loading: boolean;
  listingSellingPointType?: string;
  url: string;
}

const BuyerCard: React.FC<BuyerCardProps> = ({
  title,
  subtitle,
  askingPrice,
  grossRevenue,
  cashFlow,
  projectedGrowth,
  listingSellingPointType,
  loading,
  url,
}) => {
  const { toast } = useToast();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    toast({
      title: !bookmarked
        ? "You have bookmarked this listing"
        : "You have removed this listing from your bookmarks.",
      description: !bookmarked
        ? "You can view your bookmarked listings in your dashboard and our AI will recommend similar listings to you."
        : "You can always bookmark this listing again if you change your mind.",
      variant: !bookmarked ? "default" : "destructive",
    });
  };

  return (
    <div
      className="relative max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      style={{ width: "-webkit-fill-available" }}
    >
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="bg-gray-300 h-10 w-full rounded"></div>
          <div className="bg-gray-300 h-6 w-full rounded"></div>
          <div className="bg-gray-300 h-2 w-3/4 rounded"></div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-300 h-8 w-full rounded"></div>
            <div className="bg-gray-300 h-8 w-full rounded"></div>
            <div className="bg-gray-300 h-8 w-full rounded"></div>
            <div className="bg-gray-300 h-8 w-full rounded"></div>
            <div className="bg-gray-300 h-8 w-full rounded"></div>
            <div className="bg-gray-300 h-8 w-full rounded"></div>
          </div>
        </div>
      ) : (
        <>
          {listingSellingPointType && (
            <div className="absolute top-[-10px] left-4 m-0">
              <UniqueSellingPoint status={listingSellingPointType} />
            </div>
          )}
          <button
            onClick={toggleBookmark}
            className={`absolute top-1 right-2 w-6 h-6`}
            aria-label="Bookmark"
          >
            {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
          <ShareModal url={url} />
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-xl font-bold text-green-700">{askingPrice}</p>
              <p className="text-sm text-gray-500">ASKING PRICE</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-700">{grossRevenue}</p>
              <p className="text-sm text-gray-500">GROSS REVENUE</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-700">{cashFlow}</p>
              <p className="text-sm text-gray-500">CASH FLOW</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-700">
                {projectedGrowth}
              </p>
              <p className="text-sm text-gray-500">PROJECTED GROWTH</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BuyerCard;
