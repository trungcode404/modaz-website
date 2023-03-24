const click = document.getElementsByClassName('add-to-cart text-center');
const totalCount = document.getElementsByClassName('tang');
var count = 0;
totalCount[0].textContent = count;
const handleIncrement = () => {
    count++;
    totalCount[0].textContent = count;
    
};
for(let i = 0; i <= click.length; i++){
    click[i].addEventListener("click", handleIncrement);

}
