// Loaders
const myTimeout = setTimeout(loader, 5000);

function loader() {
  requestAnimationFrame(() => {
    document.getElementById("loader").className = "d-none";
    // document.getElementById('body').className = "bg-light";
    myStopFunction();
  });
}

function myStopFunction() {
  clearTimeout(myTimeout);
}
