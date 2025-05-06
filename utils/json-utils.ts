import * as fs from 'fs';

export function readJsonFile(filePath: string) {
    
    // Đọc nội dung file và parse sang object
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    //In ra console
    console.log('Nội dung JSON:', jsonData);
}