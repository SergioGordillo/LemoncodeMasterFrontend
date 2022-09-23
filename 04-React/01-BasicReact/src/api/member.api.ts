import { MemberEntityApi } from "../model/MemberEntity/memberEntity.api-model";

export const getMembers = (organization: string, perpage, page): Promise<MemberEntityApi[]> => {
    return fetch(`https://api.github.com/orgs/${organization}/members?per_page=${perpage}&page=${page}`)
        .then((response) => {
            if (response.status == 200) {
                const data = response.json();
                return data;
            } else {
                throw new Error(response.statusText)
            }
        })
        .catch((e) => console.log(e));
}