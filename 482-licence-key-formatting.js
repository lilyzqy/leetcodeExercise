/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
 /**
  * @param {string} S
  * @param {number} K
  * @return {string}
  */
 var licenseKeyFormatting = function(S, K) {

     const newS = S.split('-').join('');

     const overflow = newS.length % K === 0 ? K : newS.length % K ;

     let formatted = newS.slice(0, overflow).toUpperCase();

     for( let i = overflow; i < newS.length; i += K) {

        formatted = formatted + '-' + newS.slice(i, i + K).toUpperCase();
     }

     return formatted;
 };

// console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J",2));
