interface Course {
    id: number;
    title: string;
    description: string;
    ageGroup: string; 
    imageUrl: string; 
    schoolCourse?: boolean; // Indicate if it's a school course
    educationType?: string; // "British", "American", "IB", "National"
    url?: string;
  }