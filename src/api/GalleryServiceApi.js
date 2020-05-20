import axios from 'axios';

export const getImages = async() => {
    try{
       const response = await axios.get(`images.json`);
       if(response) {
           const data = response.data;
           const imagesList =Object.keys(data).map((id) => ({
            ...data[id],
            id: id
        }));

        return imagesList;
       }
    }
    catch(error){
        alert(error);
        throw Error("Error Occured") ;    
    }    
}

export const saveImageInfo = async(image) => {
    try{
        const imageInfo = {
            title: image.title,
            author: image.author,
            description: image.description,
            url: image.url
        };

       const response = await axios.put(`images/${image.id}.json`, imageInfo);
       if(response.status == 200)
            return true;
    }
    catch(error){
        alert(error);
        throw Error("Error Occured") ;    
    }    
}