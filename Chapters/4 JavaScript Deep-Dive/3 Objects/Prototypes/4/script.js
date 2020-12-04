    // Inherited vs. Own Properties

    // Because inherited properties and methods don't exist directly
    // within an object, we don't see them exposed in examining the 
    // object.
    // info.display(rec1);
    
    // 'for...in...' iteration exposes inherited properties and methods
    // for (const key in rec1) {
    //     info.tag(key + ":", rec1[key]);
    // };

    // for (const key in rec1) {
    //     if(rec1.hasOwnProperty(key)) {
    //         info.tag(key + ":", rec1[key]);
    //     }
    // };