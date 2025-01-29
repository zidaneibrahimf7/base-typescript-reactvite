
export const randNumber = (val: number) => Math.floor(Math.random() * val)

export const firstCase = (str: string) => {
    var splitStr = str?.toLowerCase().split(' ');
    for (var i = 0; i < splitStr?.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr?.join(' ');
}

export function camelCaseToText(text: string) {
    if (text === text.toUpperCase()) {
      return text; // Kembalikan teks apa adanya
    }

     if (text.includes('-')) {
        // Pisahkan berdasarkan tanda hubung, ubah kapitalisasi awal setiap kata, dan gabungkan kembali
        const formattedName = text
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return formattedName;
    }

    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}