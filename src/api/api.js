import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b55c9dc7-fb66-4d82-a5cf-50a73f5d33a0"
    }
})

export const membersApi = {
    getMembers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&${pageSize}`)
        .then(response => response.data)
    },
    followMember(id, isFollowed) {
        if (isFollowed) {
            return instance.delete(`follow/${id}`)
            .then(response => response.data)
        }
        else {
            return instance.post(`follow/${id}`)
            .then(response => response.data)
        }
    }
}

export const authApi = {
    getAuth() {
        return instance.get(`auth/me`);
    }
}

export const profileApi = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    }
}


