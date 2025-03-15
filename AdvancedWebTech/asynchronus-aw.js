function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 21454543,
                name: "Adnan"
            });        
        }, 1000);
    })
}

async function getUser() {
    console.log("Fetching user data...");
    
    let user = await fetchUserData();
    console.log("User Data: ", user);
    console.log("processing user data...");
    
}

getUser();