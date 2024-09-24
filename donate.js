const donationTab = getEleById("donation-tab");
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

function getEleById(id) {
  return document.getElementById(id);
}

const donateButtonN = document.getElementById("donate-btn-N");
donateButtonN.addEventListener("click", function () {
  const donateInputField = document.getElementById("donate-input-field-N");
  const donateAmount = parseFloat(donateInputField.value);
  if (donateAmount <= 0 || isNaN(donateAmount)) {
    return alert("invalid Donation amount");
  }
  const previousTotalDonateAmountText = document.getElementById(
    "total-donate-amount-N"
  );
  const previousTotalDonateAmountString =
    previousTotalDonateAmountText.innerText;
  const previousTotalDonateAmount = parseFloat(previousTotalDonateAmountString);

  const updateTotalDonateAmount = previousTotalDonateAmount + donateAmount;
  previousTotalDonateAmountText.innerText = updateTotalDonateAmount;
  const myBalanceEle = getEleById("my-bal");
  const myBalanceString = myBalanceEle.innerText;
  const myBalance = parseFloat(myBalanceString);
  const updateMyBalance = myBalance - donateAmount;
  myBalanceEle.innerText = updateMyBalance;
  donateInputField.value = "";

  const donateZone = getEleById("donate-zone-N").innerText;
  const historyItem = document.createElement("div");

  historyItem.className = "bg-white p-3 rounded-md border border-indigo-500";
  historyItem.innerHTML = `
      <p class='text-md text-gray-500'>${donateAmount.toFixed(
        2
      )} taka for ${donateZone}  </p>
        <p class='text-md text-gray-500'>${new Date()}</p>
            `;

  let historySection = getEleById("history-section");
  historySection.appendChild(historyItem);
});
