var crrplyr = document.getElementById("crntName");
var cells = document.getElementsByClassName("cell");
var checker = [5, 5, 5, 5, 5, 5, 5, 5, 5];
var turn = true;
var cellCnt = 0;

function wins() {
  for (var i = 0; i < 3; i++) {
    if (
      checker[i + i * 2] + checker[i + i * 2 + 1] + checker[i + i * 2 + 2] ==
        3 ||
      checker[i + i * 2] + checker[i + i * 2 + 1] + checker[i + i * 2 + 2] == 0
    ) {
      return true;
      break;
    }
    if (
      checker[i] + checker[i + 3] + checker[i + 6] == 3 ||
      checker[i] + checker[i + 3] + checker[i + 6] == 0
    ) {
      return true;
      break;
    }

    if (
      checker[0] + checker[4] + checker[8] == 3 ||
      checker[0] + checker[4] + checker[8] == 0
    ) {
      return true;
      break;
    }
    if (
      checker[6] + checker[4] + checker[2] == 3 ||
      checker[6] + checker[4] + checker[2] == 0
    ) {
      return true;
      break;
    }
  }
  return false;
}

async function update(xn) {
  crrplyr.innerHTML = await (turn ? "player_1" : "player_2");
  if (xn) {
    alert("Winnner is " + (await (turn ? "player_2" : "player_1")));
  }
  if (cellCnt == 9) {
    alert("GameOver");
  }
}

marque = (x) => {
  if (checker[x] == 5) {
    cells[x].innerHTML = turn == true ? "X" : "O";
    checker[x] = turn == true ? 1 : 0;
    cellCnt++;
    turn = !turn;
    update(wins());
  } else {
    alert("cell occupied");
    //   wins(0);
  }
};

cells[0].onclick = function () {
  marque(0);
};

cells[1].onclick = function () {
  marque(1);
};

cells[2].onclick = function () {
  marque(2);
};

cells[3].onclick = function () {
  marque(3);
};

cells[4].onclick = function () {
  marque(4);
};

cells[5].onclick = function () {
  marque(5);
};

cells[6].onclick = function () {
  marque(6);
};

cells[7].onclick = function () {
  marque(7);
};

cells[8].onclick = function () {
  marque(8);
};
