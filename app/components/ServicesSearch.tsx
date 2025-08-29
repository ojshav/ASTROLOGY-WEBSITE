'use client';

import { useState } from 'react';

interface ServicesSearchProps {
  onSearchChange: (search: string) => void;
  className?: string;
}

export function ServicesSearch({ onSearchChange, className = '' }: ServicesSearchProps) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  return (
  <div className={`flex justify-center md:justify-end ${className}`}>
      <form
        className="flex w-full max-w-[500px] shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Let's find what you're looking for..."
          style={{
            background: "#fff",
            border: "none",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
            padding: "14px 24px",
            fontSize: "1.15rem",
            fontFamily: "Playfair Display, serif",
            color: "#232323",
            width: "100%",
            outline: "none",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        />
        <button
          type="submit"
          tabIndex={-1}
          style={{
            background: "#F0E3DA",
            border: "none",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
            width: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            const input = document.querySelector(
              "input[type=text]"
            ) as HTMLInputElement | null;
            input?.focus();
          }}
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="black"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>
    </div>
  );
}
