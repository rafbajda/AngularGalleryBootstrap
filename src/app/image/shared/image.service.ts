import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }
    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id);
    }
}


const IMAGES = [
    {"id": 1, 
    "category": "boats",
    "caption": "Big boat XD", 
    "url": "assets/img/boat_01.jpg"
    },
    {"id": 2, 
    "category": "boats",
    "caption": "Smaller blue boat", 
    "url": "assets/img/boat_02.jpg"
    },
    {"id": 3, 
    "category": "boats",
    "caption": "Exclusive boat xdd", 
    "url": "assets/img/boat_03.jpg"
    },
    {"id": 4, 
    "category": "football",
    "caption": "Camp nou", 
    "url": "assets/img/football_01.jpg"
    },
    {"id": 5, 
    "category": "football",
    "caption": "Messi", 
    "url": "assets/img/football_02.jpg"
    },
    {"id": 6, 
    "category": "football",
    "caption": "Levandovsky", 
    "url": "assets/img/football_03.jpg"
    },
    {"id": 7, 
    "category": "programming",
    "caption": "some mac xD", 
    "url": "assets/img/programming_01.jpg"
    },
    {"id": 8, 
    "category": "programming",
    "caption": "interesting graphic with code languages", 
    "url": "assets/img/programming_02.jpg"
    }
]
