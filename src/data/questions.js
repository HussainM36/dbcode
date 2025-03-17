const questions = [
  {
    question: "Create a table named 'students'.",
    correctAnswer: ["CREATE", "TABLE", "students", ";"],
    extraWords: ["ALTER", "DROP", "DELETE", "RENAME"],
  },
  {
    question: "Select all records from the 'users' table.",
    correctAnswer: ["SELECT", "*", "FROM", "users", ";"],
    extraWords: ["INSERT", "DELETE", "UPDATE", "TABLE"],
  },
  {
    question: "Insert a new record into the 'customers' table.",
    correctAnswer: ["INSERT", "INTO", "customers", "VALUES", "(", ")", ";"],
    extraWords: ["SELECT", "UPDATE", "DROP", "ALTER"],
  },
  {
    question: "Delete all data from the 'orders' table.",
    correctAnswer: ["DELETE", "FROM", "orders", ";"],
    extraWords: ["DROP", "UPDATE", "ALTER", "RENAME"],
  },
  {
    question: "Change the name of 'employees' table to 'staff'.",
    correctAnswer: ["ALTER", "TABLE", "employees", "RENAME", "TO", "staff", ";"],
    extraWords: ["DELETE", "UPDATE", "DROP", "CREATE"],
  },
  {
    question: "Add a column 'email' to the 'users' table.",
    correctAnswer: ["ALTER", "TABLE", "users", "ADD", "email", "VARCHAR(100)", ";"],
    extraWords: ["SELECT", "DROP", "DELETE", "RENAME"],
  },
  {
    question: "Find the total number of records in 'orders' table.",
    correctAnswer: ["SELECT", "COUNT", "(", "*", ")", "FROM", "orders", ";"],
    extraWords: ["DELETE", "UPDATE", "DROP", "ALTER"],
  },
  {
    question: "Retrieve the names of all students from 'students' table.",
    correctAnswer: ["SELECT", "name", "FROM", "students", ";"],
    extraWords: ["INSERT", "DELETE", "DROP", "ALTER"],
  },
  {
    question: "Remove the 'temp_data' table from the database.",
    correctAnswer: ["DROP", "TABLE", "temp_data", ";"],
    extraWords: ["DELETE", "UPDATE", "ALTER", "RENAME"],
  },
  {
    question: "Update the age of all employees to 30.",
    correctAnswer: ["UPDATE", "employees", "SET", "age", "=", "30", ";"],
    extraWords: ["DROP", "ALTER", "TABLE", "RENAME"],
  },
];

export default questions;
