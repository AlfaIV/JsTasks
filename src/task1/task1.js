const field = [
    "ooo------Y--AND------",
    "-----EXY--A--N---D--E",
    "-X-----Y--A-N---D----",
    "------EXY----A---N---",
    "--DE--X---------YA---",
    "-----ND---EXY--AN--D-",
    "----E-----X-Y----A--N",
    "D-----E-XY---AN---D--",
    "E--------------------",
    "-------X---Y------A-N",
    "----D-EX----------YA-",
    "--N-DEX--Y-A--N-----D",
    "E------X--Y----------",
];

const moves = `R 12 D 2 R 2 U 1 R 2`;

solution(field, moves);


function solution(field, moves) {
    let headCord = [0, 2];
    let snakeLen = 3;

    let snakeMove = moves.split(' ').reduce((acc, elem, index) => {
        if (index % 2 === 0) {
            acc.push([elem]);  
        } else {
            acc[acc.length - 1].push(parseInt(elem));
        }
        return acc;    
    }, []);

    console.log(snakeMove);

    snakeMove.forEach((step) => { 
        switch (step[0]) { 
            case "R":
                headCord[1] += step[1];
                break;
            case "L":
                headCord[1] -= step[1];
                break;
            case "U":
                headCord[0] -= step[1];
                break;
            case "D":
                headCord[0] += step[1];
                break;
        }
        console.log(headCord);
    });

    console.log(headCord);

    // return [[x, y], N];
}