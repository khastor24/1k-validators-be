export type Address = string;
export type Stash = string;

export type NominatorConfig = {
  seed: string;
  isProxy?: boolean;
  proxyFor?: string;
  proxyDelay?: number;
};

export type EraReward = {
  stash: string;
  era: number;
};

export type BooleanResult = [boolean | null, string | null];
export type NumberResult = [number | null, string | null];
export type StringResult = [string | null, string | null];

export enum InvalidityType {
  Online,
  ValidateIntention,
  ClientUpgrade,
  ConnectionTime,
  Identity,
  MultipleIdentities,
  AccumulatedOfflineTime,
  RewardDestination,
  Commission,
  SelfStake,
  UnclaimedRewards,
  KusamaRank,
}

export type InvalidityReason = {
  valid: boolean;
  type: InvalidityType;
  details: string;
  updated: number;
};

export type Identity = {
  name: string;
  address: string;
  verified?: boolean;
  subIdentities?: {
    name: string;
    address: string;
  }[];
  display?: string;
  email?: string;
  image?: string;
  judgements?: string[];
  legal?: string;
  // other: string;
  // parent: string;
  pgp?: string;
  riot?: string;
  twitter?: string;
  web?: string;
};

export interface Nominator {
  address: string;
  stash: string;
  proxy: string;
  bonded: number;
  now: number;
  proxyDelay: number;
  rewardDestination: string;
}

export interface TelemetryNodeDetails {
  telemetryId: number;
  name: string;
  nodeImplementation: string;
  version: string;
  ipAddress: string;
  startupTime: number;
  hardwareSpec: HardwareSpec;
  benchmarkSpec: BenchmarkSpec;
}

export interface HardwareSpec {
  cpu: string;
  memory: number | string;
  core_count: number | string;
  linux_kernel: string;
  linux_distro: string;
  is_virtual_machine: boolean;
}

export interface BenchmarkSpec {
  cpu_hashrate_score: number;
  memory_memcpy_score: number;
  disk_sequential_write_score: number;
  disk_random_write_score: number;
}
