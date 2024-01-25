import { Visibility, Weather, diaryEntries ,noSesitiveDiaryEntries} from "../types"
import diaryData from "./diary.json"


const diaries: Array<diaryEntries> = diaryData as Array<diaryEntries>
export const getEntries = ():Array<diaryEntries>=>diaries

export const findById = (id:number):noSesitiveDiaryEntries | undefined =>{
    const entry = diaries.find(d=> d.id ===id)
    if (entry !==null) {
        diaries.map(({id,date,weather,visibility})=>{
            return {
                id,
                date,
                weather,
                visibility
            }
        })
    }
        return entry
}
 
export const getEntriesWhitoutSensitiveInfo =():Array<noSesitiveDiaryEntries> => {
    return diaries.map(({id,date,weather,visibility})=>{
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry: diaryEntries): diaryEntries => {
    const addedDiaryEntry :diaryEntries= {
        id: diaries.length + 1,
        ...newDiaryEntry
    };

    diaries.push(addedDiaryEntry);

    return addedDiaryEntry;
};