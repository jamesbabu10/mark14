const initial = document.querySelector("#initial");
const quantity = document.querySelector("#quantity");
const current = document.querySelector("#current");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateprofitandloss(initial, quantity, current) {
  if (initial > current) {
    output.style.color = "red";
    var loss = (initial - current) * quantity;
    var losspercentage = (loss / initial) * 100;
    return `Hey the loss is ${
      Math.round(loss * 100) / 100
    } and the percent is ${Math.round(losspercentage * 100) / 100}%`;
  } else if (initial < current) {
    output.style.color = "green";
    var profit = (current - initial) * quantity;
    var profitpercentage = (profit / initial) * 100;
    return `Hey the profit is ${
      Math.round(profit * 100) / 100
    } and the percent is ${Math.round(profitpercentage * 100) / 100}%`;
  } else {
    return "Hey there is no profit or loss!";
  }
}

function showputput(msg) {
  output.innerText = msg;
}
btn.addEventListener("click", () => {
  if (initial.value == "" || quantity.value == "" || current.value == "") {
    alert("Please Enter all the Fields");
    return 0;
  }
  showputput(
    calculateprofitandloss(
      Number(initial.value),
      Number(quantity.value),
      Number(current.value)
    )
  );
});
