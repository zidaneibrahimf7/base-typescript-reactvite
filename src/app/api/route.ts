import { fetchGet, fetchPost } from '@/hooks/useFetcher';
import { destination } from './ApiConfig';

type FetchProps = {
     url: string,
     action: string,
     dest: string,
     params: Record<string, any>
}

export async function FetchApi({url, action, dest, params}: FetchProps):Promise<any> {
  return new Promise(async (resolve) => {
     if (destination.hasOwnProperty(action)) {
     console.log(url, dest, params, destination, destination[action][dest].action)
          if (destination[action].hasOwnProperty(dest)) {
               const baseUrl = url + '/' + destination[action][dest].action + '/' + destination[action][dest].subAction
               // const baseurl = (import.meta.env.PROD ? '/api' : 'http://localhost:3000/api') + '/' + destination[action][dest].action + '/' + destination[action][dest].subAction;
               const result = await fetchPost({
                    url: baseUrl,
                    params,
               });
               console.log(result)
               return resolve(result);
          } 
          else {
               return resolve(
                    { code: -1, message: 'API Configuration destination doesnt match' },
                    // { status: 404 },
               );
          }
     } 
     else {
          return resolve({ code: -1, message: 'API Configuration action doesnt match' });
     }
  });
}


type FetchPropsGet = {
     url: string,
     action: string,
     dest: string,
     queryParams?: Record<string, any>
}

export async function FetchGetApi({url, action, dest, queryParams = {}}: FetchPropsGet):Promise<any>{
     return new Promise(async (resolve) => {
          if (destination.hasOwnProperty(action)) {
               if (destination[action].hasOwnProperty(dest)) {
                         //   const baseurl = (import.meta.env.PROD ? '/api' : 'http://localhost:3000/api') + '/' + destination[action][dest].action + '/' + destination[action][dest].subAction;
                         let baseUrl = url + '/' + destination[action][dest].action;
                         if (destination[action][dest].subAction.length > 1) {
                              baseUrl += '/' + destination[action][dest].subAction;
                         }

                         // Menambahkan query parameters ke URL jika tersedia
                         if (Object.keys(queryParams).length > 0) {
                              const searchParams = new URLSearchParams(queryParams).toString();
                              baseUrl += `?${searchParams}`;
                         }

                         const result = await fetchGet({
                              url: baseUrl,
                         });

                         return resolve(result);
                    } else {
                         return resolve(
                              { code: -1, message: 'API Configuration destination doesnt match' },
                         );
                    }
               } 
          else {
               return resolve(
                    { code: -1, message: 'API Configuration action doesnt match' },
               );
          }
     });
}
