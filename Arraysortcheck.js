
      function checkSorted(arr) {
        let ascending = true;
        let descending = true;

        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < arr[i - 1]) {
            ascending = false;
          }
          if (arr[i] > arr[i - 1]) {
            descending = false;
          }
        }

        if (ascending) return 1;
        if (descending) return -1;
        return 0;
      }

      const array1 = [1, 2, 3, 4, 5];
      const array2 = [5, 4, 3, 2, 1];
      const array3 = [1, 3, 2, 4, 5];

      document.write("For array1: " + checkSorted(array1)); 
      document.write("<br>");
      document.write("For array2: " + checkSorted(array2)); 
      document.write("<br>");
      document.write("For array3: " + checkSorted(array3)); 
