let images = [
    {
        name: 'Applied statistics and probability for engineers',
        img: 'images/Maths/appliedstatistics.jpg',
        link: 'books/Maths/applied-statistics-and-probability-for-engineers.pdf'
    },
    {
        name: 'fundamentals of applied probability and randomprocess',
        link: 'books/Maths/epdf.pub_fundamentals-of-applied-probability-and-randopro.pdf',
        img: 'images/Maths/fundprob.jpg'
    }, 
    {
        name: 'Probability and statistics for engineers and scientisst walpole',
        link: 'books/Maths/probability_and_statistics_for_engineers_and_scientisst_walpole(1).pdf',
        img: 'images/Maths/probstats.jpg'
    },
    {
        name: 'Probability and Random Processes for Engineers',
        link: 'books/Maths/Probability-and-Random-Processes-for-Engineers.pdf',
        img: 'images/Maths/probrand.jpg'
    },
    {
        name: 'Abraham Silberschatz Operating System Concepts',
        link: 'books/os/Abraham-Silberschatz-Operating-System-Concepts---9th2012.12.pdf',
        img:'images/os/AbrahamOS.jpg'
    },
];
const tbnames = document.getElementById('maths');
ptag = document.getElementById('books');
function find(){
    let x = document.getElementById('searchbar').value.toUpperCase();
    tbnames.innerHTML = "RESULTS";
    ptag.innerHTML = '';
    let newImages = [];
    for(v of images){
        if(v.name.toUpperCase().indexOf(x) >  -1){
            newImages.push(v);
        }
    }
    for(v of newImages){
        let book = document.createElement('a');
        let img = document.createElement('img');
        book.setAttribute('href', v.link);
        img.setAttribute('class', 'img-container');
        img.setAttribute('src', v.img);
        book.appendChild(img);
        ptag.appendChild(book);
    }
    check();
}
(() => {
    document.getElementById('searchbar').addEventListener('input',find);
})();
