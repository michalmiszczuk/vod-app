export interface userAuthenticationData {
    AuthorizationToken: {
        Token: string,
        TokenExpires: string,
        RefreshToken?: string,
    }
    User: {
        ClientRoles: [],
        FullName: string,
        Id: number,
        UserName: string,
        Email?: string,
        Initials?: string,
        Products?: []
    }
}