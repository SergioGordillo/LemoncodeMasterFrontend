export interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export interface PaginationEntity {
    count: number,
    from: number,
    to: number
}

export interface PaginationDataEntity {
    count: number,
    data: MemberEntity[]
}