/**
 * Formats the result to the desired output.
 */
module.exports = class OutputFormatter {
    constructor(result) {
        this.result = result;
    }

    /**
     * Outputs the result as JSON.
     * 
     * @returns {String}
     */
    toJSON() {
        return JSON.stringify({output: this.result});
    }
}