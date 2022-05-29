import { OneMovie } from "./movie";

export interface MovieList {
    CacheDateValidTo: string,
    Entities: OneMovie[],
    PageNumber: 1,
    PageSize: 1,
    SourceType: string,
    TotalCount: number,
}
