
export async function fetchGet(data: any){
     const rawResponse = await fetch(data.url, {
          method: "GET",
          // headers: {
          //      'Content-Type': 'application/json'
          // },
          mode:'cors',
          cache:'default'
     })

     const result = await rawResponse.json()

     if (!rawResponse.ok) {
          return {
               code: rawResponse.status,
               content: result?.content || null,
               message: result?.message || null
          }
     }

     return result
}

export async function fetchPost(data: any) {
  const rawResponse = await fetch(data.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data.params),
    mode: 'cors',
    cache: 'default',
  });

  const result = await rawResponse.json();

  if (!rawResponse.ok) {
    return {
      code: rawResponse.status,
      content: result?.content || null,
      // message: result?.message || null //ini kalo mau dapet response dari message backend
      message: result?.error || null, //ini ambil error
    };
  }

  return result;
}

// export async function fetchPostDummyJson(data: any) {
//   const rawResponse = await fetch(data.url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data.params),
//     credentials: 'include',
//     cache: 'default',
//   });

//   const result = await rawResponse.json();
//   console.log(result, 'result')

//   if (!rawResponse.ok) {
//     return {
//       code: rawResponse.status,
//       content: result?.content || null,
//       message: result?.error || null, //ini ambil error
//     };
//   }

//   return result;
// }
