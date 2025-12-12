"use client";

import React from "react";

interface DataFetchFallbackProps {
    message?: string;
    onRetry?: () => void;
}

export const DataFetchFallback: React.FC<DataFetchFallbackProps> = ({
    message = "Something went wrong while loading the data.",
    onRetry,
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
            <div className="mb-4 text-destructive">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Oops!</h3>
            <p className="text-muted-foreground mb-6 max-w-md">{message}</p>
            {onRetry ? (
                <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                    Try Again
                </button>
            ) : (
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                    Refresh Page
                </button>
            )}
        </div>
    );
};
