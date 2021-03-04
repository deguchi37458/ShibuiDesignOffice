
// scrollによって非表示
window.addEventListener("scroll", function(){
  let scrollTop = document.documentElement.scrollTop;
  document.getElementById("test").textContent = scrollTop;

  if(scrollTop > 300){
    document.getElementById("scroll").classList.add("hidden");
  }
});

// listクリックした際にスクロール
const list = Array.from(document.getElementsByClassName("list"));
console.log(list)
list.forEach(function(li){
  li.addEventListener("click", function(e){
    const index = list.findIndex(list => list === e.target);
    console.log(index);
    
    if (index === 0) {
      window.scroll({
        top:790,
        behavior: "smooth"
      });
    }else if(index === 1){
      window.scroll({
        top:1284,
        behavior: "smooth"
      });
    }else if(index === 2){
      window.scroll({
        top:1857,
        behavior: "smooth"
      });
    }else if(index === 3){
      window.scroll({
        top:2277,
        behavior: "smooth"
      });
    }else if(index === 4){
      window.scroll({
        top:2638,
        behavior: "smooth"
      });
    }
  });
})

