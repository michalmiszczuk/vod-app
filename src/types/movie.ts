interface Images{
    Height: number,
    Id: number,
    ImageTypeCode: string,
    MediaId: number,
    PlatformCode: string,
    Url: string,
    Width: number,
}

export interface OneMovie{
    AvilableForm: string,
    Description: string,
    Guid: string,
    Id: number,
    Images: Images[] | [],
    IsTrialContentAvailable: boolean,
    MediaAgeRestrictionImageUrl: string,
    MediaAgeRestrictionValueMin: number,
    MediaTypeCode: string,
    MediaTypeDisplayName: string,
    Products: {
        Id: number
    }[],
    Title: string,
    Year: number,
}