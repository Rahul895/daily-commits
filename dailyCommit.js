const { execSync } = require("child_process");
const fs = require("fs");

const makeDailyCommit = () => {
  try {
    process.chdir("C:/Users/rahul/daily-commits");

    const date = new Date().toISOString();
    const message = `Daily commit for ${date}`;

    fs.writeFileSync("temp.txt", message);

    execSync("git add temp.txt");
    execSync(`git commit -m "${message}"`);
    execSync("git push origin main", { stdio: "inherit" });

    console.log("Done!");
  } catch (error) {
    console.error("Error:", error);
  }
};

makeDailyCommit();