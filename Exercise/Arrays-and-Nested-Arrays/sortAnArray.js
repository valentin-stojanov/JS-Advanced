function sortAnArray(arr){
    const sorted = [...arr];

    sorted.sort((a, b) => {
        if(a.length - b.length > 0){
            return 1;
        } else if (a.length - b.length < 0){
            return -1;
        }
        return a.localeCompare(b);
    });

    console.log(sorted.join('\n'));
}

sortAnArray(['test', 
'Deny', 
'omen', 
'Default']
);