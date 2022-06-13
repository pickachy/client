export interface ComparableInt32OperationFilterInput {
  eq: number;
  neq: number;
  in: number[];
  nin: number[];
  gt: number;
  ngt: number;
  gte: number;
  ngte: number;
  lt: number;
  nlt: number;
  lte: number;
  nlte: number;
}

export interface StringOperationFilterInput {
  and?: StringOperationFilterInput[];
  or?: StringOperationFilterInput[];
  eq?: string;
  neq?: string;
  contains?: string;
  ncontains?: string;
  in?: string[];
  nin?: string[];
  startsWith?: string;
  nstartsWith?: string;
  endsWith?: string;
  nendsWith?: string;
}

export interface BooleanOperationFilterInput {
  eq?: boolean;
  neq?: boolean;
}

export interface ComparableDoubleOperationFilterInput {
  eq?: number;
  neq?: number;
  in?: number[];
  nin?: number[];
  gt?: number;
  ngt?: number;
  gte?: number;
  ngte?: number;
  lt?: number;
  nlt?: number;
  lte?: number;
  nlte?: number;
}

export enum SortEnumType {
  ASC = 'ASC',
  DESC = 'DESC'
}
