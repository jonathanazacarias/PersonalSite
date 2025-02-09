export default function imgURLLoader(imgName, imgsubdir="") {
    let basepath = `../assets/images/${imgName}`;

    if(imgsubdir) {
       basepath = `../assets/images/${imgsubdir}/${imgName}`;
    }
    return new URL(basepath, import.meta.url);
}
