export default async function getText(file) {
    let fileText = await fetch(file).then((res) => res.text()).then((text) => text);
    return fileText;
}