const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Yipppeeeeeee!!!!!!";
  gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXQxNHVheXQydzl3aml6YTJuc2VsNTV5NjMzY2F0bjA5ZzNjMzZndiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KyEtlYiutRHVC68Ess/giphy.gif";

  noBtn.removeEventListener("mouseover", handleNoMouseOver);
  noBtn.remove();

  const reminder = [
    "Don't forget to bring sunscreen",
    "Do you have enough tennis balls?",
    "How about we go eat after that?",
    "Bring H20!!!!!",
    "Text me when you get there",
    "Don't ghost me please :((",
  ];

  // Update YES button instead of replacing it
  yesBtn.textContent = "Let's Go!";
  yesBtn.classList.add("letsgo-btn");
  yesBtn.removeEventListener("click", handleYesClick);

  yesBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * reminder.length);
    alert(`OH YEAH, ${reminder[randomIndex]}`);
    window.location.href = "schedule.html"; // <-- redirect to scheduling page
  });

  // Show the calendar form now
  document.getElementById("calendar-form").style.display = "block";
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

const handleNoClick = () => {
  alert("No? Try again then!");
  handleNoMouseOver(); // make it jump too
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
noBtn.addEventListener("click", handleNoClick);
