function chunk(liste, taille) {
    let souslist = [];
    for (let i = 0; i < liste.length; i += taille) {
        let slice = liste.slice(i, i + taille);
        souslist.push(slice);
    }
    return souslist;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
