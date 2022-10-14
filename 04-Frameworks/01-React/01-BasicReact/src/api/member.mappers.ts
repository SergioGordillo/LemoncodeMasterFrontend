import { MemberEntityApi } from '../model/MemberEntity/memberEntity.api-model';
import { MemberEntityVM } from '../model/MemberEntity/memberEntity.view-model';

export const mapMemberEntityFromAPIModelToVM = (data: MemberEntityApi[]): MemberEntityVM[] => {
    return data.map((data) => {
        return {
            id: data.id,
            login: data.login,
            avatar_url: data.avatar_url
        }
    })
}