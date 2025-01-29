import { FetchApi, FetchGetApi } from "../api/route";


type FetchDummyJson = {
     action?: string,
     dest: string,
     params: Record<string, any>
}

type FetchDummyJsonGet = {
     action?: string,
     dest: string,
     queryParams?: Record<string, any>
}
export async function apiDummyJsonPost({dest, params}: FetchDummyJson): Promise<any>{
     const response = await FetchApi({url: 'https://dummyjson.com', action: "dummyJson", dest, params})
     return response
}

export async function apiDummyJson({dest, queryParams = {}}: FetchDummyJsonGet): Promise<any>{
     const response = await FetchGetApi({url: 'https://dummyjson.com', action: "dummyJson", dest, queryParams})
     return response
}