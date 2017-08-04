function get_elements_by_xpath(xpath_str, elem=document) {
  var res = document.evaluate(xpath_str, elem, null, XPathResult.ANY_TYPE, null);
  var rtn = [];
  var tmp = res.iterateNext();
  while (tmp != null) {
    rtn.push(tmp);
    tmp = res.iterateNext()
  }
  return rtn;
}