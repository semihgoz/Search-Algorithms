

const siralanmamisListe = [6, 5, 3, 1, 8, 7, 2, 4];

function merge(leftArr, rightArr) {
    //Geri döndürülmek üzere boş bir liste.
    const sortedArr = [];

    //Liste elemanlarının karşılaştırılması için bir döngü ve herhangi bir liste elemanı bitmesi durumunda döngüden çıkılır.
    while (leftArr.length && rightArr.length) {
        //Liste elemanlarının karşılatırılması...
        if (leftArr[0] <= rightArr[0]) {
            //yeni listeye eleman eklenir.
            sortedArr.push(leftArr[0]);
            //eklenen eleman eski listeden silinir.
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }

    //Eğer sol listenin içerisinde eleman kalmış ise (bu demektir ki sağ liste içerisinde eleman kalmamış)
    //kalan tüm elemanları yeni birleştirilmiş listenin içerisine ekle
    while (leftArr.length) sortedArr.push(leftArr.shift());
    //Aynı durumun sağ liste için geçerli olması durumu.
    while (rightArr.length) sortedArr.push(rightArr.shift());

    return sortedArr;
}

function merge_Sort(arr) {
    //Liste boyutu tek ise parçalama işlemi yapmadan sadece değeri dizi olarak döndürür.
    if (arr.length < 2) return arr;

    //Liste en az 2 elemandan oluşuyorsa parçalama işlemi yapılır.
    const midpoint = parseInt(arr.length / 2),
        leftArr = arr.slice(0, midpoint),
        rightArr = arr.slice(midpoint, arr.length);

    //Parçalanmış liste işlenerek birleştirme işlemi yapılır.
    return merge(merge_Sort(leftArr), merge_Sort(rightArr));
}

console.log('Before =>', siralanmamisListe);
console.log('After =>', merge_Sort(siralanmamisListe));