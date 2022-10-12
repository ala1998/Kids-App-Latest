import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {
    async saveItem(key, value) {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
  
    async removeItem(key) {
        try{
          await AsyncStorage.removeItem(key)
          .then(()=>
            console.log('Token removed',key)
          );
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
    async getItem(key){
      const item = await AsyncStorage.getItem(key)
      return item
    }
};

export default deviceStorage;