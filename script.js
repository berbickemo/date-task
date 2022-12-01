function limitDD(input) {
  if (input.value < 01) {
    input.value = 01;
  }

  if (input.value > 31) {
    input.value = 01;
  }
}

function limitMM(input) {
  if (input.value < 01) {
    input.value = 01;
  }

  if (input.value > 12) {
    input.value = 1;
  }
}

function limitYY(input) {
  if (input.value < 1920) {
    input.value = 1;
  }

  if (input.value > 2022) {
    input.value = 2022;
  }
}
