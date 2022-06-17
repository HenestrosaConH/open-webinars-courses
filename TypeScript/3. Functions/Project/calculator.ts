type MathFunc = (a: number, b: number) => number | never;

const add: MathFunc = (a, b) => a + b;
const subtract: MathFunc = (a, b) => a - b;
const multiply: MathFunc = (a, b) => a * b;
const divide = (a: number, b: number): number | never => {
  if (b === 0) {
    throw new Error("Division by zero is undefined");
  }

  return a / b;
};

type Action = {
  name: string;
  do: MathFunc;
};

const ACTIONS: Action[] = [
  {
    name: "ADD",
    do: add,
  },
  {
    name: "SUBTRACT",
    do: subtract,
  },
  {
    name: "DIVIDE",
    do: divide,
  },
  {
    name: "MULTIPLY",
    do: multiply,
  },
];

function updateUserMoneyText(
  element: HTMLSpanElement,
  actualMoney: number
): void {
  element.innerHTML = actualMoney.toString();
}

function randomNumber(max: number): number {
  return Math.round(Math.random() * max);
}

type PlayTheGameParams = {
  actions: Action[];
  totalClick: number;
  onError: (index: number, actions: Action[]) => void;
  onSuccess?: (totalClick: number) => void;
  userMoney: number;
};

function playTheGame({
  actions,
  totalClick,
  onError,
  onSuccess,
  userMoney,
}: PlayTheGameParams): number | never {
  const randomIndex = randomNumber(actions.length);
  const A_MILLION = 1000000;
  const action: Action | undefined = actions[randomIndex];

  if (!action) {
    onError(randomIndex, actions);
    return userMoney;
  }

  if (userMoney >= A_MILLION) {
    if (typeof onSuccess === "function") {
      onSuccess(totalClick);
    }

    return userMoney;
  }

  if (userMoney <= 0) {
    throw new Error("Money must be positive");
  }

  const newMoney = Math.round(
    action.do(userMoney, randomNumber(actions.length * 100))
  );

  return newMoney;
}

function disableClickButton(
  $button: HTMLButtonElement,
  handleClick: () => void
): void {
  $button.disabled = true;

  if (typeof handleClick === "function") {
    $button.removeEventListener("click", handleClick);
  }
}

const $button = document.getElementById("button") as HTMLButtonElement;
const $userMoneyText = document.getElementById("moneyText");
let userMoney = 1000;
let totalClick = 0;

updateUserMoneyText($userMoneyText, userMoney);

$button.addEventListener("click", function handleClick() {
  totalClick++;

  const params: PlayTheGameParams = {
    actions: ACTIONS,
    totalClick,
    userMoney,
    onError: function (index, actions) {
      console.log(index, actions);
    },
    onSuccess: function (totalClick) {
      disableClickButton($button, handleClick);
      console.log(
        "Te has convertido en millonario al hacer un total de: ",
        totalClick,
        " clicks"
      );
    },
  };

  userMoney = playTheGame(params);

  updateUserMoneyText($userMoneyText, userMoney);
});
