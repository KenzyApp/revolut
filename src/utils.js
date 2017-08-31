
export default class Utils {

    static exchange(fromRate, toRate, amount) {
        return (amount * fromRate / toRate).toFixed(2).toString();
    }

    static parseAmount(amountToParse) {
        const parsedAmount = amountToParse.split('.');
        const amount = parseInt(parsedAmount[0]);
        const amountComma = Math.round((parseFloat(amountToParse).toFixed(2) - amount) * 100);

        return [amount, amountComma];
    };

    static calculateAmount(oldAmount, oldCommaAmount, newAmount, newCommaAmount, flag) {
        let updatedFirst = oldAmount - flag * newAmount;
        let updatedFirstComma = oldCommaAmount - flag * newCommaAmount;

        if (updatedFirstComma >= 100) {
            updatedFirst++;
            updatedFirstComma -= 100;
        } else if (updatedFirstComma < 0) {
            updatedFirstComma = 100 + updatedFirstComma;
            updatedFirst--;
        }
        return [updatedFirst, updatedFirstComma];
    }

}

