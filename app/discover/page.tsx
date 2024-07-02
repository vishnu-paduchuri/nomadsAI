"use client";

import React, { useState, useEffect } from "react";
import BuyerCard from "@/components/Cards/BuyerCard";
import PaginationComponent from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import { mockdataInitialListings } from "../../mockdata/listings/index";
export default function Discover() {
  const [pageLoding, setPageLoading] = useState(true);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setListings(mockdataInitialListings as any);
        setPageLoading(false);
      }, 5000);
    };
    fetchData();
  }, []);

  const searchListing = (query: string) => {
    setPageLoading(true);
    setTimeout(() => {
      // for demo purpose set the listings to empty
      setListings([]);
      setPageLoading(false);
    }, 2000);
  };

  const clearListingSearch = () => {
    setPageLoading(true);
    setTimeout(() => {
      setListings(mockdataInitialListings as any);
      setPageLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="pb-6">
          <SearchBar
            onSearch={searchListing}
            onClear={clearListingSearch}
            loading={pageLoding}
          />
        </div>
        {!pageLoding && listings.length == 0 && (
          <>
            <div className="flex items-center justify-center align-center">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <p className="text-lg font-semibold text-gray-700">
                  No Matches Found
                </p>
                <p className="text-gray-500 mt-2">
                  We couldn't find any results that match your search.
                </p>
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {!pageLoding &&
            listings.length > 0 &&
            listings.map((listing, index) => (
              <BuyerCard
                title={(listing as any).title}
                subtitle={(listing as any).subtitle}
                askingPrice={(listing as any).askingPrice}
                grossRevenue={(listing as any).grossRevenue}
                projectedGrowth={(listing as any).projectedGrowth}
                loading={pageLoding}
                cashFlow={(listing as any).cashFlow}
                key={index}
                listingSellingPointType={
                  (listing as any).listingSellingPointType
                }
                url={(listing as any).url}
              />
            ))}
          {pageLoding &&
            Array.from(Array(10).keys()).map((_, index) => (
              <BuyerCard
                title=""
                subtitle=""
                askingPrice=""
                grossRevenue=""
                projectedGrowth=""
                loading={pageLoding}
                cashFlow=""
                key={index}
                url=""
              />
            ))}
        </div>
        {!pageLoding && listings.length > 0 && (
          <PaginationComponent
            totalPages={3}
            currentPage={1}
            onPageChange={() => {}}
          />
        )}
      </div>
    </>
  );
}
