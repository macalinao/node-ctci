// Finds where the loop begins in the linked list
module.exports = function findLoop(list) {
  list = list.head;

  var na = list;
  var nb = list;

  do {
    na = na.next;
    nb = nb.next.next;
  } while (na !== nb);

  na = list;

  var index = 0;
  while (na !== nb) {
    na = na.next;
    nb = nb.next;
    index++;
  }

  return index;
};
