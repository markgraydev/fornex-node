type IPAddress = string;

export enum Plan {
  VPN = "vpn",
  BACKUPS = "backups",
  VPS = "vps",
  DEDICATED = "dedicated",
  HOSTING = "hosting"
}

export interface Location {
  flag_icon: string;
  id: string;
  name: string;
}

export enum VPNType {
  SHARED = "shared",
  DEDICATED = "dedicated"
}

export interface AccountBalanceReply {
  balance: number;
  currency: string;
}

export interface AccountInfoReply {
  email: string;
  name: string;
}

export interface AccountInvoicesReply {
  currency: string;
  unpaid_invoices_amount: number;
  unpaid_invoices_count: number;
}

export interface OrderReply {
  cost_month: number;
  expiration_date: Date;
  hostname: string;
  id: string;
  ipaddress_set: IPAddress[];
  name: string;
  status: string;
  tariff: string;
  tariff_id: number;
  tariff_price: number;
  type: string;
}

export interface VPNPlanInfoReply {
  available_locations: string[];
  id: number;
  price: number;
  type: VPNType;
}

export interface VPSPlanInfoReply {
  bandwidth: string;
  cpu_count: number;
  disk: string;
  id: number;
  name: string;
  price: number;
  ram: string;
}

export interface BackupsPlanInfoReply {
  price: number;
  space: number;
  units: string;
}

export interface DedicatedPlanInfoReply {
  bandwidth: string;
  cpu_count: number;
  cpu_model: string;
  disk: string;
  id: number;
  locations: Location[];
  name: string;
  price: number;
  ram: string;
}

export interface HostingPlanInfoReply {
  available_locations: string[];
  cpu_cores: number;
  databases: number;
  hdd_space: number;
  id: number;
  mail_domains: number;
  mailboxes: number;
  name: string;
  price: number;
  sites: number;
}

export interface PlanInterfaceMap {
  "vpn": VPNPlanInfoReply[];
  "backups": BackupsPlanInfoReply[];
  "vps": VPSPlanInfoReply[];
  "dedicated": DedicatedPlanInfoReply[];
  "hosting": HostingPlanInfoReply[];
}
