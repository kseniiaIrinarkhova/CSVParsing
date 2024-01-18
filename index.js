/* Copy of Part 3  of previous lab */
console.log(`
*****************************************
***Part 1: Refactoring and easy output***
*****************************************
`);

const str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cellValue = "";
//Declare cell info
let cell1 = null;
let cell2 = null;
let cell3 = null;
let cell4 = null;

for (const symbol of str) {
    switch (symbol) {
        case ',':
            //found full data from cell
            //chose the cell that we fullfill now
            if (cell1 === null) {
                cell1 = cellValue;
            }
            else if (cell2 === null) {
                cell2 = cellValue;
            }
            else if (cell3 === null) {
                cell3 = cellValue;
            }
            //clean cell value for the next cell
            cellValue = "";
            break;
        case '\n':
            //found full row
            cell4 = cellValue;
            console.log(`${cell1} | ${cell2} | ${cell3} | ${cell4} `);
            //reset cells data:
            cell1 = null;
            cell2 = null;
            cell3 = null;
            cell4 = null;
            cellValue = "";
            break;
        default:
            //just a character from cell data
            cellValue += symbol; //concatenate characters to get a cell data
            break;
    }
}