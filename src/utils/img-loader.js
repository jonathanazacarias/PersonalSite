export default function imgURLLoader(imgName, imgsubdir) {
    let basepath = `../assets/${imgName}`;

    if(imgsubdir) {
       basepath = `../assets/images/${imgsubdir}/${imgName}`;
    }
    return new URL(basepath, import.meta.url);
}
