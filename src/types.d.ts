export type Weather = "sunny"  | "rainy"| "cloudy"| "windy"| "stormy"
export type Visibility = "great"  | "good" | "ok" | "poor"

export interface diaryEntries {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

export type noSesitiveDiaryEntries = Pick<diaryEntries,"id" | "date" | "weather" | "visibility">

export type newDiaryEnty = Pick<diaryEntriesNew, "date" | "weather" | "visibility" | "comment">