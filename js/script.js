const startDate = new Date("December 4, 2025");
const today = new Date();

const difference = today - startDate;

const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

const counter = document.getElementById("daysCounter");

if(counter){

    let message = "";

    if(days < 30){
        message = `${days} days of memories ❤️`;
    }

    else if(days < 180){
        message = `${days} days of conversations ❤️`;
    }

    else{
        message = `${days} days of having someone special in my life ❤️`;
    }

    counter.innerHTML = message;
}





const text = `

If someone had told me on December 4, 2025 that a simple conversation would become one of the most meaningful parts of my life, I probably wouldn't have believed them.

Yet here we are.

Thank you for every conversation.

Thank you for every memory.

Thank you for every moment of support.

Thank you for being someone who brought comfort into my life when I needed it most.

As you begin your new journey in Hyderabad, I hope life gives you every happiness you deserve.

No matter where life takes us, I will always be grateful that our paths crossed.

`;

const typewriter =
document.getElementById("typewriter");

if(typewriter){

    let i = 0;

    function type(){

        if(i < text.length){

            typewriter.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,40);
        }
    }

    type();
}




// PAGE TRANSITION

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const destination = this.href;

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {

                window.location.href = destination;

            }, 700);

        });

    });

});