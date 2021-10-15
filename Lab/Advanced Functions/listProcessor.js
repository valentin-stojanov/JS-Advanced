function listProcessor(input) {
    const tokens = [...input];

    function createProcessor() {
        const result = [];

        function add(str) {
            result.push(str);
        }

        function remove(str) {
            let indexToRemove = result.indexOf(str);
            while (indexToRemove !== -1) {
                result.splice(indexToRemove, 1);
                indexToRemove = result.indexOf(str);
            }
        }

        function print() {
            console.log(result.join(','));
        }

        return {
            add,
            remove,
            print
        }
    }

    const processor = createProcessor();

    for (const token of tokens) {
        [command, str] = token.split(" ");
        processor[command](str);
    }
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);