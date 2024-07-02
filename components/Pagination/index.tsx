"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalPages = 0,
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 ml-4 mr-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>

          {Array.from(Array(totalPages).keys()).map((page) => (
            <PaginationItem key={page + 1}>
              <PaginationLink
                onClick={() => onPageChange(page + 1)}
                isActive={currentPage === page + 1}
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
