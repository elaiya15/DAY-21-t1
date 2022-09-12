async function foo() {
    let res = await fetch("https://animechan.vercel.app/api/quotes");
    let result = await res.json();
    console.log(result);

    for (let i = 0; i < result.length; i++) {
        var div = document.createElement("div");
        div.style.fontsize = "32px";
        div.innerHTML = `<div class="card" >
        <div class="card-body">
          <h5 class="card-title"> ${result[i].anime }</h5>
          <p class="card-text1">${result[i].character}</p>
          <p class="card-text2">${result[i].quote}</p>
        </div>
     </div>
      `
        document.body.append(div)

    }
}
foo();