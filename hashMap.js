import linkedList from "./linkedList.js";

class hashMap{
    constructor(max){
        this.max = max;
        this.map = [];
        for(let i = 0; i < this.max;i++){
            this.map.push(new linkedList); 
        }
    }
    // set will take a key and value and you use that to find the place in the hash of the key and then go to that spot in the map and add to the list accordingly.
    set(key,val,location){
        let hashed = this.hash(key);
        let position = this.map[hashed];
        // handles if their is conflict
        if(position.size > 0){
            let idxNum = position.find(key);
            let llPos = position.locate(idxNum);
            if(llPos === null){
                if(location==='front'){
                    position.append(key,val);
                    position.size++;
                    return;
                }else if(location==='back' || !location){
                    position.prepend(key,val);
                    position.size++;
                    return;
                }
            }else{
                llPos.value = val;
                return;
            }
        }

        if(location === 'front'){
            position.append(key,val);
            position.size++;
            return console.log('node place at front successfully!');
        }else if(location === 'back'){
            position.prepend(key,val);
            position.size++;
            return console.log('Node placed at tail successfully!')
        }
        // do something if not ewither of the above
    }
    // hash hashes they key to tell us the index of where we should place the data.
    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode%this.max-1;
    }
}

let newMap = new hashMap(32);
newMap.set('Mason','430-610-8924','front');
newMap.set('Samantha','430-610-8924','back');
newMap.set('George','430-610-8924','back');
newMap.set('Devin','430-610-8924','back');
newMap.set('Nathaniel','430-610-8924','front');
newMap.set('Nasom','430-610-8924','front');
newMap.set('Earl','430-610-8924','front');
newMap.set('Mason','430-610-8954',);
console.log(newMap);