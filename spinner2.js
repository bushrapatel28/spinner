const spinnerAnimation = function(chars) {
  let delay = 100;

  for (let char of chars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}  `);
    }, delay);
    delay += 200;
  };

  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
};

spinnerAnimation(["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]);