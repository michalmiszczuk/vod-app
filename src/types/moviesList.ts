import { OneMovie } from "./movie";

export interface MovieList {
    CacheDateValidTo: string,
    Entities: OneMovie[],
    PageNumber: number,
    PageSize: number,
    SourceType: string,
    TotalCount: number,
}
