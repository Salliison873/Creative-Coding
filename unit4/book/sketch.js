let word = "Live Laugh Love";
let wc = 0;

function setup() {

  // We won't need any canvas
  noCanvas();

 
  let content = select("body");
  content.attribute("id","content");
  
  content.child(createElement("h1", word));
  
  
  // make a sentence
  
  while( wc < 50000){
    content.child(createElement("h2",String(word+" ").repeat(random(2,6)).toUpperCase()));
    
    for (let p = 0; p < 10; p++){
      let paragraph = '';
      for (let s = 0; s < 10; s++){
        let internalPunct = [",",",",",",";"," --"];
        let endPunct = [".",".","?","!"];
        let sentence = word.charAt(0).toUpperCase() + word.slice(1);
        let sentenceLength = 5;
        wc += sentenceLength + 1;
        for (let w = 0; w < sentenceLength; w++){
          sentence += " " + word;
          if (random() < 0.2){
            sentence += random(internalPunct);
          }
        }
        sentence += random(endPunct) + " ";
        paragraph += sentence;
      }
      content.child(createElement("p",paragraph));
    }
  
 window.PagedPolyfill.preview();
}

}
