import React from 'react';

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface StatItem {
  title: string;
  description: string;
  percentage: number;
  icon: React.ElementType;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ActionStep {
  step: string;
  title: string;
  content: string;
  isQuote?: boolean;
}