require('dotenv').config()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const rocks = process.env.ROCKS;
    console.log(`${rocks} rock!`);
    await sleep(5000);
  }
}

main();
