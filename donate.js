const donateButton = document.getElementById("donate-btn");
donateButton.addEventListener("click", function donateCal() {
  const donateInputField = document.getElementById("donate-input-field");
  const donateAmountString = donateInputField.value;
  const donateAmount = parseFloat(donateAmountString);
  if (donateAmount <= 0 || isNaN(donateAmount)) {
    return alert("invalid amount");
  } else {
    alert("Thank you");
  }
  const previousTotalDonateAmountText = document.getElementById(
    "total-donate-amount"
  );
  const previousTotalDonateAmountString =
    previousTotalDonateAmountText.innerText;
  const previousTotalDonateAmount = parseFloat(previousTotalDonateAmountString);

  const updateTotalDonateAmount = previousTotalDonateAmount + donateAmount;
  previousTotalDonateAmountText.innerText = updateTotalDonateAmount;
  const myBalanceEle = document.getElementById("my-bal");
  const myBalanceString = myBalanceEle.innerText;
  const myBalance = parseFloat(myBalanceString);
  const updateMyBalance = myBalance - donateAmount;
  myBalanceEle.innerText = updateMyBalance;
  donateInputField.value = "";

  const donateZone = document.getElementById("donate-zone").innerText;
  const historyItem = document.createElement("div");

  historyItem.className = "bg-white p-3 rounded-md border border-indigo-500";
  historyItem.innerHTML = `
  <p class='text-md text-gray-500'>${donateAmount.toFixed(
    2
  )} taka for ${donateZone}  </p>
  <p class='text-md text-gray-500'>${new Date()}</p>
  `;

  let historySection = document.getElementById("history-section");
  historySection.appendChild(historyItem);
});
const donationTab = document.getElementById("donation-tab");
donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-[#B4F461]");
  historyTab.classList.remove("bg-[#B4F461]");
  document.getElementById("card-section").classList.remove("hidden");
  const historySection = document.getElementById("history-section");
  historySection.classList.add("hidden");
});

const historyTab = document.getElementById("history-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-[#B4F461]");
  donationTab.classList.remove("bg-[#B4F461]");
  document.getElementById("card-section").classList.add("hidden");
  const historySection = document.getElementById("history-section");
  historySection.classList.remove("hidden");
});
