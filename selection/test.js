const siralanmamisListe = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

function selection_Sort(arr) {
    //Liste içersinde en küçük elemanı temsil eden bir byarak (flag).
    let min = { index, value };
    //Listeye en az eleman sayısı kadar işlem yapılacaktır bunun için bir döngü.
    for (let i = 0; i < arr.length; i++) {
        //Liste ilk döngü içersinde ilk eleman en küçük kabul edilip diğer elemanlar ile karşılaştırılana kadar öyle kalır.
        min.index = i;
        min.value = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            //Eğer byarak değer den daha küçük bir değer bulunursa, bayrak değer değiştirilir.
            if (arr[j] < min) {
                min.index = j;
                min.value = arr[j];
            }
        }

        let temp = arr[i];
        arr[i] = min.value;
        arr[min.index] = temp;
    }
    return arr;
}

console.log('Once:', siralanmamisListe);
//Output => "Once: [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]"
selection_Sort(siralanmamisListe);
console.log('Sonra:', siralanmamisListe);
//Output => "Sonra: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]"