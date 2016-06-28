function count(mixedText, includePunctuation) {
  if (!mixedText) return 0;
  mixedText = mixedText.replace(/\d+/g, '');
  
  if (includePunctuation) {
    return mixedText.match(/\w+|[^\u0000-\u0020]/g).length;
  } else {
    return mixedText.match(/\w+|[^\u0000-\u0040, \u005b-\u0060, \u007b-\u007f, \u3000-\u303f, \uff00-\uffef]/g).length;
  }
}

function updateCostFunc(requestTypeElem, requestElem, characterCountElem, costElem) {
  return function() {
    var requestType = parseInt(requestTypeElem.val());
    var requestText = requestElem.val();
    var chars = 0;
    var cost = 0;

    switch (requestType) {
      case 0:
        chars = count(requestText, true);
        cost = chars * 15; break;

      case 1:
        chars = count(requestText, false);
        cost = chars * 10; break;

      case 2:
        chars = count(requestText, true);
        cost = chars * 12; break;
    }

    characterCountElem.text(chars);
    costElem.text(cost);
  }
}
