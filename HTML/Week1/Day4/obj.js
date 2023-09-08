var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}];
for(i=0;i<library.length;i++){
    if(library[i].readingStatus==true){
        document.write("The Book which is titled by " + library[i].title + " and author "+library[i].author + "and its reading status is " + library[i].readingStatus +" . ");
        
    }
}

// document.write("    The Book which is titled by " + library[1].title + " and author "+library[1].author + "and its reading status is " + library[1].readingStatus + " . <br />");
// document.write("    The Book which is titled by " + library[2].title + " and author "+library[2].author + "and its reading status is " + library[2].readingStatus) +" . ";