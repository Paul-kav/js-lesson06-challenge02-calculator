var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  // console.log();
  upDateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  // console.log();
  upDateSubscriptionDiv();
});

var upDateSubscriptionDiv = function () {
  var monthlyCost = 8;
  if (subType === "standard") {
    monthlyCost = 10;
  } else if (subType === "premium") {
    monthlyCost = 8;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for ${total}.`;
};
