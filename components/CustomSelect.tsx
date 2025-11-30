"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export interface SelectOption {
  id: string;
  label: string;
  iconUrl?: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  selectedId: string;
  onChange: (id: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

export default function CustomSelect({
  options,
  selectedId,
  onChange,
  placeholder = "-- Select --",
  disabled = false,
  error = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.id === selectedId);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    onChange(id);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Selected Value Display */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-left flex items-center justify-between ${
          error ? "border-red-500" : "border-gray-300"
        } ${
          disabled
            ? "bg-gray-100 cursor-not-allowed text-gray-500"
            : "cursor-pointer"
        }`}
      >
        <div className="flex items-center">
          {selectedOption ? (
            <>
              {selectedOption.iconUrl && (
                <Image
                  src={selectedOption.iconUrl}
                  alt={selectedOption.label}
                  width={20}
                  height={20}
                  className="mr-2"
                />
              )}
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown List */}
      {isOpen && !disabled && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.length === 0 ? (
            <div className="px-4 py-2 text-gray-500">No options available</div>
          ) : (
            options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={`w-full px-4 py-2 text-left flex items-center hover:bg-gray-100 transition-colors ${
                  option.id === selectedId ? "bg-blue-50" : ""
                }`}
              >
                {option.iconUrl && (
                  <Image
                    src={option.iconUrl}
                    alt={option.label}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                )}
                <span className="text-gray-900">{option.label}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
