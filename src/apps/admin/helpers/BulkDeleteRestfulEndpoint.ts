import { RestfulEndpoint } from "@mongez/http";

export class BulkDeleteRestfulEndpoint extends RestfulEndpoint {
  /**
   * Perform bulk delete
   */
  public bulkDelete(ids: number[]) {
    return this.endpoint.delete(this.path(ids.join(",")));
  }
}
