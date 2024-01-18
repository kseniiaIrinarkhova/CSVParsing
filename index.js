/*Part 1 Refactoring

/* Copy of Part 3  of previous lab */
console.log(`
*****************************************
***Part 1: Refactoring and easy output***
*****************************************
`);

const str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cellValue = "";
//Declare cell info
/* ---------------------------
* Old code. Change to array
let cell1 = null;
let cell2 = null;
let cell3 = null;
let cell4 = null;
---------------------------- */
let row =[];

for (const symbol of str) {
    switch (symbol) {
        case ',':
            /* --------------------------------
            * Old code. do not need to check cells
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
            ------------------------------------ */
            row.push(cellValue);
            //clean cell value for the next cell
            cellValue = "";
            break;
        case '\n':
            //found full row
            /* -----------------------------------------
            * old code. 
            cell4 = cellValue;
            console.log(`${cell1} | ${cell2} | ${cell3} | ${cell4} `);
            //reset cells data:
            cell1 = null;
            cell2 = null;
            cell3 = null;
            cell4 = null;
            ------------------------------------------- */
            row.push(cellValue); // added the last cell value

            console.log(row);

            row = []; //clear row
            cellValue = "";
            break;
        default:
            //just a character from cell data
            cellValue += symbol; //concatenate characters to get a cell data
            break;
    }
}


/** Part 2: Expanding Functionality

Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

Store your results in a two-dimensional array.
    Each row should be its own array, with individual entries for each column.
    Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.

input: ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
*/
console.log(`
*****************************************
***Part 2: Expanding Functionality*******
*****************************************
`);
// variable
let inputStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let table =[]; //final table
row = [];
cellValue="";

for (const symbol of inputStr) {
    switch (symbol) {
        case ',':
            //add cell in row
            row.push(cellValue);
            //clean cell value for the next cell
            cellValue = "";
            break;
        case '\n':
            //found full row
           
            row.push(cellValue); // added the last cell value
            table.push(row); //added row to table
            row = []; //clear row
            cellValue = "";
            break;
        default:
            //just a character from cell data
            cellValue += symbol; //concatenate characters to get a cell data
            break;
    }
}

console.log(table);