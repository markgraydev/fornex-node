import { makeAPIRequest, RequestMethod } from "./utils";
import {
  AccountBalanceReply,
  AccountInfoReply,
  AccountInvoicesReply,
  OrderReply,
  PlanInterfaceMap
} from "./interfaces";

export class FornexClient {
  public constructor(private _apikey: string) {}

  public async getAccountBalance(): Promise<AccountBalanceReply> {
    return makeAPIRequest(RequestMethod.GET, "account/balance", {
      apikey: this._apikey
    });
  }

  public async getAccountInfo(): Promise<AccountInfoReply> {
    return makeAPIRequest(RequestMethod.GET, "account/info", {
      apikey: this._apikey
    });
  }

  public async getAccountInvoices(): Promise<AccountInvoicesReply> {
    return makeAPIRequest(RequestMethod.GET, "account/invoices", {
      apikey: this._apikey
    });
  }

  public async getOrders(): Promise<OrderReply[]> {
    const reply: OrderReply[] = await makeAPIRequest(RequestMethod.GET, "orders/list", {
      apikey: this._apikey
    });

    return reply.map((order) => {
      order.expiration_date = new Date(order.expiration_date);

      return order;
    });
  }

  public async getPlanInfo<K extends keyof PlanInterfaceMap>(plan: K): Promise<PlanInterfaceMap[K]> {
    return makeAPIRequest(RequestMethod.GET, `plans/${plan}`, {
      apikey: this._apikey
    });
  }
}
