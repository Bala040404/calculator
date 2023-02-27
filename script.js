let bt = document.querySelectorAll(".but");
let dis = document.querySelector("#disp");
let t = "";
let symbol = "";
let ans = 0;
for (let i of bt) {

    i.addEventListener("click", () => {


        // clear
        if (i.innerHTML === "C") {
            t = ""
            symbol = "";
            ans = 0;
        }

        // add
        else if (i.innerHTML === "+") {
            if (symbol === "-") {
                ans = ans - parseInt(t)
            }
            else if (symbol === "*") {
                ans = ans * parseInt(t);
            }
            else if (symbol === "/") {
                ans = ans / parseInt(t);
            }
            else {
                ans = ans + parseInt(t);
            }

            t = "";
            symbol = "+";
        }

        // subtract
        else if (i.innerHTML === "-") {
            if (t !== "") {
                if (symbol === "-") {
                    ans = ans - parseInt(t);
                }
                else if (symbol === "*") {
                    ans = ans * parseInt(t);
                }
                else if (symbol === "/") {
                    ans = ans * parseInt(t);
                }
                else {
                    ans = ans + parseInt(t);
                }
                t = "";
                symbol = "-";
            }

            else if (t === "") {

                if ((ans === 0) || (symbol !== "")) {

                    t = t + i.innerHTML;
                }


                else {
                    ans = ans - parseInt(t);
                }
                // ans = ans - parseInt(t);



            }
        }

        // multiply
        else if (i.innerHTML === "*") {
            if (symbol === "-") {
                ans = ans - parseInt(t);
            }
            else if (symbol === "*") {
                ans = ans * parseInt(t);
            }
            else if (symbol === "/") {
                ans = ans / parseInt(t);
            }
            else {
                ans = ans + parseInt(t);
            }
            t = "";
            symbol = "*";
        }

        // divide
        else if (i.innerHTML === "/") {
            if (symbol === "-") {
                ans = ans - parseInt(t);
            }
            else if (symbol === "*") {
                ans = ans * parseInt(t);
            }
            else if (symbol === "/") {
                ans = ans / parseInt(t);
            }
            else {
                ans = ans + parseInt(t);
            }
            t = "";
            symbol = "/";
        }

        // equals
        else if (i.innerHTML === "=") {
            if (symbol === "+") {
                ans = ans + parseInt(t)
                t = ans;

            }
            else if (symbol === "-") {
                ans = ans - parseInt(t);
                t = ans;
            }
            else if (symbol === "*") {
                ans = ans * parseInt(t);
                t = ans;
            }
            else if (symbol === "/") {
                ans = ans / parseInt(t);
                t = ans;
            }
            symbol = "";
            ans = 0;
        }
        else {

            t = t + i.innerHTML;
        }

        dis.innerHTML = t;
    })
}

