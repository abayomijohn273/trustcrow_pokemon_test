export const capitalizeFirstLetter = (str) => {
    if(typeof str === "string") {
        const strToLowerCase = str.toLowerCase();
        const arr = strToLowerCase.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        const output = arr.join(" ");

        return output;
    }
    return str;
}