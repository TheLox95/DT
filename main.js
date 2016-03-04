var BinarySearch = (function () {
    function BinarySearch() {
    }
    BinarySearch.prototype.search = function (numero, array) {
        var low = 0;
        var high = array.length;
        var index = null;
        while (index == null) {
            var middleIndex = Math.round(low + (high - low) / 2) - 1;
            if (array[middleIndex] < numero) {
                low = middleIndex + 1;
            }
            else if (array[middleIndex] > numero) {
                high = middleIndex - 1;
            }
            else {
                index = middleIndex;
            }
        }
        return index;
    };
    return BinarySearch;
}());
