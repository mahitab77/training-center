// src/app/models/program.model.ts

// Represents a single program with a name and a description
export interface Program {
  name: string;
  description: string;
}

// Represents the collection of programs categorized by age groups
export interface Programs {
  ages_4_6: Program[];
  ages_7_10: Program[];
  ages_11_13: Program[];
  ages_14_18: Program[];
  cross_age_programs: Program[];
}


export interface ProgramsData {
  programs: Programs;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Program: Represents a single program, including its name and description.
 This is the most granular level of your data model, corresponding to individual entries in your JSON file.

Programs: Aggregates multiple Program instances into categories based on age groups.
 Each property within this interface (such as ages_4_6, ages_7_10, etc.) corresponds to an array of Program objects,
  reflecting the categorized structure of your programs by age group in the JSON data.

ProgramsData: Represents the top-level structure of your JSON data,
              encapsulating the programs object that contains all categorized program data.
              This interface is crucial for accurately mapping the structure of your JSON file,
              where programs is a key at the root level.*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////