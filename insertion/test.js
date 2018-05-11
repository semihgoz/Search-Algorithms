const siralanmamisListe = [6, 5, 3, 1, 8, 7, 2, 4];

function insertion_Sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        //Pivot eleman listedeki en küçük eleman ise...
        if (arr[i] < arr[0])
            //Listeden sil ve en başa ekle.
            arr.unshift(arr.splice(i, 1)[0]);

        //Pivot eleman listedeki en büyük eleman ise...
        else if (arr[i] > arr[i - 1])
            //Pivot eleman olduğu yerde kalsın ve döngü buradan sonrasını yapmadan devam etsin.
            continue;

        //Pivot eleman listedeki en küçük veye an büyük eleman değil ise...
        else
            //Enjekte listesi içerisinde pivot elemanın yerini enjekte liste üzerinde sonra başa doğru giderek bulma.
            for (let j = 1; j < i; j++) {
                //Buradaki koşulun içerisine mutlaka girecektir, Çünki pivot eleman listenin ne en büyük elemanı ne de en küçük
                //yani ortalarda bir yerlerde ve bu koşul pivot sayının ortalarda biryerlde olması durumunda çlışacaktır.
                if (arr[i] > arr[j - 1] && arr[i] < arr[j])
                    //Pivot elemanı sil ve enjekte listesi içinde bulunan konuma yerleştir.
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
            }
    }
    return arr;
}

console.log('Once:', siralanmamisListe);
//Output => "Once: [ 6, 5, 3, 1, 8, 7, 2, 4 ]"
insertion_Sort(siralanmamisListe);
console.log('Sonra:', siralanmamisListe);
//Output => "Sonra: [ 1, 2, 3, 4, 5, 6, 7, 8 ]"
