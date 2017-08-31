
export default class Utils {

    static exchange(fromRate, toRate, amount) {
        return amount * fromRate / toRate;
    }

}

