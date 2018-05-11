const siralanmamisListe = [6, 5, 3, 1, 8, 7, 2, 4];

function bubble_Sort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

console.log('Once:', siralanmamisListe);
//Output => "Once: [6, 5, 3, 1, 8, 7, 2, 4]"
bubble_Sort(siralanmamisListe);
console.log('Sonra:', siralanmamisListe);
//Output => "Sonra: [ 1, 2, 3, 4, 5, 6, 7, 8 ]"